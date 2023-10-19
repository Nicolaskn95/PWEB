function Conta() {
    var nomeCorrentista
    var banco
    var numConta
    var saldo

    this.getNomeCorrentista = function() {
        return nomeCorrentista
    }
    this.getBanco = function() {
        return banco
    }
    this.getNumConta = function() {
        return numConta
    }
    this.getSaldo = function() {
        return saldo
    }

    this.setNomeCorrentista = function(value) {
        nomeCorrentista = value
    }
    this.setBanco = function(value) {
        banco = value
    }
    this.setNumConta = function(value) {
        numConta = value
    }
    this.setSaldo = function(value) {
        saldo = value
    }
}

function Poupanca() {
    var juros
    var dataVencimento
    

    this.getJuros = function() {
        return juros
    }
    this.getDataVencimento = function() {
        return dataVencimento
    }
    this.setJuros = function(value) {
        juros = value
    }
    this.setDataVencimento = function(value) {
        dataVencimento = value
    }
}

function Corrente() {
    var saldoEspecial

    this.getSaldoEspecial = function() {
        return saldoEspecial
    }
    this.setSaldoEspecial = function(value) {
        saldoEspecial = value
    }
}


Corrente.prototype = new Conta()
Poupanca.prototype = new Conta()

const nContaCorrente = new Corrente()
const nContaPoupanca = new Poupanca()
nContaPoupanca.setNomeCorrentista('Nicolas')
nContaCorrente.setNomeCorrentista('Osvaldo')

nContaCorrente.setSaldoEspecial('seila')
nContaPoupanca.setDataVencimento('01/01/2023')

console.log(nContaPoupanca.getNomeCorrentista())
console.log(nContaCorrente.getNomeCorrentista())

console.log(nContaCorrente.getSaldoEspecial())
console.log(nContaPoupanca.getDataVencimento())