const TipoProyecto = require("../models/TipoProyecto");

const tipoProyectoController = {

    create: async (req, res) => {

        const tipoProyecto = new TipoProyecto(req.body);
        try {
            if (await TipoProyecto.findOne({ nombre: req.body.nombre })) {
                return res.status(200).json({ msg: "El tipo de proyecto ya existe." });
            } else {
                await tipoProyecto.save();
                return res.status(200).json(tipoProyecto);
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    find: async (req, res) => {
        try {
            const tipoProyecto = await TipoProyecto.find();
            return res.status(200).json(tipoProyecto);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    update: async (req, res) => {
        try {
            const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
                req.params.id,
                { ...req.body, fechaActualizacion: Date.now() },
                { returnOriginal: false }
            );
            return res.status(200).json(tipoProyecto);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    delete: async (req, res) => {
        try {
            if (await TipoProyecto.findByIdAndDelete(req.params.id)) {
                return res
                    .status(200)
                    .json({ msg: `Se ha borrado el tipo de proyecto con ID: ${req.params.id}` });
            } else {
                return res.status(404).json({ msg: "El tipo de proyecto no existe." });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
}

module.exports = tipoProyectoController;
