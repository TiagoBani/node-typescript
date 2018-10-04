export class Usuario {
    constructor(
        private id ?: number,
        private name ?: string,
        private idade ?: number
    ){
        this.id = id ? id: 0
        this.name = name ? name: null
        this.idade = idade ? idade: null
    }
    public getId(){
        return this.id
    }
    public setId(id: number){
        this.id = id
    }
    public getName(){
        return this.name
    }
    public setName(name: string){
        this.name = name
    }
    public getIdade(){
        return this.idade
    }
    public setIdade(idade: number){
        this.idade = idade
    }
}