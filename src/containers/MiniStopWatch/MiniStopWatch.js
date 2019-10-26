import React, { Component } from 'react';
import classes from './MiniStopWatch.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';

class MiniStopWatch extends Component {

  state = {
  	timerOn: false,
  	timeStart: 0,
  }

  render() {
  
  // const timerTime = this.props.miniTimerTime;
  let timerTime = this.props.miniTimerTime;

  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
 
    
    return (
      <div className={classes.miniStopwatchWraper}>
        <p className={classes.stopwatchTime}>{hours}h : {minutes}</p>
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
      saveCurrentMiniStopwatchTime: (time, id, timerTime) => dispatch(actions.saveCurrentMiniStopwatchTime(time, id, timerTime)),
      // clearCurrentStopwatchTime: (id) => dispatch(actions.clearCurrentStopwatchTime(id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(MiniStopWatch);
