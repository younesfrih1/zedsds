function show(){
    if(  document.getElementById("dropdown").style.display=="none")
    document.getElementById("dropdown").style.display="block"
    else     document.getElementById("dropdown").style.display="none"
}
function add()
{
  var Number=document.querySelectorAll('.add').forEach(item=>{
      item.addEventListener('click',event =>{
          console.log(item.parentElement)
          itemcopy = item.parentElement.cloneNode(true);
    itemcopy.setAttribute("class","added-item")
   
          document.getElementById("dropdown").append(itemcopy)
      })
  })
}
add()
