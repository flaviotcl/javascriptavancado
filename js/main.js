
var list = [
    { descricao : 'rice', amount : '1', valor: '5.40'},
    { descricao : 'beer', amount : '12', valor: '1.99'},
    { descricao : 'meat', amount : '1', valor: '15.00'}
]
function getTotal(list){

    var total = 0
    for (var key in list){
        total += list[key].valor * list[key].amount
    }
    return total
}

console.log(getTotal(list))