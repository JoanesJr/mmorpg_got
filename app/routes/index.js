module.exports = (application) => {
	application.get('/', function (req, res) {
		application.app.controllers.index.index(application, req, res);
	});

	application.post('/autenticar', (req, res) => {
			application.app.controllers.index.autenticar(application, req, res);
		});
}