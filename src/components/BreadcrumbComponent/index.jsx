import React from 'react';
import {
	// Link,
  // NavLink,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import './index.scss';

const Breadcrumb = props => {

    // console.log(useRouteMatch());
    // console.log(useParams());

    return (
        <div className="breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__list-item">
                <a href="http://localhost:3000/" className="breadcrumb__link">Dashboard</a>
              </li>
              <li className="breadcrumb__list-item active">
                <a href="http://localhost:3000/" className="breadcrumb__link">User list</a>
              </li>
            </ul>
        </div>
    );
};

export default Breadcrumb;