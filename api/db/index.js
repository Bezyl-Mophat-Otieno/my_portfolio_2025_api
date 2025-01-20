import { sql } from '@vercel/postgres';

export class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
    }
}

export async function executeQuery(query,values) {
   try {
        const result = await sql.query(query, values);
        return result.rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw new DatabaseError('Failed to execute database query');
    }
}

export const db = {
    query: executeQuery,
};