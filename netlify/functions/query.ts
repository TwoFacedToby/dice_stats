import postgres from 'postgres';

const password = process.env.SUPABASE_PASSWORD
const sql = postgres(`postgresql://postgres:${password}@db.axfivzclxcnhgcwsdqmo.supabase.co:5432/postgres`)

export async function handler() {
    try {
        const result = await sql`SELECT * FROM my_table LIMIT 5`
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Query failed', details: err })
        }
    }
}
