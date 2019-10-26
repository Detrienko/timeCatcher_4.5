import React from 'react';
import classes from './BusinessTab.module.css';

const BusinessTab = (props) => {

	const switchBusinessTab = (e) => {
		if(e.target.nodeName=='BUTTON'){
			return false;
		}
		let currentId = props.business.id;
		props.switchBusinessTab(currentId);
	}

	const showRemovePopUp = () => {

		document.getElementById('popUpContainer').style.display="block";
		document.getElementById('cover').style.display="block";

	}

	const hideRemovePopUp = () => {
		document.getElementById('popUpContainer').style.display="none";
		document.getElementById('cover').style.display="none";
	}

	const deleteBusiness = () => {

		props.deleteBusiness(props.business.id)
		hideRemovePopUp();
	}

	const editBusinss = ()=>{
		alert('nothing')
	}

	let popUpMessage = (
			<div id="popUpContainer" className={classes.popUpContainer}>
				<p className={classes.popUpContainer_message}>Are you sure you want to delete this business?</p>
				<button onClick={deleteBusiness} className={classes.yesBtn}>YES</button>
				<button onClick={hideRemovePopUp} className={classes.noBtn}>NO</button>
				<a onClick={hideRemovePopUp} href="#" className={classes.close}/>
			</div>
		)

	let selectedTabLine = null;

	if(props.business.isShown){
		selectedTabLine = <span className={classes.selectedTab}></span> 
	}


	return(
		<div onClick={(e)=>switchBusinessTab(e)} className={classes.businessTab}>
			{selectedTabLine}
			<span className={classes.businessTitle}>{props.business.title}</span>
			<br/>
			<span>{props.business.progress}%</span><br/>
			<span>Goal: {props.business.hours}/{props.business.goalHours} hours</span><br/>
			<button onClick={editBusinss} className={classes.btnEdit}>Edit</button><br/>
			<button onClick={showRemovePopUp} className={classes.btnDelete}>DELETE</button>

			{popUpMessage}
			<div 
				id='cover'
				className={classes.cover}
				onClick={hideRemovePopUp}>
			</div>

		</div>
		)
}

export default BusinessTab;