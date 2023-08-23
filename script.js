const taskInput= document.getElementById("taskInput");
const taskList= document.getElementById("taskList");

function addTask(){
    if(taskInput.value === ""){
        alert("You must write something!");

    } else {
             // Create li element where the addTask funciton is called
             let li = document.createElement("li");
             //will assing the value of the previously declared const to li.innerHTML 
             li.innerHTML = taskInput.value;
             // append the taskList
             taskList.appendChild(li);
             let span = document.createElement("span");
             span.innerHTML = "\u00d7";
             li.appendChild(span)
            }
            // this will reset the input box element
            taskInput.value = "";
            saveData();
            
}

//event listerner for deleting & cheking elements
taskList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData()

    } else if( event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData()

    }
}, false)

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
} 

function showList(){
    taskList.innerHTML = localStorage.getItem("data");   
}
// I need to call this function 
showList();

