import React, { Component } from 'react';

import classes from './BusinessBuilder.module.css'

import Stopwatch from '../Stopwatch/Stopwatch';
import CountDown from '../CountDown/CountDown';
import Button from '../../components/Button/Button';
import Statistics from '../../components/Statistics/Statistics';

import * as actions from '../../store/actions/businessBuilder';
import { connect } from 'react-redux';

class BusinessBuilder extends Component {


	switchTimer = () => {

		let businessData = this.props.business[this.props.business.findIndex((el)=>el.id==this.props.currentBussinessId)]

		if(!businessData.countDownIsShown){
			let countDownOrStopwatch = 'countDown';
			this.props.stopWatchOrCountDownIsShownHandler(this.props.currentBussinessId, countDownOrStopwatch)
		}
		else{
			let countDownOrStopwatch = 'stopWatch';
			this.props.stopWatchOrCountDownIsShownHandler(this.props.currentBussinessId, countDownOrStopwatch)
		}
	}


	render(){

		let businessData = this.props.business[this.props.business.findIndex((el)=>el.id==this.props.currentBussinessId)]
		return(
			<div className={classes.mainDisplayWrapper}>
				<h2>{businessData.title}</h2>
				<p>{businessData.totalHours.hours}/{businessData.goalHours} hours</p>

				<div className={classes.timers}>
					<div className={classes.timerWrapper}>
						<Stopwatch businessData={businessData} isShown={businessData.stopWatchIsShown}/>
						<CountDown businessData={businessData} isShown={businessData.countDownIsShown}/>
					</div>
					<div className={classes.switchBtnWrapper}>
						<button onClick={this.switchTimer} className={classes.switchBtn}>SWITCH</button>
					</div>	
				</div>
				<br/><br/><br/>
				<button onClick={()=>this.props.addWorkingHours(businessData.id)} >ADD HOURS</button>
				<br/><br/><br/><hr/>
				<Statistics businessData={businessData}/>
			</div>
			)
	}
}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

    const mapDispatchToProps = dispatch => {
    return{
      addWorkingHours: (id) => dispatch(actions.addWorkingHours(id)),	
      stopWatchOrCountDownIsShownHandler: (id, countDownOrStopwatch) => dispatch(actions.stopWatchOrCountDownIsShownHandler(id, countDownOrStopwatch)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessBuilder);