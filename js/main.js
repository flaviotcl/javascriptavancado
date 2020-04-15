
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
        table += '<tr><td>'+ formatDesc(list[key].description) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td><button class="btn btn-default" onclick="setUpdate('+key+')">Edit </button> <button class="btn btn-default" onclick="deleteItem('+key+')">Delete</button></td></tr>'
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

function setUpdate(id){
    var obj  = list[id]
    document.getElementById('desc').value = obj.description
    document.getElementById('amount').value = obj.amount
    document.getElementById('value').value = obj.value
    document.getElementById('btnUpdate').style.display = 'inline-block'
    document.getElementById('btnAdd').style.display = 'none'

    document.getElementById('inputIdUpdate').innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">'
}
function resetForm(){
    document.getElementById('desc').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('value').value = ''
    document.getElementById('btnUpdate').style.display = 'none'
    document.getElementById('btnAdd').style.display = 'inline-block'

    document.getElementById('inputIdUpdate').innerHTML = ''
}

function updateData(){
    var id  =  document.getElementById('idUpdate').value 
    var desc = document.getElementById('desc').value 
    var amount = document.getElementById('amount').value
    var value = document.getElementById('value').value 

    list[id] = {description:desc, amount:amount, value:value}
    
    resetForm()
    setList(list)
}

function deleteItem(id){
    if(confirm('Delete this item ?')){
        if(id === list.length - 1){
            list.pop()
        } else if( id === 0){
            list.shift()
        } else{
            var arrAuxIni = list.slice(0,id) // Retorna do item 0 do array até a posição anterior a do Id.
            var arrAuxEnd = list.slice(id + 1) // Retorna do próximo item após ao Id até o último item do Array de objetos.
            list =  arrAuxIni.concat(arrAuxEnd)

        }
        setList(list)
    }

}
var button = document.getElementById('btnAdd')
button.addEventListener('click', addData)

var btnCancel = document.getElementById('btnCancel')
btnCancel.addEventListener('click',resetForm)

var btnSave = document.getElementById('btnSave')
btnSave.addEventListener('click',updateData)
//console.log(getTotal(list))
setList(list)