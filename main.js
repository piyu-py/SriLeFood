let total=0
let paid=0
let balance=0
let itemprice = [90,50,40,150,100,150,150,450,100,280]
let quantity = [0,0,0,0,0,0,0,0,0,0]


let totalbox =document.querySelector("#total")
let itemlist = document.querySelectorAll('.items')
let clearbtn =  document.querySelector('#clear')
let notelist = document.querySelectorAll('.notes')
let balancedisplay = document.querySelector('#balanceamount')


function updatetotalboxandbalance(){
    totalbox.innerHTML= `Total: ${total} <br> Paid: ${paid}`
    balance= paid-total
    if (balance<0){
        balancedisplay.style.color='red'
    }else{
        balancedisplay.style.color='green'
    }
    balancedisplay.innerHTML = Math.abs(balance)
}

//update counts
Array.from(itemlist).forEach(function(elem,index){
    elem.addEventListener("click",function(){
        elem.innerHTML = parseInt(elem.textContent,10)+1
        quantity[index]=parseInt(elem.textContent,10)
        total+=itemprice[index]
        updatetotalboxandbalance()
    })
})

//clear function
clearbtn.addEventListener("click",function(){
    itemlist.forEach(function(elem){
        elem.innerHTML=0
    })
    quantity = [0,0,0,0,0,0,0,0,0,0]
    total=0
    paid=0
    updatetotalboxandbalance()
})

//balance counter
Array.from(notelist).forEach(function(elem,index){
    elem.addEventListener("click",function(){
        paid += parseInt(elem.textContent,10)
        updatetotalboxandbalance()
})})


