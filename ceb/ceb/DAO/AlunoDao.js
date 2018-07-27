function AlunoDao(connection) {
    this._connection = connection;
}

AlunoDao.prototype.lista = function (callback) {
    this._connection.query('Select * from tb_alunos', callback);
}

AlunoDao.prototype.BuscaId = function (id, callback) {
    this._connection.query('Select * from tb_alunos where id_aluno = ?', [id], callback);
}

module.exports = function () {
    return AlunoDao;
}