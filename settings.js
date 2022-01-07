const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");
const TaskNumber =  document.querySelector("#TaskNumber");
const work = document.querySelector(".work");
const naya = document.querySelector(".todo-task");

const taskNum = document.querySelector(".taskNum");
const taskCon = document.querySelector(".taskCon");
focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

var bleep = new Audio();
bleep.src = "beep.mp3";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
  localStorage.setItem("TaskNumber", TaskNumber.value);

  let btn = localStorage.getItem("btn");
  console.log(btn);
  if(btn === "break"){
    startBtn.classList.remove("break");
      startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus");
      startBtn.style.transform = "scale(1)";
      location.reload();
  }

  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  var length = listArray.length;
  var Tn = TaskNumber.value;
   var content,stillDo;
   content = `Your are Working on Task Number :- ${TaskNumber.value}`;
   stillDo = `${listArray[TaskNumber.value-1]}`;
  if(Tn>length || Tn<=0){
   content = `This Task is Not in Your TO-DO List`;
   stillDo =  `But You Can Still Do that Un-Know Task or You May Add in your To-DO List`;
   taskNum.textContent = content;
   taskCon.textContent = stillDo;
  }
  else{
    taskNum.textContent = content;
    taskCon.textContent = stillDo;
  }
});


document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
  if(paused === true){
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("resume")
  }
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("resume");
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "resume";
    pauseBtn.classList.add("resume");
    paused = true;
  }
});
