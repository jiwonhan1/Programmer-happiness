import { Programmer } from './../src/js/programmer.js';

describe('Programmer', () => {
  jest.useFakeTimers();
  let programmer;

  beforeEach(function() {
    programmer = new Programmer();

  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a hunger level of 19 after 1 second', () => {
    programmer.socialDrainPerSecond();
    programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    expect(programmer.hunger).toEqual(19);
  });

  test('should have a social level of 19 after 1 second', () => {
    programmer.socialDrainPerSecond();
    programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    expect(programmer.social).toEqual(19);
  });

  test('should have a social level of 19 after 1 second', () => {
    programmer.socialDrainPerSecond();
    programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    expect(programmer.work).toEqual(19);
  });

  test('should have a happiness level of 57 after 1 second', () => {
    programmer.socialDrainPerSecond();
    programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    expect(programmer.happiness).toEqual(57);
  });

  test('should have a happiness level of 36 after 1 second', () => {
    programmer.hunger = 0;
    programmer.socialDrainPerSecond();
    programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    expect(programmer.happiness).toEqual(36);
  });
  
  test('should have a happiness level of 36 after 1 second', () => {
    // programmer.socialDrainPerSecond();
    // programmer.workDrainPerSecond();
    programmer.hungerDrainPerSecond();
    programmer.happiness();
    jest.advanceTimersByTime(1001);
    programmer.feed();
    expect(programmer.hunger).toEqual(20);
  });
});