const express = require('express');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');

const connectDB = require('./src/config/db');
const formRoutes = require('./src/routes/form.routes');
const corsOptions = require('./src/utils/cors');
const swaggerSpec = require('./src/config/swagger');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', formRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({ message: 'Not allowed by CORS' });
    }
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
