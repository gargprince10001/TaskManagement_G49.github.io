const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");


const focusTime = document.querySelector("#focusTime");
const breakTime = document.querySelector("#breakTime");
//----
// localStorage.setItem("TaskNumber", TaskNumber.value);
//----
let initial, totalsecs, perc, paused, mins, seconds;
var btnn ;
startBtn.addEventListener("click", () => {
  // console.log("Focus mode");
  let btn = localStorage.getItem("btn");
  btnn= btn;
  // console.log(btn);
  if (btn === "focus") {
    // console.log("Focus time " + localStorage.getItem("focusTime"));

    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    // console.log("Break time " + localStorage.getItem("breakTime"));
    // localStorage.setItem("btn", "break");
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  paused = false;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    if (seconds < 10) {
      circle.classList.add("danger");
    }
  }
  else {
    mins = 0;
    seconds = 0;
    bell.play();
    var taskNum = document.querySelector(".taskNum");
    var taskCon = document.querySelector(".taskCon");
    taskNum.textContent = ``;
    taskCon.textContent = ``;
    let btn = localStorage.getItem("btn");
    if (btnn ==="focus") {
      startBtn.textContent = "start break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
      let getLocalStorageData = localStorage.getItem("New Todo");
      listArray = JSON.parse(getLocalStorageData);
      var indx = localStorage.getItem("TaskNumber");
      if (indx <= listArray.length || indx <= 0) {
        listArray.splice(indx - 1, 1);
      }
      localStorage.setItem("New Todo", JSON.stringify(listArray));
      window.open("https://gargprince10001.github.io/EyeExercise.github.io/");

    
      // console.log("In focus area");
      // localStorage.setItem("btn", "break");
      // console.log(localStorage.getItem("btn"));


    }
    else {
      console.log("In Break time area")

      startBtn.classList.remove("break");
      startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus"); // today change 1
      // console.log("button is focus --" + localStorage.getItem("btn"));

    }
    startBtn.style.transform = "scale(1)"; //tha sy khi or likh rha  hu
  }
}
