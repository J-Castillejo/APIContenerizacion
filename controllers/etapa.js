const Etapa = require("../models/Etapa");

const etapaController = {

    create: async (req, res) => {

        const etapa = new Etapa(req.body);
        try {
            if (await Etapa.findOne({ nombre: req.body.nombre })) {
                return res.status(200).json({ msg: "La etapa ya existe." });
            } else {
                await etapa.save();
                return res.status(200).json(etapa);
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    find: async (req, res) => {
        try {
            const etapa = await Etapa.find();
            return res.status(200).json(etapa);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    update: async (req, res) => {
        try {
            const etapa = await Etapa.findByIdAndUpdate(
                req.params.id,
                { ...req.body, fechaActualizacion: Date.now() },
                { returnOriginal: false }
            );
            return res.status(200).json(etapa);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    delete: async (req, res) => {
        try {
            if (await Etapa.findByIdAndDelete(req.params.id)) {
                return res
                    .status(200)
                    .json({ msg: `Se ha borrado la etapa con ID: ${req.params.id}` });
            } else {
                return res.status(404).json({ msg: "La etapa no existe." });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
}

module.exports = etapaController;