let num = [5, 8, 2, 9, 3]
num[5] = 4 //vai criar o elemento de índice 5 com o conteúdo 4
num.push(7) //vai criar mais um elemento com o índice correspondente com o conteúdo 7
num.length //length não é um método, e sim um atributo
num.sort() //vai ordenar o conteúdo dos elementos em ordem crescente [2, 3, 4, 5, 7, 8, 9]

console.log(`${num[4]}`)