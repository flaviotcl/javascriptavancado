
var list = [
    { description : 'rice', amount : '1', value: '5.40'},
    { description : 'beer', amount : '12', value: '1.99'},
    { description : 'meat', amount : '1', value: '15.00'}
]
function getTotal(list){

    var total = 0
    for (var key in list){
        total += list[key].value * list[key].amount
    }
    return total
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>'

    for(var key in list){
        table += '<tr><td>'+ formatDesc(list[key].description) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></tr>'
    }

    table += '</tbody>'
    document.getElementById('listTable').innerHTML = table

}
function formatDesc(desc){
    str = desc.toLowerCase()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}
function formatValue(value){
    str = parseFloat(value).toFixed(2) + ' '
    str = str.replace('.',',')
    str = '$ '+str  
    return str
}

function addData(){
    
    var desc = document.getElementById('desc')
    var amount = document.getElementById('amount')
    var value = document.getElementById('value')

    list.unshift({description:desc.value, amount:amount.value, value:value.value })
    setList(list)
}
var button = document.getElementById('btnAdd')
button.addEventListener('click', addData)
//console.log(getTotal(list))
setList(list)