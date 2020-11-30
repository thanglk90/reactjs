import React, { useState } from 'react';
import {
	// Link,
	NavLink,
	// useParams,
} from "react-router-dom";

import './index.scss';

const AddUser = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('member');
  const [formData, setFormData] = useState({});

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);

    setFormData({
      ...formData,
      username: e.target.value,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString()
    })

  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);

    setFormData({
      ...formData,
      email: e.target.value,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString()
    })

  }

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
    console.log(e.target.value);

    setFormData({
      ...formData,
      group: e.target.value,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString()
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // setFormData({
    //   ...formData,
    //   created_at: new Date().toLocaleString(),
    //   updated_at: new Date().toLocaleString(),
    // });
    
    console.log(formData);

    const path = `http://localhost:5000/users`;
    const createData = (data) => {
      fetch(path, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response => {
          console.log('success');
        })
        .catch((e) => {
          console.log(e);
        })
      
    };
    createData(formData);
  }
  
  // useEffect(() => {
    
  // })



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
                  <div className="form-add__header">Add new user</div>
                </div>
              </div>
              <form method="POST"
                    onSubmit={handleSubmit}
                     encType="multipart/form-data">
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="form-add__group">
                      <label className="form-add__label">User name</label>
                      <div className="row">
                        <div className="col col-lg-12">
                          <input type="text" name="username" 
                                  value={username} onChange={handleChangeUsername}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="form-add__group">
                      <label className="form-add__label">Email</label>
                      <div className="row">
                        <div className="col col-lg-12">
                          <input type="text" name="email"
                                  value={email} onChange={handleChangeEmail}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="form-add__group">
                      <label className="form-add__label">Password</label>
                      <div className="row">
                        <div className="col col-lg-12">
                          <input type="password" name="password" placeholder="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="form-add__group">
                      <label className="form-add__label">Confirm password</label>
                      <div className="row">
                        <div className="col col-lg-12">
                          <input type="password" name="confirmPassword" placeholder="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="form-add__group">
                      <label className="form-add__label">Group</label>
                      <div className="row">
                        <div className="col col-lg-12">
                          <select name="city"
                                  value={group} onChange={handleChangeGroup}
                          >
                            <option value defaultValue disabled hidden>Choose group</option>
                            <option value="admin">Administator</option>
                            <option value="member">Member</option>
                            <option value="guest">Guest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6">
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
                      <button type="submit" className="btn btn-primary btn-fill-primary form-login__btn-submit">ADD</button>
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


export default AddUser;