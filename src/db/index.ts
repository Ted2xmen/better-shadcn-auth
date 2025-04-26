import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema'

// Create a connection to the database using Neon
const sql = neon(process.env.DATABASE_URL!)

// Create a Drizzle client with our schema
export const db = drizzle(sql, { schema })
