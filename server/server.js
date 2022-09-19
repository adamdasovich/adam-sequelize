const express = require('express');
const cors = require('cors');

const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const router = require('./routes/productRouter');
app.use('/api/products', router);

//static images folder
app.use('/images', express.static('./images'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})