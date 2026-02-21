/* console.log("hello")
//const mainText= document.getElementById("mainTitle")

//for id:
//const mainText= document.querySelector("#mainTitle")
// for class:
const listItems= document.querySelectorAll(".fruits") */
//console.log(mainText.innerText = "Hello dev")
//console.log(listItems[0])
//const mainDiv =document.querySelector("#mainDiv")
//console.log(mainDiv.children[1])
//const img=document.querySelector("img")
//console.log(img)
//img.setAttribute("alt" , "updated.jpg")
/* const listItems =document.getElementsByClassName("list-Item")
//console.log(listItems[0])
//listItems[0].style.color="red"
listItems.array.forEach(item=>{
    item.style.color="red"
}) */
const listItems =document.getElementsByClassName("list-Item")
for(let list of listItems){
    list.style.color="red"
}
const btn = document.getElementById("btn")
const countText= document.getElementById("count")
btn.addEventListener("click",function(){
    alert("clicked")
})