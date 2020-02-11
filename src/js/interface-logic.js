import { Programmer } from './programmer.js';
import { Task } from './task.js';

export function createHappinessMeterContainer() {
  let mainContent = document.getElementById("health-display");
  let meterDiv = document.createElement("div");
  meterDiv.id = "happiness-meter";
  mainContent.append(meterDiv);
}

export function createSocialMeterContainer() {
  let mainContent = document.getElementById("health-display");
  let meterDiv = document.createElement("div");
  meterDiv.id = "social-meter";
  mainContent.append(meterDiv);
}

export function createHungerMeterContainer() {
  let mainContent = document.getElementById("health-display");
  let meterDiv = document.createElement("div");
  meterDiv.id = "hunger-meter";
  mainContent.append(meterDiv);
}

export function createWorkMeterContainer() {
  let mainContent = document.getElementById("health-display");
  let meterDiv = document.createElement("div");
  meterDiv.id = "work-meter";
  mainContent.append(meterDiv);
}

export function createHappinessMeterBarsContainers(programmerHappiness){
  if(programmerHappiness.getHappiness() <= 0) {
  //  alert("You Lose!!!!!!!!!!!!!!");
  }
  let meterDiv = document.getElementById("happiness-meter");
  while(meterDiv.firstChild) {
    meterDiv.removeChild(meterDiv.firstChild);
  }
  for(let i = 0; i < programmerHappiness.getHappiness(); i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "happiness-bar-container";
    meterDiv.append(barContainer);
  }
}

export function createSocialMeterBarsContainers(programmerHappiness){
  if(programmerHappiness.getSocial() <= 0) {
  //  alert("You Lose!!!!!!!!!!!!!!");
  }
  let meterDiv = document.getElementById("social-meter");
  while(meterDiv.firstChild) {
    meterDiv.removeChild(meterDiv.firstChild);
  }
  for(let i = 0; i < programmerHappiness.getSocial(); i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "social-bar-container";
    meterDiv.append(barContainer);
  }
}

export function createHungerMeterBarsContainers(programmerHappiness){
  if(programmerHappiness.getHunger() <= 0) {
  //  alert("You Lose!!!!!!!!!!!!!!");
  }
  let meterDiv = document.getElementById("hunger-meter");
  while(meterDiv.firstChild) {
    meterDiv.removeChild(meterDiv.firstChild);
  }
  for(let i = 0; i < programmerHappiness.getHunger(); i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "hunger-bar-container";
    meterDiv.append(barContainer);
  }
}

export function createWorkMeterBarsContainers(programmerHappiness){
  if(programmerHappiness.getWork() <= 0) {
  //  alert("You Lose!!!!!!!!!!!!!!");
  }
  let meterDiv = document.getElementById("work-meter");
  while(meterDiv.firstChild) {
    meterDiv.removeChild(meterDiv.firstChild);
  }
  for(let i = 0; i < programmerHappiness.getWork(); i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "work-bar-container";
    meterDiv.append(barContainer);
  }
}
export function createHappinessMeter() {
  createHappinessMeterContainer();
}
export function createSocialMeter() {
  createSocialMeterContainer();
}
export function createWorkMeter() {
  createWorkMeterContainer();
}
export function createHungerMeter() {
  createHungerMeterContainer();
}

export function createTaskAtRandomIntervals() {
  setInterval(() => {

  }, 1000)
}

export function createTaskList() {
  let mainContent = document.getElementById("task-list-display");
  let taskList = document.createElement("div");
  taskList.id = "task-list";
  mainContent.append(taskList);
}

export function createTask(task) {
  let s = createTaskHtml(task);
  attachTaskDueCountDown(s, task);
}

