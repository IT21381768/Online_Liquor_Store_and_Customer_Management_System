const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// const postRoutes = require('./routes/posts');
// const detailsRoutes = require('./routes/details');

app.use(bodyParser.json());
app.use(cors());

//app.use(postRoutes);
//app.use(detailsRoutes);

app.use(cors());
mongoose.set('strictQuery', true);
const port = 8000;
const url = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database not connected', err));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const postRoutes = require('./routes/posts');
app.use('/contact', postRoutes);

const detailsRoutes = require('./routes/details');
app.use('/informationForm', detailsRoutes); 


app.use('/DisplayInfo', detailsRoutes);

const supplierRoutes = require('./routes/supplier');
app.use('/AddSupplier', supplierRoutes);

app.use('/EditSupplier', supplierRoutes);
app.use('/SupplierList', supplierRoutes);

const inventoryRoutes = require('./routes/inventory');
app.use('/addProduct', inventoryRoutes);

app.use('/inventory', inventoryRoutes);
app.use('/inventoryDetail', inventoryRoutes);
app.use('/adminDashboard', inventoryRoutes);
app.use('/editInventory', inventoryRoutes);

const loginRoutes = require('./routes/login');
app.use('/login', loginRoutes);








