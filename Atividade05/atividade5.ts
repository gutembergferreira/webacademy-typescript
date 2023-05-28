type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
    private _codigo: number;
    private _nome: string;
    private _categoria: string;
    private _preco: number;
    private _status: Status;

    constructor(nome: string, categoria: string, preco: number) {
        this._codigo = this.gerarCodigo();
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = "ESGOTADO";
    }

    protected gerarCodigo(): number {
        // Lógica para gerar um código único
        return Math.floor(Math.random() * 1000);
    }

    public get codigo(): number {
        return this._codigo;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get status(): Status {
        return this._status;
    }

    protected mudarStatus(status: Status): void {
        this._status = status;
    }

    public adicionar(): void {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this._nome}, categoria: ${this._categoria}`);
    }
}

class ProdutoInfantil extends Produto {
    private _faixaEtaria: number;

    constructor(nome: string, categoria: string, preco: number, faixaEtaria: number) {
        super(nome, categoria, preco);
        this._faixaEtaria = faixaEtaria;
        this.validarFaixaEtaria();
    }

    public get faixaEtaria(): number {
        return this._faixaEtaria;
    }

    public set faixaEtaria(faixaEtaria: number) {
        this._faixaEtaria = faixaEtaria;
        this.validarFaixaEtaria();
    }

    private validarFaixaEtaria(): void {
        if (this._faixaEtaria > 12) {
            throw new Error("A faixa etária deve ser até 12 anos para produtos infantis.");
        }
    }
}

const novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, 12);
