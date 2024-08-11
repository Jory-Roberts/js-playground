import { describe, it, expect } from 'vitest';
import { getRatingMessage, getScoreMessage } from './main';

describe('getRatingMessage', () => {
    let userScore = 1500;
    let highScore = 1430;
    getScoreMessage(userScore, highScore);

  it('should return "UR AMAZING!!" for rating 3', () => {
    expect(getRatingMessage(3)).toBe('UR AMAZING!!');
  });

  it('should return "MEETS EXPECTATIONS" for rating 2', () => {
    expect(getRatingMessage(2)).toBe('MEETS EXPECTATIONS');
  });

  it('should return "U SUCK" for rating 1', () => {
    expect(getRatingMessage(1)).toBe('U SUCK');
  });

  it('should return "INVALID" for rating 0', () => {
    expect(getRatingMessage(0)).toBe('INVALID');
  });

  it('should return "INVALID" for rating 4', () => {
    expect(getRatingMessage(4)).toBe('INVALID');
  });
});

describe('getScoreMessage', () => {
  it('should return "Congrats, you have the new high score of 1500 " when userScore is greater than highScore', () => {
    expect(getScoreMessage(1500, 1430)).toBe('Congrats, you have the new high score of 1500 ');
  });

  it('should return "Good game. Your score of 1200 did not beat the high score of 1430" when userScore is less than highScore', () => {
    expect(getScoreMessage(1200, 1430)).toBe('Good game. Your score of 1200 did not beat the high score of 1430');
  });
});