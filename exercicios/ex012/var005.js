let num = [7, 4, 2, 1, 3, 9]
num.sort()
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}
