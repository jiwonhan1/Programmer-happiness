import { Task } from './../src/js/task.js';

describe('Task', () => {
  jest.useFakeTimers();
  let task;

  beforeEach(function() {
    task = new Task("hello", 1000);
  });
  afterEach(function() {
    jest.clearAllTimers();
  });
  
  test('should have a hunger level of 19 after 1 second', () => {
    jest.advanceTimersByTime(1001);
    expect(task.complete).toEqual(true);
  });
});