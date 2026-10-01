const Show = require("../models/show.model");
 
const handleError = (res, error, message) => {

    if (error.name === "ValidationError") {
        return res.status(400).json({ message: "Datos no válidos", error: error.message });
    }
    if (error.name === "CastError") {
        return res.status(400).json({ message: "El id no tiene un formato válido" });
    }
    
    return res.status(500).json({ message, error: error.message });
};
 

const getAllShows = async (req, res) => {

    try {
        const shows = await Show.find();
        return res.status(200).json(shows);
    } catch (error) {
        return handleError(res, error, "Error obteniendo las tablas");
    }
};
 

const getShowById = async (req, res) => {

    try {
        const { id } = req.params;
        const show = await Show.findById(id);
        if (!show) {
            return res.status(404).json({ message: "No se encuentra la tabla con ese id" });
        }
        return res.status(200).json(show);
    } catch (error) {
        return handleError(res, error, "Error obteniendo la tabla");
    }
};
 
const createShow = async (req, res) => {

    try {
        const newShow = new Show(req.body);
        await newShow.save();
        return res.status(201).json(newShow);
    } catch (error) {
        return handleError(res, error, "Error creando la tabla");
    }
};
 
const updatedShow = async (req, res) => {

    try {
        const updateShow = await Show.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updateShow) {
            return res.status(404).json({ message: "No se encuentra la tabla con ese id" });
        }
        return res.status(200).json(updateShow);
    } catch (error) {
        return handleError(res, error, "Error actualizando la tabla");
    }
};
 
const deletedShow = async (req, res) => {
    
    try {
        const deleted = await Show.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "No se encuentra la tabla con ese id" });
        }
        return res.status(200).json({ message: "Tabla eliminada correctamente", show: deleted });
    } catch (error) {
        return handleError(res, error, "Error borrando la tabla");
    }
};
 
module.exports = { getAllShows, getShowById, createShow, updatedShow, deletedShow };
 