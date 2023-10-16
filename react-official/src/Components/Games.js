import React from 'react';
import Module from './Module';

export default function Games() {
    return (
        <>
        <h1>This is Game menu</h1>
        <h1>Welcome to Tic Tac Toe</h1>
        <div className="game">
          <div className="start-game">
            <span className="start-game-label">Start Game</span>
            <div className="players">
              <form action="app.js" method="post">
                <p>
                  <label htmlFor="player_one">Player 1: </label>
                  <input type="text" name="player_one" id="player_one" />
                </p>
                <p>
                  <label htmlFor="player_two">Player 2: </label>
                  <input type="text" name="player_two" id="player_two" />
                </p>
                <input type="submit" name="play" value="play" />
              </form>
            </div>
          </div>
          <Module/>
        </div>
        </>
    );
}