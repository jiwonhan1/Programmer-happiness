export class Task {
  constructor(description, time, due) {
    this.description = description;
    this.time = time;
    this.due = due;
  }

  beginTask() {
    setTimeout(function() {
      this.complete = true;
    }, this.time);
  }

  timeRemainingOnTask() {
    setInterval(() => {
      this.due = this.due--;
    }, 1000)
  }

}