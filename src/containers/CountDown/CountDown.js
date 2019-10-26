import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import "./CountDown.css";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';
import MiniStopWatch from '../MiniStopWatch/MiniStopWatch';


class CountDown extends Component {

	state = {
  		timerOn: false,
      timerTime: 0,

      miniTimerTime: 0,
	}

		startTimer = () => {
  			this.setState({
    			timerOn: true,
  			});

	  		this.timer = setInterval(() => {

        let timerTime = this.props.business[0].timerTimeCountDown;
        // let miniTimerTime = this.state.miniTimerTime;
        let miniTimerTime = this.props.business[0].miniTimerTime;

	    	const newTime = timerTime - 10;
        const newMiniTimerTime = miniTimerTime + 10;

	    			if (newTime >= 0 ) {
              this.props.saveTimerTime(newTime, newMiniTimerTime, this.props.businessData.id)
              // this.setState({timerTime: newTime, miniTimerTime: newMiniTimerTime})
	    			} else {  
	      				clearInterval(this.timer);
	      				this.setState({ timerOn: false });
	      				alert("Countdown ended");
			    }
			}, 10);
		}

		stopTimer = () => {
   let timerTime = this.props.business[0].timerTime;
    let miniTimerTime = this.props.business[0].miniTimerTime;
        clearInterval(this.timer);
        this.setState({ timerOn: false, timerTime: timerTime,  miniTimerTime: miniTimerTime});
		}

		resetTimer = () => {
  			if (this.state.timerOn === false) {
    			this.setState({
     				timerTime: 0
   			 	});
          this.props.clearCurrentCountDownTime(this.props.businessData.id);
  			}
		}

    adjustTimer = input => {
        const { timerOn } = this.state.timerOn;
        const timerTime = this.props.business[0].timerTimeCountDown;
        let miniTimerTime = this.props.business[0].miniTimerTime;
        const max = 216000000;

        if (!timerOn) {
          if (input === "incHours" && timerTime + 3600000 < max) {
            this.setState({timerTime: timerTime + 3600000})
            this.props.saveTimerTime(timerTime + 3600000, miniTimerTime, this.props.businessData.id)
          } else if (input === "decHours" && timerTime - 3600000 >= 0) {
            this.setState({timerTime: timerTime-3600000})
            this.props.saveTimerTime(timerTime-3600000, miniTimerTime, this.props.businessData.id)
          } else if (input === "incMinutes" && timerTime + 60000 < max) {
            this.setState({timerTime: timerTime+60000})
            this.props.saveTimerTime(timerTime+60000, miniTimerTime, this.props.businessData.id)
          } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
            this.setState({timerTime: timerTime-60000})
            this.props.saveTimerTime(timerTime-60000, miniTimerTime, this.props.businessData.id)
          } else if (input === "incSeconds" && timerTime + 1000 < max) {
            this.setState({timerTime: timerTime+1000})
            this.props.saveTimerTime(timerTime+1000, miniTimerTime, this.props.businessData.id)
          } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
            this.setState({timerTime: timerTime-1000})
            this.props.saveTimerTime(timerTime-1000, miniTimerTime, this.props.businessData.id)
          }
        }
    }


		render(){

    let timerOn = this.state.timerOn;
    let timerTime = this.state.timerTime;
    
    // let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    // let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    let seconds =  this.props.business[0].currentCountdownTime.seconds;
    let minutes = this.props.business[0].currentCountdownTime.minutes;
    let hours = this.props.business[0].currentCountdownTime.hours;

    let countdown = null;

    let miniStopWatch = <MiniStopWatch miniTimerTime={this.props.business[0].miniTimerTime+1000} businessData={this.props.businessData}/>

    if(this.props.isShown){
    countdown = 
      <div>
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-display">
          <Button clicked={() => this.adjustTimer("incHours")}>&#8679;</Button>
          <Button clicked={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </Button>
          <Button clicked={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </Button>

          <div className="Countdown-time">
            <span>{hours}</span>
            <span> : &nbsp;</span>
            <span>{minutes}
            </span>
            <span> : &nbsp;</span>
            <span>{seconds}</span>
          </div>

          <Button clicked={() => this.adjustTimer("decHours")}>&#8681;</Button>
          <Button clicked={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </Button>
          <Button clicked={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </Button>
        <div className="Countdown-label">
          <span className="Countdown-label_hours">Hours</span>
          <span className="Countdown-label_minutes">Minutes</span>
          <span className="Countdown-label_seconds">Seconds</span>
        </div>
        </div>
        {this.state.timerOn === false && (
          <Button className="Button-start" clicked={this.startTimer}>
            Start
          </Button>
        )}
        {this.state.timerOn === true && timerTime >= 1000 && (
          <Button className="Button-stop" clicked={this.stopTimer}>
            Stop
          </Button>
        )}

            <Button className="Button-reset" clicked={this.resetTimer}>
              Reset
            </Button>

      </div>      
        {miniStopWatch}
      </div>
    }

    return (
      <div>
        {countdown}
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      saveTimerTime: (timerTime, miniTimerTime, id) => dispatch(actions.saveTimerTime(timerTime, miniTimerTime, id)),
      clearCurrentCountDownTime: (id) => dispatch(actions.clearCurrentCountDownTime(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);