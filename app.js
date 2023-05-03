const express = require("express");
const app = express(); //Responder solicitudes de clientes
const port = process.env.port || 3000; //Para cuando realizemos en Deploy - despliegue

//Para obtener un recurso del servidor http://localhost.3000
app.get("/", (req, res)=>{
    res.send("Hola. Este es un servidor en Node.js con express")
})

//Para obtener un recurso del servidor http://localhost.3000/productos
app.get("/productos", (req, res)=>{
    res.send("Esta seria en teoria la pagina de productos")
})

app.get("*", (req, res)=>{
    res.send("404 | Pagina no encontrada")
})

app.listen(port,()=>{
    console.log("Servidor en node.js con express escuchando en el puerto, port")
})

/*app.get = Obtener un recurso
app.post = Crear un recurso
app.put = Actualizar un recurso
app.delete = Aliminar un recurso*/