import * as actionTypes from './actionsTypes';

export const addBusiness = (data) => {
	return {
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}

export const switchBusinessTab = (id) => {
	return{
		type: actionTypes.SWITCH_BUSINESS_TAB,
		id: id	
	}
}

export const saveCurrentStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_STOPWATCH_TIME,
		time: time,
		id: id,
		timerTime: timerTime
	}
}

export const clearCurrentStopwatchTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_STOPWATCH_TIME,
		id: id	
	}
}

export const saveTimerTime = (time, miniTimerTime, id) => {
	return{
		type: actionTypes.SAVE_TIMER_TIME,
		time: time,
		miniTimerTime: miniTimerTime,
		id: id
	}
}

export const clearCurrentCountDownTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_COUNTDOWN_TIME,
		id: id,
	}
}

export const stopWatchOrCountDownIsShownHandler = (id, countDownOrStopwatch) => {
	return{
		type: actionTypes.STOPWATCH_OR_COUNTDOWN_IS_SHOWN_HANDLER,
		countDownOrStopwatch: countDownOrStopwatch,
		id: id,
	}
}

export const deleteBusiness = (id) => {
	return{
		type: actionTypes.DELETE_BUSINESS,
		id: id,
	}
}

export const addWorkingHours = (id) => {
	return{
		type: actionTypes.ADD_WORKING_HOURS,
		id: id,
	}
}

export const saveCurrentMiniStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_MINI_STOPWATCH_TIME,
		time: time,
		id: id
	}
}
