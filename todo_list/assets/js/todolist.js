// var toDoObject = { "Buy New Robes" , "Go To Potions Class" , "Extract Poison Ingredients" };
var ul = document.querySelector(".toDoList ul");
var toDoInp = $("#tdInput");
var spanList;
var counter=0;

updateSpanList();
getInputVar();

function updateSpanList(){
  spanList = $(".ulToDo li");
}
function getInputVar(){
  toDoInp = $("#tdInput");
}
function addToDoList(what){
  var prefixLi = "<span>x </span>";
  var suffixLi = "</li>";

  //create li
  var li = document.createElement('li');

  //set attributes of li
  li.innerHTML = prefixLi + what

  //insert li to last of ul
  ul.appendChild(li);

  console.log(what);
  updateSpanList();
  console.log(spanList.length);

  //this enables the manipulation of new li's
  clickThrough();
}

function clickThrough(){
  for (var i = 0; i < spanList.length; i++) {
    spanList.on("click",function(){
      this.style.textDecoration = "line-through";
      console.log(this.innerHTML);
    })
  }
}

toDoInp.on("keypress",function (e){
  if(e.which === 13 && $(this)[0].value !== ""){
    addToDoList($(this)[0].value);
    $(this)[0].value = "";
  }
})
