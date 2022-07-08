// Filter
// Filtre e retorne todos os números pares de um array.

function filtraPares(arr)
{
  return arr.filter(callbach)
}

function callbach(item){
  return item % 2 === 0;

}

const meuArray = [1,2,3,4,5,6]

console.log(filtraPares(meuArray));