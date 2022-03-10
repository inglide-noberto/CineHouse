const cinema = 'CineHouse';
//console.log(cinema);

var catalogo = [
    { 
        codigo: 1 ,
        titulo: 'Crepusculo' ,
        duracao: 120 ,
        atores: ['Robert Pattison', 'Taylor Lautner', 'Kristen Stewart'] , 
        anoDeLancamento: 2008 , 
        emCartaz: false ,
    } ,
    { 
        codigo: 2 ,
        titulo: 'Lua Nova' ,
        duracao: 90 ,
        atores: ['Robert Pattison', 'Taylor Lautner', 'Kristen Stewart'] , 
        anoDeLancamento: 2010 ,  
        emCartaz: false ,
    }
];
//console.log(catalogo);
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
console.log(buscarFilme(2));
