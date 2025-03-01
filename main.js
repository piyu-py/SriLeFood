let total=0
let paid=0
let balance=0
let itemprice = [70,50,30,100,100,150,120,100,70,80,80,80,80]
let quantity = [0,0,0,0,0,0,0,0,0,0,0,0,0]


let totalbox =document.querySelector("#total")
let itemlist = document.querySelectorAll('.items')
let clearbtn =  document.querySelector('#clear')
let notelist = document.querySelectorAll('.notes')
let balancedisplay = document.querySelector('#balanceamount')


function updatetotalboxandbalance(){
    totalbox.innerHTML= `Total: ${total} <br> Paid: ${paid}`
    balance= paid-total
    if (balance<0){
        balancedisplay.style.color='#f53025'
    }else{
        balancedisplay.style.color='#2da12d'
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
    quantity = [0,0,0,0,0,0,0,0,0,0,0,0,0]
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


