let dados = {
    nome:'Isabella',
    idade: 23,
    signo: 'peixe',
}
console.log(dados)
dados.sobrenome = 'Trajano'
console.log(dados)
delete dados.sobrenome
console.log(dados)


let cadastro = [{
    nome: "Larissa",
    idade: 34,
    telefone: 976582230,
    amigos: ["Julio", "Marcelo", "Ana", "Marcos"]
}, 
{
    nome: "Jonas",
    idade: 27,
    telefone: 982159123,
    amigos:["João", "Luana", "Gabriel", "Heitor"]
}, 
{
    nome: "Lucas",
    idade: 39,
    telefone: 980347355,
    amigos:["Yago", "Pedro", "Renan", "Daniel"]
}, 
{
    nome: "Bruna",
    idade: 22,
    telefone: 999412206,
    amigos: ["Maria", "Elisa", "Beth", "Giovana"]
}, 
{
    nome: "Amanda",
    idade: 18,
    telefone: 983362012,
    amigos: ["Roberta", "Felipe", "Sofia", "Julia"]
}]

console.log(cadastro[0].amigos[2], cadastro[1].amigos[2], cadastro[2].amigos[2], cadastro[3].amigos[2], cadastro[4].amigos[2])