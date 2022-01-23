module.exports = (application) => {
	application.get('/cadastro', function (req, res) {
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.post('/cadastrar', (req, res) => {
			application.app.controllers.cadastro.cadastrar(application, req, res);
		});

	application.get('/cadastro_sucesso', (req, res) => {
			application.app.controllers.cadastro.cadastroSucesso(application, req, res);
		});
}