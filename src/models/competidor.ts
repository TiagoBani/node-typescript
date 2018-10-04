export class Competidor {
    private name: string
    private idade: number
    private nascimento: Date
    
    constructor(private id?: number){
        this.id = id ? id: 0
    }
    public getId(){
        return this.id
    }
    public setId(id: number){
        this.id = id ? id: 0
    }
    public getName(){
        return this.name
    }
    public setName(name: string){
        this.name = name ? name : this.name
    }
    public getIdade(){
        return this.idade
    }
    public setIdade(idade: number){
        this.idade = idade ? idade : this.idade
    }
    public getNascimento(){
        return this.nascimento
    }
    public setNascimento(nascimento: Date){
        this.nascimento = nascimento ? nascimento: this.nascimento
    }
}