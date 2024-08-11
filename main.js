let rating = 4;
export function getRatingMessage(rating) {
  if (rating === 3) {
    return 'UR AMAZING!!';
  } else if (rating === 2) {
    return 'MEETS EXPECTATIONS';
  } else if (rating === 1) {
    return 'U SUCK';
  } else {
    return 'INVALID';
  }
}

export function getScoreMessage(userScore, highScore) {
  if (userScore >= highScore) {
    return `Congrats, you have the new high score of ${userScore} `;
  } else {
    return `Good game. Your score of ${userScore} did not beat the high score of ${highScore}`;
  }
}


