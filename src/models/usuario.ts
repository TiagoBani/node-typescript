export class Usuario {
    constructor(
        private name ?: string,
        private idade ?: number
    ){
        this.name = name ? name : null;
        this.idade = idade ? idade : null;
    }
    public getName(){
        return this.name;
    }
    public getIdade(){
        return this.idade;
    }
    public setName(name: string){
        this.name = name;
    }
    public setIdade(idade: number){
        this.idade = idade;
    }
}