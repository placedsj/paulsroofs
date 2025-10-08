// Database schema for contact form submissions
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  address: text('address'),
  timeframe: varchar('timeframe', { length: 50 }),
  preferredContact: varchar('preferred_contact', { length: 50 }),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;
