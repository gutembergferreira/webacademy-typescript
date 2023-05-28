abstract class ContaBancaria {
    protected _numero: string;
    protected _saldo: number;

    constructor(numero: string) {
        this._numero = numero;
        this._saldo = 0;
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser maior que zero.");
        }

        this._saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${this._numero}. Saldo atual: R$${this._saldo}`);
    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser maior que zero.");
        }

        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this._saldo -= valor;
        console.log(`Saque de R$${valor} realizado na conta ${this._numero}. Saldo atual: R$${this._saldo}`);
    }

    protected abstract validarSaldo(valor: number): boolean;
}

class ContaPessoaFisica extends ContaBancaria {
    private _cpf: string;
    private _titular: PessoaFisica;

    constructor(numero: string, cpf: string, titular: PessoaFisica) {
        super(numero);
        this._cpf = cpf;
        this._titular = titular;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get titular(): PessoaFisica {
        return this._titular;
    }

    protected validarSaldo(valor: number): boolean {
        return this._saldo - valor >= 0;
    }
}

class ContaPessoaJuridica extends ContaBancaria {
    private _cnpj: string;
    private _razaoSocial: string;

    constructor(numero: string, cnpj: string, razaoSocial: string) {
        super(numero);
        this._cnpj = cnpj;
        this._razaoSocial = razaoSocial;
    }

    public get cnpj(): string {
        return this._cnpj;
    }

    public get razaoSocial(): string {
        return this._razaoSocial;
    }

    protected validarSaldo(valor: number): boolean {
        return this._saldo - valor >= -5000;
    }
}

class PessoaFisica {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }
}

class PessoaJuridica {
    private _nomeFantasia: string;
    private _porte: string;

    constructor(nomeFantasia: string, porte: string) {
        this._nomeFantasia = nomeFantasia;
        this._porte = porte;
    }

    public get nomeFantasia(): string {
        return this._nomeFantasia;
    }

    public get porte(): string {
        return this._porte;
    }
}

class Banco {
    private _clientes: ContaBancaria[];

    constructor() {
        this._clientes = [];
    }

    public adicionarConta(conta: ContaBancaria): void {
        this._clientes.push(conta);
    }

    public mostrarClientes(): void {
        console.log("Clientes do banco:");

        for (const cliente of this._clientes) {
            if (cliente instanceof ContaPessoaFisica) {
                console.log(`- CPF: ${(<ContaPessoaFisica>cliente).cpf} - Titular: ${(<ContaPessoaFisica>cliente).titular.nome}`);
            } else if (cliente instanceof ContaPessoaJuridica) {
                console.log(`- CNPJ: ${(<ContaPessoaJuridica>cliente).cnpj} - Razão Social: ${(<ContaPessoaJuridica>cliente).razaoSocial}`);
            }
        }
    }
}

const banco = new Banco();

const pessoaFisica = new PessoaFisica("João", 30);
const contaPessoaFisica = new ContaPessoaFisica("123456", "123.456.789-00", pessoaFisica);
contaPessoaFisica.depositar(1000);
contaPessoaFisica.sacar(500);

const pessoaJuridica = new PessoaJuridica("Empresa XYZ", "Pequena");
const contaPessoaJuridica = new ContaPessoaJuridica("654321", "12.345.678/0001-99", pessoaJuridica);
contaPessoaJuridica.depositar(5000);
contaPessoaJuridica.sacar(3000);

banco.adicionarConta(contaPessoaFisica);
banco.adicionarConta(contaPessoaJuridica);

banco.mostrarClientes();