export function createTaskHtml(task) {
  let taskList = document.getElementById("task-list");
  let taskDiv = document.createElement("div");
  taskDiv.className = "task-list-item";

  let taskDue = document.createElement("p");
  taskDue.className = "task-due";
  taskDue.innerHTML = `Task due in: ${task.due}`;

  let taskDescription = document.createElement("p");
  taskDescription.className = "task-description";
  taskDescription.innerHTML = `Description: ${task.description}`;

  let taskEstimatedTimeToComplete = document.createElement("p");
  taskEstimatedTimeToComplete.className = "task-time";
  taskEstimatedTimeToComplete.innerHTML = `ETA: ${(task.time/1000)} seconds`;

  let taskStartButton = document.createElement("button");
  taskStartButton.className = "start-task-button";
  taskStartButton.innerHTML = "Start task";

  //let taskDue = attachTaskDueHtml(taskDiv, task);
  taskDiv.append(taskDue);
  taskDiv.append(taskDescription);
  taskDiv.append(taskEstimatedTimeToComplete);
  taskDiv.append(taskStartButton);
  attachStartTaskButtonListener(taskStartButton, task, taskDiv);

  //attachCountDown(taskDue, task)
  taskList.append(taskDiv);
  return taskDue;
}

export function attachStartTaskButtonListener(taskStartButton, task, taskDiv) {
  taskStartButton.addEventListener("click", function() {
    let timeToProcess = task.time;
    hideButtonsTaskLength(timeToProcess, taskDiv);
  });
}

export function attachTaskDueCountDown(s, task) {
  let taskDueArray = document.getElementsByClassName("task-due");
  console.log(taskDueArray.length);
  console.log(taskDueArray[0]);
  // let taskDue = taskDueArray[taskDueArray.length-1];
  let taskDue = s;
  //taskDue.addEventListener("")
  console.log(taskDue + " taskdue");
  setInterval(() => {
    let timeRemaining = task.getDue();
    console.log(timeRemaining + " due");
    taskDue.innerHTML = `Task due in: ${timeRemaining}`;
  }, 50)
}

export function hideButtonsTaskLength(time, taskDiv) {
  //let healthDisplay = document.getElementById("health-display");
  let userButtons = document.getElementsByClassName("user-button");
  //let userButtons = document.querySelectorAll("health-display button");
  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].classList.add("hidden");
  }
  setTimeout(() => {
    for(let i = 0; i < userButtons.length; i++) {
      userButtons[i].classList.remove("hidden");
    }
    taskDiv.remove();
  },time)
  console.log(userButtons.length);
  console.log(time)
}

export function startGame() {
  createHappinessMeter();
  createSocialMeter();
  createHungerMeter();
  createWorkMeter();
  createButtons();
  createTaskList();
  let task = new Task("Complete everything", 5000, 10000);
  task.timeRemainingOnTask();
  createTask(task);
  let p = new Programmer();
  p.socialDrainPerSecond();
  p.workDrainPerSecond();
  p.hungerDrainPerSecond();
  p.totalHappiness();
  runGame(p);
  attachButtonListeners(p);
}
 export function runGame(p) {
  setInterval(() => {
    createHappinessMeterBarsContainers(p);
    createSocialMeterBarsContainers(p);
    createHungerMeterBarsContainers(p);
    createWorkMeterBarsContainers(p);
  },10)
 }
  export function createButtons() {
    let mainContent = document.getElementById("health-display");
    let socialButton = document.createElement("button");
    socialButton.id = "socialize-button";
    socialButton.className = "user-button";
    socialButton.innerHTML = "Socialize";
    mainContent.append(socialButton);
    let feedButton = document.createElement("button");
    feedButton.id = "feed-button";
    feedButton.className = "user-button";
    feedButton.innerHTML = "Feed";
    mainContent.append(feedButton);
    let relaxButton = document.createElement("button");
    relaxButton.id = "relax-button";
    relaxButton.className = "user-button";
    relaxButton.innerHTML = "Relax";
    mainContent.append(relaxButton);
  }

  export function attachButtonListeners(programmer) {
    let p = programmer;
    document.getElementById("feed-button").addEventListener("click", function() {
      feed(p);
    });
    document.getElementById("relax-button").addEventListener("click", function() {
      relax(p);
    });
    document.getElementById("socialize-button").addEventListener("click", function() {
      socialize(p);
    });
  }
  
  export function feed(programmer) {
    programmer.feed();
    runGame(programmer);
  }

  export function relax(programmer) {
    programmer.relax();
    runGame(programmer);
  }

  export function socialize(programmer) {
    programmer.socialize();
    runGame(programmer);
  }