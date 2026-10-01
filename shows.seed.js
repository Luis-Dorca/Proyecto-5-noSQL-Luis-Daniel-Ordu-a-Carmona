// Este archivo no se sube, pero lo tengo guardado en la carpeta para reconocerlo.

const mongoose = require("mongoose");

const Show = require("./src/models/show.model");

const showsData = [
    { name: "Pyzel Ghost", brand: "Pyzel", type: "shortboard", length: "6'0\"", width: 19.25, thickness: 2.4, volume: 29.5, fins: "thruster", material: "PU", level: "avanzado", price: 620, inStock: true },
    { name: "Lost Puddle Jumper", brand: "Lost", type: "fish", length: "5'8\"", width: 20.5, thickness: 2.5, volume: 32.8, fins: "quad", material: "epoxy", level: "intermedio", price: 585, inStock: true },
    { name: "Firewire Sci-Fi", brand: "Firewire", type: "funboard", length: "7'2\"", width: 21.25, thickness: 2.75, volume: 44.0, fins: "2+1", material: "epoxy", level: "principiante", price: 710, inStock: false },
    { name: "Channel Islands Happy", brand: "Channel Islands", type: "longboard", length: "9'0\"", width: 22.5, thickness: 2.9, volume: 62.0, fins: "single", material: "PU", level: "intermedio", price: 790, inStock: true },
]

const seedDataBase = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/TablasFlotadoras");
        console.log("Conectado con la base de datos");
        await Show.deleteMany();
        console.log("Borrando colección de Tablas");
        await Show.insertMany(showsData);
        console.log("Insertando tablas en la base de datos");
    }catch(error){
        console.error("Error ejecutando la semilla", error.message);
    }finally{
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
    }
};

seedDataBase();
