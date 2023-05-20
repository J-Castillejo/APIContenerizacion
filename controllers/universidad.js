const Universidad = require("../models/Universidad");

const universidadController = {

    create: async (req, res) => {

        const universidad = new Universidad(req.body);
        try {
            if (await Universidad.findOne({ nombre: req.body.nombre })) {
                return res.status(200).json({ msg: "La universidad ya existe." });
            } else {
                await universidad.save();
                return res.status(200).json(universidad);
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    find: async (req, res) => {
        try {
            const universidad = await Universidad.find();
            return res.status(200).json(universidad);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    update: async (req, res) => {
        try {
            const universidad = await Universidad.findByIdAndUpdate(
                req.params.id,
                { ...req.body, fechaActualizacion: Date.now() },
                { returnOriginal: false }
            );
            return res.status(200).json(universidad);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
    delete: async (req, res) => {
        try {
            if (await Universidad.findByIdAndDelete(req.params.id)) {
                return res
                    .status(200)
                    .json({ msg: `Se ha borrado la universidad con ID: ${req.params.id}` });
            } else {
                return res.status(404).json({ msg: "La universidad no existe." });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({ msg: "Petición invalida" });
        }
    },
}

module.exports = universidadController;