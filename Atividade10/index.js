function maiorNumero (n1,n2,n3) {
    var arr = [n1,n2,n3]
    var max = arr.reduce(function(a,b) {
        return Math.max(a,b)
    }, -Infinity)
    return max
}


function ordenarCrescente (n1,n2,n3) {
    var arr = [n1,n2,n3]
    var result = arr.sort(function(a, b) {
        return a - b
    })
    return result
}

console.log(maiorNumero(6,1,5))
console.log(ordenarCrescente(6,1,5))