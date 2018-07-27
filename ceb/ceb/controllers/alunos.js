module.exports = function (app) {
    app.get("/alunos/:id", function (req, res) {

        var id = req.params.id;
        var connection = app.DAO.connection();
        var alunoDao = new app.DAO.AlunoDao(connection);

        alunoDao.BuscaId(id, function (erro, results) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            
            res.send(results);
        });

    });

    app.get("/alunos", function (req, res) {

        var connection = app.DAO.connection();
        var alunoDao = new app.DAO.AlunoDao(connection);

        alunoDao.lista(function (erro, results) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }

            res.send(results);
        });

    });
}