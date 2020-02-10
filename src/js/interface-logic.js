import { Programmer } from './programmer.js';


export function createHappinessMeterContainer() {
  let mainContent = document.getElementById("main-content");
  let meterDiv = document.createElement("div");
  meterDiv.id = "happiness-meter";
  mainContent.append(meterDiv);
}

export function createHappinessMeterBarsContainers(){
  let meterDiv = document.getElementById("happiness-meter");
  for(let i = 0; i < 60; i++) {
    let barContainer = document.createElement("div");
    barContainer.className = "happiness-bar-container";
    meterDiv.append(barContainer);
  }
}
export function createHappinessMeterBars() {
  let meterDiv = document.getElementsByClassName("happiness-bar-container");
  for(let i = 0; i < 60; i++) {
    let bar = document.createElement("div");
    bar.className = "happiness-bar";
    meterDiv[i].append(bar);
  }
}

export function createHappinessMeter() {
  createHappinessMeterContainer();
  createHappinessMeterBarsContainers();
  createHappinessMeterBars();
}

export function startGame() {
  createHappinessMeter();
  let happinessBars = document.querySelectorAll(".happiness-bar");
  let p = new Programmer();
  createButtons();
  
  p.socialDrainPerSecond();
  p.workDrainPerSecond();
  p.hungerDrainPerSecond();
  p.happiness();
  setInterval(() => {
    updateHappinessMeter(happinessBars, p);
  },1000)
  attachButtonListeners(p);
}

export function updateHappinessMeter(happinessBars,p) {
  let programmerHappiness = p.getHappiness();

  let happinessBarsWithHidden = document.getElementsByClassName("hidden");
  console.log(happinessBarsWithHidden.length + " happiness bard with hidden");
  if((60 - programmerHappiness) > happinessBarsWithHidden.length) {
    let difference = (60 - programmerHappiness) - (happinessBarsWithHidden.length);
    for(let i = difference; i > 0; i--) {
      happinessBars[i].classList.remove("hidden");
    }
  }
  for(let i = 0; i < (60 - programmerHappiness); i++) {

    happinessBars[i].classList.add("hidden");
  }
  }

  export function createButtons() {
    let mainContent = document.getElementById("main-content");
    let socialButton = document.createElement("button");
    socialButton.id = "socialize-button";
    socialButton.innerHTML = "Socialize";
    mainContent.append(socialButton);
    let feedButton = document.createElement("button");
    feedButton.id = "feed-button";
    feedButton.innerHTML = "Feed";
    mainContent.append(feedButton);
    let relaxButton = document.createElement("button");
    relaxButton.id = "relax-button";
    relaxButton.innerHTML = "Relax";
    mainContent.append(relaxButton);
  }

  export function attachButtonListeners(programmer) {
    let p = programmer;
    document.getElementById("feed-button").addEventListener("click", function() {
      p.feed();
    });
  }
  
  export function feed(programmer) {
    programmer.feed();

  }

  export function run() {
    
  }