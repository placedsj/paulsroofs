# RoofRight - Paul's Roofing Web Application

## Overview

RoofRight is a comprehensive web application for Paul's Roofing, a metal roofing and home exterior specialist serving Southern New Brunswick. The application provides interactive tools for homeowners to visualize roofing options, request quotes, access educational resources, and includes a secure project management system for staff.

**Core Purpose:** Enable homeowners to explore roofing solutions through interactive visualization tools while providing staff with project management capabilities.

**Key Features:**
- Interactive color selection and roof visualization tool
- AI-driven material recommendations (via Google Gemini AI)
- Service showcase for metal roofing, asphalt shingles, repairs, siding, and gutters
- Quote request system
- Educational handbook with roofing articles
- Secure "Boss Quarters" admin dashboard for project management
- Crew hub for daily task tracking and team coordination

## Recent Changes

**October 8, 2025 - Branding & Materials Guide Enhancement**
- **REPLACED VISUALIZER** with comprehensive "Paul's Guide to Premium Materials" page
  - IKO Dynasty Shingles section with features, color palettes, and warranty comparison charts
  - Community Metal New Brunswick & Dairytown Exteriors (Sussex) section with profile options and metal vs shingles comparison
  - Mitten Siding section highlighting benefits
  - Supply Partners section (Kent.ca & HomeDepot.ca) emphasizing reliable supply chain
