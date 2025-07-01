const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('StudentSpendSmart Backend API is running!');
});

// Placeholder for Plaid integration routes
// app.post('/api/plaid/create_link_token', ...);
// app.post('/api/plaid/exchange_public_token', ...);
// app.get('/api/transactions', ...);

// Placeholder for other API routes (e.g., user, budget, insights)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
