import React, { PropTypes } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import UserListPage from '../../pages/UserListPage.js';

const routes = [
  {
    path: "/users",
    exact: true,
    main: () => {<UserListPage />}
  },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
];

const Sidebar = props => {
    return (
        <div>
            <div className="side-bar">
                <div className="side-bar__header">CORE</div>
                <div className="side-bar__body">
                    <NavLink exact to="/" activeClassName="active" className="side-bar__link">
                        <i className="fas fa-tachometer-alt" /> Dashboard
                    </NavLink>
                    <div className="side-bar__box">
                        <div className="side-bar__box-header">Member</div>
                        <div className="side-bar__box-list">
                            <div className="side-bar__box-title active">
                                <i className="fas fa-layer-group" /> User
                            </div>
                            <ul className="side-bar__box-link-list">
                                <li className="side-bar__box-link-list-item">
                                    <NavLink exact to="/users" activeClassName="active" className="side-bar__box-link-list-item-link">
                                        User list
                                    </NavLink>
                                </li>
                                <li className="side-bar__box-link-list-item">
                                    <NavLink exact to="/users/edit" activeClassName="active" className="side-bar__box-link-list-item-link">
                                        Edit user
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="side-bar__box-list">
                            <div className="side-bar__box-title">
                            <i className="fas fa-book-open" /> Pages
                            </div>
                            <ul className="side-bar__box-link-list">
                            <li className="side-bar__box-link-list-item">
                                <a href="#" className="side-bar__box-link-list-item-link">Authentication</a>
                            </li>
                            <li className="side-bar__box-link-list-item">
                                <a href="#" className="side-bar__box-link-list-item-link">Error</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-bar__footer">
                Logged in as: <br /> Admin_bb
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;