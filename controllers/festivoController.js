const festi = require('../utils/calcularPascua');

exports.list = (req, res) => {
	festi.listHolidays(req.params.year, (err, data) => {
		if (err) {
			return res
				.status(500)
				.send({ mensaje: 'Error obteniendo la lista de festivos' });
		} else {
			return res.send(data);
		}
	});
};

exports.verify = (req, res) => {
	festi.verifyDate(
		req.params.year,
		req.params.month,
		req.params.day,
		(err, data) => {
			if (err) {
				return res.status(500).send({
					mensaje: 'Error consultando la fecha',
				});
			} else {
				return res.send({
					Detalle: data ? 'Es festivo' : 'No es festivo',
				});
			}
		}
	);
};

