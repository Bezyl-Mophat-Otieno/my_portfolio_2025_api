import { db } from './index';
import fs from 'fs';
import path from 'path';

export async function runMigrations() {
    try {
        const schemaSQL = fs.readFileSync(
            path.join(process.cwd(), 'api/db/schema.sql'),
            'utf8'
        );

        await db.query(schemaSQL);
        console.log('Database migrations completed successfully');
    } catch (error) {
        console.error('Failed to run database migrations:', error);
        throw error;
    }
}