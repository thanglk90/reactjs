import React, { PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link,
	NavLink
} from "react-router-dom";

import './index.scss';

const InfoCard = props => {

    return (
        
      <div className="row">
      <div className="col col-lg-3 col-sm-12">
        <div className="card background-primary">
          <div className="card__header info__header">
            <h3>Primary card</h3>
          </div>
          <div className="card__body info__body">
            <a href="#" className="info__link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col col-lg-3 col-sm-12">
        <div className="card background-warning">
          <div className="card__header info__header">
            <h3>Warning card</h3>
          </div>
          <div className="card__body info__body">
            <a href="#" className="info__link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col col-lg-3 col-sm-12">
        <div className="card background-success">
          <div className="card__header info__header">
            <h3>Success card</h3>
          </div>
          <div className="card__body info__body">
            <a href="#" className="info__link">View Details</a>
          </div>
        </div>
      </div>
      <div className="col col-lg-3 col-sm-12">
        <div className="card background-danger">
          <div className="card__header info__header">
            <h3>Danger card</h3>
          </div>
          <div className="card__body info__body">
            <a href="#" className="info__link">View Details</a>
          </div>
        </div>
      </div>
    </div>
    );
};

InfoCard.propTypes = {
    
};

export default InfoCard;