const express = require("express");

const connect = require("./src/config/db");

const showsRouter = require("./src/routes/shows.routes");

const server= express();

server.use(express.json());


connect();

server.use("/shows", showsRouter);
server.use((req, res) => {
    return res.status(404).json({message: "Ruta no encontrada"});
})


server.use((error, req, res, next) => {
    const status = error.status || 500;
    return res.status(status).json({
        message: status === 400 ? "Petición mal formada" : "Error interno" ,
        error: error.message,
    });
});


server.listen(8080, () => {
    console.log("Servidor levantado en http://localhost:8080");
});
