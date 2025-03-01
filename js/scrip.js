const taskBtns = document.querySelectorAll('.task-btn');

// console.log(taskBtns);
let sumOfCompleteTask = 0;
let sumOfPendingTask = 0;
for (taskBtn of taskBtns){
    // console.log(taskBtn);

    taskBtn.addEventListener("click", function(event){
        const taskBtn = event.target;
        const taskBtnText = event.target.parentElement.parentElement.firstElementChild.nextSibling.nextSibling.innerText;
        let completeTask = document.querySelector('.complete-task');
        let taskPending = document.querySelector('.task-pending');
        let showLog = document.querySelector('.show-log');
          let localTime =  new Date().toLocaleTimeString();
         sumOfCompleteTask = parseInt(completeTask.innerText) + 1;
         sumOfPendingTask = parseInt(taskPending.innerText) - 1;
        // console.log(sumOfCompleteTask);
        completeTask.innerText = sumOfCompleteTask;
        taskPending.innerText = sumOfPendingTask;

         let div = document.createElement("div");
         div.innerHTML = `<p class="bg-gray-100 rounded-lg p-1">You Have Complete The Task ${taskBtnText} at ${localTime}</p>`
        alert("Board Updated Successfully")
        if (sumOfPendingTask == 0) {
            alert("congrats!!! You have completed all the current task")
        }
        
        
          showLog.appendChild(div);

          
        
        taskBtn.classList.add('bg-gray-300');
        taskBtn.classList.add('text-gray-800');
        taskBtn.classList.remove('text-white');
        taskBtn.classList.remove('bg-[#3752FD]');
        taskBtn.disabled = true;
        
        
    });
    
}

document.querySelector('.clear-btn').addEventListener('click', function(event){
    document.querySelector('.show-log').innerHTML = " ";
    event.stopPropagation()
})



let date = new Date();
let localdate = date.toDateString().split(" ").slice([1]);
let localday = date.toDateString().split(" ").slice( 0 ,[1]);

document.querySelector('.local-date').innerText = localdate.join(' ');
document.querySelector('.local-day').innerText = localday.join(' ');
 
function goToBlog(){
    window.location.assign("blog.html")
}