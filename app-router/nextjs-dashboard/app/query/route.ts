// Import the postgres library
import postgres from 'postgres';

// Initialize the Postgres client with SSL requirement
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Function to list invoices with amount 666
async function listInvoices() {

  // Execute the SQL query to fetch invoices and associated customer names
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  // Return the fetched data
	return data;

}

// GET /api/query
export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });

  // Try to fetch the invoices
  try {

    // Fetch the invoices from the database
  	return Response.json(await listInvoices());

  } catch (error) {

    // Return an error response if something goes wrong
  	return Response.json({ error }, { status: 500 });

  }

}
