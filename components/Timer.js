import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      isPaused: false,
      isPlayClicked: false,
      time: new Date()
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlay() {}

  handlePause() {}

  handleStop() {}

  handleReset() {}

  render() {
    return (
      <div>
        <h1> React Pomodoro Timer </h1>
        <div className="settings">
          <h2>Session</h2>
          <h2>Break</h2>
          <br />

          <input
            type="number"
            value="25"
            className="session"
            min="1"
            max="60"
          />
          <input type="number" value="5" className="break" min="1" max="20" />
        </div>

        <div className="timer">
          <div className="name">Session</div>
          <div className="time">25:00</div>
          <button onClick={this.handlePlay} className="play">
            PLAY
          </button>
          <button onClick={this.handlePause} className="pause">
            PAUSE
          </button>
          <button onClick={this.handleStop} className="stop">
            STOP
          </button>
          <button onClick={this.handleReset} className="reset">
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
