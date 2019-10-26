import React, {Component} from 'react';
import classes from './BusinessList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';

import BusinessForm from '../../containers/Forms/BusinessForm/BusinessForm';
import BusinessTab from '../BusinessTab/BusinessTab';

// icons:
import listIcon from '../../images/icons/listIcon.png';
import addBusinessIcon from '../../images/icons/addBusinessIcon.png';

class BusinessList extends Component {

  state={
    isBusinessFormShown: false,
  }

  showBusinessForm = () => {
    this.setState({isBusinessFormShown: !this.state.isBusinessFormShown})
  }

  hideBusinessForm = () => {
    this.setState({isBusinessFormShown: !this.state.isBusinessFormShown})
  }

  render(){

  let businessForm = null;

  if(this.state.isBusinessFormShown){
    businessForm = <BusinessForm hideBusinessForm = {this.hideBusinessForm} addBusiness={this.props.addBusiness}/>;
  }   

  let businessTab = this.props.business.map(
    (el)=><BusinessTab 
            deleteBusiness = {this.props.deleteBusiness}
            switchBusinessTab={this.props.switchBusinessTab} 
            business={el}/>
    ) 

  return (
  	<div className={classes.businessListWrapper}>
  		<h1 className={classes.TimeCatcherLogoText}>Time Catcher</h1>
      {businessForm}
	    <div>
        {businessTab}
	    </div>	
        <span onClick={this.showBusinessForm}
              className={classes.addNewBusinessWrapper}>
              <span className={classes.plus}>+</span> Add new business
        </span>
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
      addBusiness: (data) => dispatch(actions.addBusiness(data)),
      deleteBusiness: (id) => dispatch(actions.deleteBusiness(id)),
      switchBusinessTab: (id) => dispatch(actions.switchBusinessTab(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList);
