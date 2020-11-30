import React from 'react';
import {
	// Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

import './index.scss';

const EditUser = ( { match } ) => {
  console.log(useRouteMatch());
  const id = useParams().id;

  const handleOnChange = (e) => {
    console.log(e);
    var image = document.getElementById('imagePreview');
    image.src = URL.createObjectURL(e.target.files[0]);
    image.style.display = 'block';
  };


    return (
        <div className="row">
          <div className="col col-lg-4 col-sm-12 mr-auto ml-auto">
            <div className="form-add">
              <div className="form-add__container">
                <div className="row">
                  <div className="col col-lg-12">
                    <div className="form-add__header">Edit user</div>
                  </div>
                </div>
                <form action="#" method="POST" encType="multipart/form-data">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-add__group">
                        <label className="form-add__label">User name</label>
                        <div className="row">
                          <div className="col col-lg-12">
                            <input type="text" name="username" placeholder="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-add__group">
                        <label className="form-add__label">Email</label>
                        <div className="row">
                          <div className="col col-lg-12">
                            <input type="text" name="email" placeholder="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-add__group">
                        <label className="form-add__label">ID</label>
                        <div className="row">
                          <div className="col col-lg-12">
                            <input 
                                  value={id}
                                  type="text" 
                                  name="userID" 
                                  disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-add__group">
                        <label className="form-add__label">Group</label>
                        <div className="row">
                          <div className="col col-lg-12">
                            <select name="city">
                              <option value defaultValue disabled hidden>Choose group</option>
                              <option value="admin">Administator</option>
                              <option value="member">Member</option>
                              <option value="guest">Guest</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <div className="form-add__group">
                        <label className="form-add__label">Picture</label>
                        <div className="row">
                          <div className="col col-lg-12 col-sm-12">
                            <div className="row">
                              <div className="col col-lg-12 col-sm-12">
                                <input type="file" 
                                        onChange={handleOnChange}
                                        name="uploadImg" id="uploadImg" accept="image/png,image/jpeg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-12">
                      <img src="true" id="imagePreview" className="form-add__imagePreview" alt="imagePreview" style={{width: '100%', display: 'none'}} />
                    </div>
                  </div>
                  <div className="form-add__group">
                    <div className="row">
                      <div className="col col-lg-3 col-sm-6 ml-auto">
                        <NavLink to='/users' className="btn btn-primary btn-fill-primary form-login__btn-submit">
                          Back
                        </NavLink>
                      </div>
                      <div className="col col-lg-3 col-sm-6 mr-auto">
                        <button type="submit" className="btn btn-primary btn-fill-primary form-login__btn-submit">Save</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default EditUser;