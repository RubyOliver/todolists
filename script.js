const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
// const trashIcon = document.getElementById("trash"); // do i need this?

function inputLength() {
	return input.value.length;
}

function createItem(){
  if(inputLength() > 0){

    // parent will hold text and children (house the checkbox and trash)
    var divParent = document.createElement("div");
    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    // container for checkbox and trash
    var divChild = document.createElement("div");



    // create the checkbox and actions
    var checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";

//     checkIcon.addEventListener("mouseover",function(){
//       checkIcon.style.color = "red";
//     })

//     checkIcon.addEventListener("mouseout",function(){
//       checkIcon.style.color = "lightgray";
//     })


    checkIcon.addEventListener("click",function(){
      if (checkIcon.style.color === "lightgray") {
        checkIcon.style.color = "limegreen";
        divParent.className = "item done";
      } else {
        checkIcon.style.color = "lightgray";
        divParent.className = "item";
      }
    })
    divChild.appendChild(checkIcon);




    // create trash icon and its actions
    var trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "lightgray";

    trashIcon.addEventListener("mouseover",function(){
      trashIcon.style.color = "red";
    })

    trashIcon.addEventListener("mouseout",function(){
      trashIcon.style.color = "lightgray";
    })


    trashIcon.addEventListener("click",function(){
      divParent.remove();
    })
    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);
  }
}

function addItem(){
  createItem();
  input.value = "";
}

input.addEventListener("keydown",function(event) {
  if(event.key === "Enter"){
    addItem();
  }
})
