enum Turno {
    MANHA = "Manhã",
    TARDE = "Tarde",
    NOITE = "Noite",
}

enum Area {
    HUMANAS = "Humanas",
    BIOLOGICAS = "Biológicas",
    EXATAS = "Exatas",
}

function validarTamanho(minLength: number) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const descricao = args[0];

            if (descricao.length < minLength) {
                throw new Error(
                    `A descrição deve ter no mínimo ${minLength} caracteres.`
                );
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

class Curso {
    constructor(public descricao: string, public area: Area) { }
}

class Turma {
    private static totalTurmas = 0;

    constructor(
        public id: number,
        public descricao: string,
        public turno: Turno,
        public curso: Curso
    ) {
        Turma.totalTurmas++;
    }

    public static get total(): number {
        return Turma.totalTurmas;
    }

    @validarTamanho(10)
    public adicionar(descricao: string, turno: Turno, curso: Curso): void {
        const novaTurma = new Turma(Turma.total + 1, descricao, turno, curso);
        console.log("Turma adicionada:", novaTurma);
    }

    public excluir(id: number): void {
        console.log("Turma excluída:", id);
    }

    @validarTamanho(10)
    public alterar(id: number, descricao: string, turno: Turno, curso: Curso): void {
        console.log("Turma alterada:", id, descricao, turno, curso);
    }

    public buscar(id: number): void {
        console.log("Buscar turma:", id);
    }

    public imprimir(): void {
        console.log("Imprimir turmas");
    }
}

const curso = new Curso("Engenharia Civil", Area.EXATAS);
const turma = new Turma(1, "Turma A", Turno.NOITE, curso);

turma.adicionar("Turma B", Turno.MANHA, curso);
turma.alterar(2, "Turma C", Turno.TARDE, curso);
turma.excluir(1);
turma.buscar(2);
turma.imprimir();
