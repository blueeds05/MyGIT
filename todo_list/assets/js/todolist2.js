var ul = document.querySelector(".toDoList ul");
var spanList = $(".ulToDo li");
var trash = $(".ulToDo li span");
var toDoInp = $("#tdInput");
var erase = false;
var li;
var doOnce = true;


function eraseLi(){
  if (erase){
    console.log("throw");
    this.remove();
    erase = false;
  }
  this.classList.toggle("lineThru");
  updateSpanList();
  console.log("toggled " + this.innerText)
  }

if(doOnce){
  spanList.on("click",eraseLi);
  doOnce =false;
}
trash.on("click",function del(){
    erase = true;
});



function updateSpanList(){
  spanList = $(".ulToDo li");
}

function addToDoList(what){
  var prefixLi = "<span>x </span>";
  var suffixLi = "</li>";

  //create li
  li = document.createElement('li');

  //set attributes of li
  li.innerHTML = prefixLi + what

  //insert li to last of ul
  ul.appendChild(li);

  console.log(what);
  updateSpanList();
  console.log("spanlist length = " + spanList.length);
  // console.log(spanList);

  //this enables the manipulation of new li's
  spanList.on("click",eraseLi);
  }


toDoInp.on("keypress",function (e){
  if(e.which === 13 && $(this)[0].value !== ""){
    addToDoList($(this)[0].value);
    $(this)[0].value = "";
  }
})
