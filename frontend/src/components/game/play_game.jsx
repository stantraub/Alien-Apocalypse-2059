import React, { Component } from 'react'

export class PlayGame extends Component {
  render() {
    return (
      <div>
        <canvas id="game-canvas" style="height: 600px; width: 1000; background-color:gray;"></canvas>
        <script type="application/javascript" src="./vendor/keymaster.js"></script>
        <script src="./main.js" type="application/javascript"></script>
      </div>
    )
  }
}

export default PlayGame
