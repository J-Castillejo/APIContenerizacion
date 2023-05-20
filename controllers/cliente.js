const Cliente = require("../models/Cliente");

const clienteController = {

	// metodo de creación
	create: async (req, res) => {
		
		const cliente = new Cliente(req.body);
		try {
			if (await Cliente.findOne({ $or: [{nombre: req.body.nombre}, {email: req.body.email}] })) {
				return res.status(200).json({ msg: "El cliente ya existe." });
			} else {
				await cliente.save();
				return res.status(200).json(cliente);
			}
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	find: async (req, res) => { 		// metodo de busqueda
		try {			
			const cliente = await Cliente.find();
			return res.status(200).json(cliente);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	update: async (req, res) => {		// metodo de actualización
		try {
			const cliente = await Cliente.findByIdAndUpdate(
				req.params.id,
				{ ...req.body, fechaActualizacion: Date.now() },
				{ returnOriginal: false }
			);
			return res.status(200).json(cliente);
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
	delete: async (req, res) => {		// metodo de eliminación
		try {
			if (await Cliente.findByIdAndDelete(req.params.id)) {
				return res
					.status(200)
					.json({ msg: `Se ha borrado el cliente con ID: ${req.params.id}` });
			} else {
				return res.status(404).json({ msg: "El cliente no existe." });
			}
		} catch (error) {
			console.log(error);
			return res.status(400).json({ msg: "Petición invalida" });
		}
	},
}

module.exports = clienteController;