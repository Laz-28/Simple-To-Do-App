let addbtn = document.getElementById("add-btn");
let removebtn = document.getElementById("remove-btn");
let input = document.getElementById("input-text");
let taskList = document.getElementById("task-list");

addbtn.addEventListener("click", function(){
let taskValue = input.value;
if(taskValue.trim() !== ""){
    let newTask = document.createElement("li");
    newTask.textContent = taskValue;
    taskList.appendChild(newTask);
    input.value = "";

}else{
    alert("Please type something first mate!!")
}

});

removebtn.addEventListener("click", function(){
  let lastTask = taskList.lastElementChild;

  if(lastTask){
    taskList.removeChild(lastTask);

  }else{
    alert("Nothing left to remove!");
  }
});

