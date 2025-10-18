This project uses Next.js (App Router), Drizzle ORM with Neon (serverless), and Genkit/Google AI for AI workflows. The guidance below focuses only on concrete, discoverable patterns in the repository so AI coding assistants can be productive immediately.

High-level architecture
- Next.js (app/) - UI and server endpoints live in `src/app` using the App Router. Pages and API routes use the standard Next route file layout (for example `src/app/api/contact/route.ts`).
- Database - Drizzle ORM with Neon serverless. Config in `drizzle.config.ts` and runtime DB client in `src/lib/db.ts` (exports `pool` and `db`). Environment variable: `DATABASE_URL` is required.
- Email - Replit mail connector wrapper in `src/utils/replitmail.ts`. It expects Replit environment tokens (`REPL_IDENTITY` or `WEB_REPL_RENEWAL`). Do not change the implementation unless you understand Replit auth.
- AI - Genkit + Google Gemini integration (see `package.json` scripts `genkit:dev` and `genkit:watch`), and a dedicated dev script at `src/ai/dev.ts` (genkit server). Genkit artifacts are ignored (`.genkit/*` in .gitignore).

Key developer workflows (commands)
- Start local Next dev server (binds to port 5000 for Replit compatibility):
  - npm run dev
- Start Genkit AI dev server (separate process used for AI workflows):
  - npm run genkit:dev
  - For auto-restart on changes: npm run genkit:watch
- Build for production (Next standalone output):
  - npm run build
  - Start the built app (project uses a small wrapper script): npm run start (calls `start-standalone.sh`)
- Database migrations / push (drizzle):
  - npm run db:push (requires `DATABASE_URL` configured)

Environment & secrets notes
- Required at runtime for DB and email:
  - DATABASE_URL (Postgres/Neon connection string) — used by `src/lib/db.ts` and `drizzle.config.ts`.
  - REPL_IDENTITY or WEB_REPL_RENEWAL — used by `src/utils/replitmail.ts` to send mail via Replit connectors.
- The repo contains a `.replit` file and `replit.md` documenting a Vercel → Replit migration; be mindful that some behaviors (port 5000, binding 0.0.0.0) are Replit-optimized.

Project-specific conventions & patterns
- App Router + Server Actions:
  - API routes use files like `src/app/api/<name>/route.ts`. They return NextResponse objects. See `src/app/api/contact/route.ts` for an example that inserts into the Drizzle table and calls `sendEmail`.
- Database usage:
  - `src/lib/db.ts` exports `db` (drizzle client) and `pool`. Use `db` and tables defined in `src/lib/schema.ts` for typed queries.
  - Schema file: `src/lib/schema.ts` defines tables (pgTable/columns). Use Drizzle patterns (insert(...).values(...).returning()) as in the contact route.
  - Current schema: `contactSubmissions` table with fields: id, name, email, phone, address, timeframe, preferredContact, message, createdAt.
- Email sending:
  - Use `sendEmail` wrapper in `src/utils/replitmail.ts` which validates message shape with Zod (`zSmtpMessage`) and calls Replit connector endpoint. The function will throw if Replit auth tokens are missing.
- UI Components:
  - Uses shadcn/ui components built on Radix UI primitives. Import from `@/components/ui/*` (e.g., Card, Button, Badge, Input).
  - Lucide React icons are standard: `import { Icon } from 'lucide-react'`.
  - Utility function `cn()` combines clsx and tailwind-merge for conditional classes.
  - Client components must have `"use client"` directive. Most form interactions and state management require this.
- Fonts & layout:
  - App-level styles and fonts are set in `src/app/layout.tsx` and `src/app/globals.css`. Footer is imported from `src/components/footer.tsx` and automatically included in layout.
- AI code & genkit:
  - Note: No `src/ai/dev.ts` found in current codebase, but Genkit packages are installed. AI workflows may be planned but not yet implemented.

Integration points & cross-component flows
- Contact flow:
  - Frontend form in `src/components/ContactForm.tsx` posts to `/api/contact`.
  - `src/app/api/contact/route.ts` validates payload, inserts into `contactSubmissions` (defined in `src/lib/schema.ts`), then calls `sendEmail` to notify the owner.
- DB migrations / schema sync:
  - `drizzle.config.ts` points at `src/lib/schema.ts` and outputs to `./drizzle`—use `npm run db:push` to push schema to the DB.
- AI / Genkit integration:
  - The repo depends on Genkit packages and has scripts to run the Genkit dev server. Genkit may connect into Next via `@genkit-ai/next`. Check `src/ai/dev.ts` for concrete handlers and available tools.

Quick examples (copyable references)
- Insert a contact (server): see `src/app/api/contact/route.ts` - uses `db.insert(contactSubmissions).values(...).returning()` and returns a JSON NextResponse.
- DB client initialization: `src/lib/db.ts` — sets up `neonConfig.webSocketConstructor = ws`, expects `DATABASE_URL`, exports `pool` and `db`.
- Mail sending: `src/utils/replitmail.ts` — uses a Zod schema `zSmtpMessage`, builds the auth token from `REPL_IDENTITY` or `WEB_REPL_RENEWAL`, and POSTs to Replit connector endpoint.
- Client component pattern: `src/components/ContactForm.tsx` — uses `"use client"`, useState for form data, fetch to API route, status states for loading/success/error.
- UI component imports: `import { Card, CardContent } from '@/components/ui/card'; import { Button } from '@/components/ui/button';`
- Icon usage: `import { Users, Clock } from 'lucide-react';` then `<Users className="w-4 h-4" />`

What not to change without checking runtime environment
- `src/utils/replitmail.ts` — tightly coupled to Replit connector auth; changing it may break email delivery in deployed Replit environments.
- `src/lib/db.ts` — uses Neon serverless websocket constructor; swapping DB client without adapting neon/websocket usage may break migrations or runtime connections.

Where to look first when asked to implement features
- For UI changes: `src/app` and `src/components`.
- For new API endpoints: create `src/app/api/<name>/route.ts` matching existing patterns.
- For DB work: update `src/lib/schema.ts` and run `npm run db:push`.
- For email/notifications: use `sendEmail` from `src/utils/replitmail.ts` to preserve Replit connector behavior.

Code templates (boilerplate)
- New API route (`src/app/api/<name>/route.ts`):
```typescript
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
// import { yourTable } from '@/lib/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validation logic here
    
    // Database operation
    // const result = await db.insert(yourTable).values(body).returning();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

- New client component (`src/components/YourComponent.tsx`):
```typescript
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function YourComponent() {
  const [loading, setLoading] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Component Title</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  );
}
```

- New database table (`src/lib/schema.ts` addition):
```typescript
export const yourTable = pgTable('your_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type YourTableSelect = typeof yourTable.$inferSelect;
export type YourTableInsert = typeof yourTable.$inferInsert;
```

Finish / Feedback
- If anything here is unclear or you want deeper rules for tests, linting, or AI model usage patterns in `src/ai`, tell me which area to expand and I'll iterate.
