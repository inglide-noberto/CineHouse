const minhaString = 'Aula';
const alunos = [
    "      Marcos",
    "      Julio",
    "      Eder"
]
for (let i= 0; i< alunos.length; i++){
         console.log(alunos[i].trim());
       }  

console.log(minhaString.trim());

const catalogo = require("./database/catalogo.json");

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz});

}
adicionarFilme(3, "Harry Potter",150, ["Daniel Radcliff", "Emma Watson", "Rupert Grint"], 2001, false);

//console.log(catalogo);
function buscarFilme(codigo){
    for (let i= 0; i<= catalogo.length; i++){
        if(codigo == catalogo[i].codigo){
           return catalogo[i];
        }
    } 
}
function alterarStatusEmCartaz(codigo){
    for (let i= 0; i< catalogo.length; i++){
        if(catalogo[i].codigo == codigo){
            catalogo[i].emCartaz = !catalogo[i].emCartaz;
        }
    }
 }
 alterarStatusEmCartaz(2);
 //console.log(catalogo)