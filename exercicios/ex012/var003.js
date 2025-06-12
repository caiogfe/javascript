let num = [2, 1, 6, 9, 5]
num.push(7)
num.sort()
for (let pos=0; pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}