import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const task = pgTable('task', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  completed: boolean('completed').default(false),
});
