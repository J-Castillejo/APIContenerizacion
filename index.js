const express = require("express");
const { getConnection } = require("./db/db-connection-mongo");
const cors = require('cors');
require("dotenv").config();


const app = express();

app.use(cors());

getConnection();

app.use(express.json());

app.use('/cliente', require('./routers/cliente'));
app.use('/tipoproyecto', require('./routers/tipoProyecto'));
app.use('/etapa', require('./routers/etapa'));
app.use('/universidad', require('./routers/universidad'));
app.use('/proyecto', require('./routers/proyecto'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});