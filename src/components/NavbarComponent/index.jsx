import React from 'react';
import PropTypes from 'prop-types';

import './navDemo.scss';

const Navbar = props => {
    return (            
        <div className="nav nav-dark nav-fixed-top">
                <div className="row no-gutter">
                    <div className="col col-lg-2 col-sm-6">
                        <div className="nav__brand">
                            <h3 className="demo-button">Admin Panel</h3>
                        </div>
                    </div>
                    <div className="col col-lg-10 col-sm-6">
                        <div className="row no-gutter align-items-center">
                            <div className="col col-lg-1 col-sm-3 col-sm-order-2 ">
                                <div className="nav__toggle-icon">
                                    <label htmlFor="sidebar">
                                    <i className="fas fa-bars" />
                                    </label>
                                </div>
                            </div>
                            <div className="col col-lg-auto col-sm-0 ml-auto">
                                <div className="nav__search-box">
                                    <div className="form__group form__group-btn">
                                    <input type="text" name="search" id="search" className="form__input-text" placeholder="Search for..." />
                                    <button className="form__btn-submit">
                                        <div className="form__btn-submit-icon">
                                        <i className="fas fa-search" />
                                        </div>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-auto col-sm-auto col-sm-order-1 col-sm-ml-auto">
                                <div className="nav__user-control">
                                    <div className="nav__user-control-box">
                                        <i className="fas fa-user" />
                                        <i className="fas fa-sort-down" />
                                    </div>
                                        <ul className="nav__list">
                                        <li className="nav__list-item">Setting</li>
                                        <li className="nav__list-item">Profile</li>
                                        <li className="nav__list-item nav__list-item-divide" />
                                        <li className="nav__list-item nav__list-item-footer">Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;