- Implemented brand taglines: #BetterCallPaul, #35YearsStrong, "Will yours be next?", "Old school workers, new school work"
- Replaced all logos with official Paul's Roofing logo (dark blue with house icon)
- Created StatsSection component showcasing: 35+ Years, 1000+ Roofs, 100% Satisfaction, A+ Quality
- Added ProjectGallery component with 6 professional project photos from actual completed work
- Updated hero background with uploaded project photo
- Enhanced contact form with "Preferred Method of Contact" field (Phone/Email/Text/Any)
- Changed CTA button text to "WILL YOURS BE NEXT?"
- Updated all regional references from Quispamsis to Southern New Brunswick
- Added ReviewsSection with placeholder customer testimonials and Facebook/review links
- **Updated navigation structure:** Moved LIGHTS and INSPECTION to footer only (not in header)
- **Updated header/footer backgrounds** to match logo color (dark blue #0a1628)
- **Updated exterior inspection page:** Removed "free" from visual inspections; added "Coming Soon 2026" for aerial inspections with heat loss detection

**October 7, 2025 - Vercel to Replit Migration**
- Migrated project from Vercel to Replit environment
- Updated development and production scripts to use port 5000 and bind to 0.0.0.0 for Replit compatibility
- Fixed missing CHECK_GREEN constant in Home component
- Updated contact information: paul@paulroofs.com, hurry@paulroofs.com
- Configured deployment for autoscale with Next.js build and start commands
- Website domain: www.paulroofs.com

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Technology:** Next.js 15.3.3 with React 18 and App Router

**Rationale:** Next.js provides server-side rendering for improved SEO and performance, essential for a customer-facing roofing business website. The App Router enables modern React patterns with React Server Components.

**Key Decisions:**
- TypeScript enabled with `ignoreBuildErrors: true` for rapid development
- Turbopack used in development for faster builds
- Custom port 5000 for both dev and production servers
- Host binding to 0.0.0.0 for network accessibility

### UI Component System
**Technology:** Radix UI primitives with shadcn/ui configuration

**Component Library Includes:**
- Dialog, Dropdown Menu, Select, Tabs for navigation
- Toast notifications for user feedback
- Form controls (Checkbox, Radio Group, Slider, Switch)
- Data display (Avatar, Card, Progress, Separator)
- Interactive elements (Accordion, Collapsible, Tooltip)

**Styling Approach:**
- Tailwind CSS with custom configuration
- CSS variables for theming flexibility
- Custom utility classes for glass morphism effects, text shadows, and elevation
- Neutral base color scheme with custom brand colors

### Design System
**Brand Colors:**
- Primary: Deep Orange (#D97706) - warmth and reliability
- Background: Dark Charcoal (#262629, zinc-900) - modern sophistication
- Accent: Dark Amber (#A16207) - complementary highlights
- Text: Zinc color palette for hierarchy

**Typography:**
- Headlines: 'Roboto Slab' (serif) - sturdy, reliable feel
- Body: 'Roboto' (sans-serif) - clarity and readability
- Loaded from Google Fonts with preconnect optimization

**Visual Effects:**
- Glass morphism with backdrop blur for modern UI elements
- Elevation effects with transform and shadow transitions
- Custom hero background with gradient overlay
- Text outline shadows for readability over images

### AI Integration
**Technology:** Google Genkit AI with Gemini models

**Architecture:**
- `@genkit-ai/googleai` for model access
- `@genkit-ai/next` for Next.js integration
- Separate AI development environment with genkit dev server
- AI flows likely used for material recommendation feature

**Development Workflow:**
- Dedicated genkit scripts for development and watch modes
- Separate dev configuration in `src/ai/dev.ts`
- Integration with Next.js API routes via genkit/next adapter

### Form Management
**Technology:** React Hook Form with Zod validation

**Dependencies:**
- `react-hook-form` for performant form handling
- `@hookform/resolvers` for validation schema integration
- Likely uses Zod for type-safe schema validation

**Use Cases:**
- Quote request forms
- Contact forms
- Admin dashboard inputs
- Crew hub task and time logging

### Data Visualization
**Technology:** Recharts library

**Purpose:** Display analytics and metrics in the Boss Quarters admin dashboard, such as project status, timelines, and resource allocation.

### Image Handling
**Configuration:**
- Next.js Image optimization enabled
- Remote patterns allowed:
  - `placehold.co` - placeholder images
  - `picsum.photos` - sample imagery
  - `ik.imagekit.io` - production image CDN

**Strategy:** Uses ImageKit.io for optimized image delivery in production, with fallbacks to placeholder services during development.

### State Management
**Approach:** React hooks and local component state

**Patterns:**
- `useState` for component-level state
- `useCallback` for memoized functions
- Custom hooks (e.g., `use-toast`) for reusable logic
- No global state management library detected - suggests simple state requirements

### Routing Architecture
**Structure:**
- `/` - Main landing page with services
- `/visualizer` - Interactive color/material selection tool
- `/handbook` - Educational resources and articles
- `/blog` - Roofing articles (redirects to handbook)
- `/blog/[slug]` - Individual article pages
- `/boss-quarters` - Password-protected admin dashboard
- `/crew-hub` - Team project management (component-based)

**Authentication Pattern:**
- Client-side password check for Boss Quarters
- Hardcoded password: "Paul1234!!" (should be moved to environment variables)
- No persistent session management
- Simple boolean state for auth status

### Project Management System
**Components:**
- `crew-hub.tsx` - Main project listing and management
- `project-card.tsx` - Individual project details with tasks, chat, and time logs
- Real-time updates via component state
- In-memory data storage (no persistence layer detected)

**Features:**
- Daily task lists
- Team chat messaging
- Time logging
- Project status tracking (In Progress, Upcoming, Completed)
- Tool and material inventory tracking

### Content Management
**Approach:** File-based content system

**Implementation:**
- Blog posts stored in `src/lib/posts.ts` as static data
- HTML content embedded in post objects
- Image URLs reference external CDN
- No CMS integration - content updates require code changes

**Trade-offs:**
- ✅ Simple deployment, no database required
- ✅ Type-safe content structure
- ❌ Non-technical users cannot update content
- ❌ No dynamic content capabilities

## External Dependencies

### AI & Machine Learning
- **Google Gemini AI** (via Genkit): Material recommendation engine
- **Genkit Framework**: AI workflow orchestration and deployment

### Authentication & Database
- **Firebase**: Authentication and potential data storage (SDK v11.9.1 installed but implementation not visible in provided files)

### UI Libraries & Frameworks
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Icon library for UI elements
- **Embla Carousel**: Touch-friendly carousel for image galleries
- **Recharts**: Chart library for data visualization

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx** & **tailwind-merge**: Conditional class name utilities
- **date-fns**: Date manipulation and formatting

### Development Tools
- **patch-package**: NPM package patching for customizations
- **dotenv**: Environment variable management
- **tsx**: TypeScript execution for AI dev scripts

### Image & Media
- **ImageKit.io**: Image CDN and optimization service
- **Next.js Image**: Built-in image optimization

### Hosting & Deployment
- **Firebase Hosting**: Configured in `.idx/integrations.json`
- **Google Maps Platform**: Available but not yet implemented
- **Project IDX**: Google's cloud-based development environment

### Potential Gaps
- No database detected (Firebase installed but no schema/queries visible)
- No payment processing integration
- No email service integration (for quote requests)
- No CRM or customer management system
- Boss Quarters authentication is client-side only (security concern)