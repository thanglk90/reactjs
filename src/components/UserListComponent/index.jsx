import React, { useEffect, useState } from 'react';
import {
	// Link,
	NavLink
} from "react-router-dom";

import UserListItem from '../UserListItemComponent';
import data from '../../mockdata/userlist';
import './index.scss';

const UserList = ( { listItem }) => {

    const [list, setList] = useState(listItem);

    // const removeItem = (id) => {
    //   console.log(id);
    //   const path = `http://localhost:5000/users/`;
    //   fetch(`${path}${id}`, {
    //     method: 'DELETE'
    //   })
    //   for(var index in list) {
    //     if(list[index].id === id) {
    //       list.splice(index, 1)
    //       setList([...list]);
    //     }
    //   }
    // }

    // useEffect(() => {
    //   getList();
    // }, [])

    // const getList = async () => {
    //   const path = `http://localhost:5000/users`;
    //   const response = await fetch(path);
    //   const json = await response.json();    
      
    //   console.log(json);
    //   setList(json);
    // }

    return (

          <div className="card">
            <div className="table__header card__header">
              <div className="table__header-label">
                <i className="fas fa-table" />
                DataTable Example
              </div>
              <div className="table__header-add">
                <NavLink to='/users/add' className="btn table__btn-add">
                  <i className="fas fa-plus-circle" /> 
                    Add new user
                </NavLink>
              </div>
            </div>
            <div className="card__body">
              <div className="row table__control">
                <div className="col col-lg-6 col-sm-12">
                  <div className="table__control-selection">
                    Show
                    <select name="selection" className="table__control-selection-input">
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                    </select>
                    entries
                  </div>
                </div>
                <div className="col col-lg-6 col-sm-12">
                  <div className="table__control-search">
                    Search:
                    <div className="table__control-search-box">
                      <input type="text" name="search" className="table__control-search-box-input" />
                      <i className="fas fa-times" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="table">
                <table className="table__inner">
                  <thead>
                    <tr>
                      <td style={{width: '5%'}}>#</td>
                      <td style={{width: '20%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          Username
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '15%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          Email
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '15%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          Group
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '10%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          Created at
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '10%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          Updated at
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '10%'}}>
                        <a href="http://localhost:3000/" className="table__filter-link">
                          ID
                          <div className="table__arrow-group">
                            <div className="table__arrow-up">
                              <i className="fas fa-long-arrow-alt-up active" />
                            </div>
                            <div className="table__arrow-down">
                              <i className="fas fa-long-arrow-alt-down" />
                            </div>
                          </div>
                        </a>
                      </td>
                      <td style={{width: '15%'}}>
                        Actions
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      list.map((item, index) => (
                        <UserListItem 
                            // handleOnclick={removeItem}
                            key={index}
                            index={index}
                            item={item}    
                        />
                      ))
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>#</td>
                      <td>Username</td>
                      <td>Email</td>
                      <td>Group</td>
                      <td>Created at</td>
                      <td>Updated at</td>
                      <td>ID</td>
                      <td>Actions</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="card__footer">
              <div className="row table__pagination">
                <div className="col col-lg-6 col-sm-12">
                  <div className="table__total-pages">
                    Showing 
                    <span className="table__total-pages-current">1</span>
                    to 
                    <span className="table__total-pages-limit">10</span>
                    of 
                    <span className="table__total-pages-records">57</span>
                    entries
                  </div>
                </div>
                <div className="col col-lg-6 col-sm-12">
                  <div className="table__pages">
                    <div className="table__pages-btn-group">
                      <div className="table__pages-btn-group-nav">
                        <span href="http://localhost:3000/">First page</span>
                      </div>
                      <ul className="table__pages-btn-group-list">
                        <li className="table__pages-btn-group-list-item active">1</li>
                        <li className="table__pages-btn-group-list-item">2</li>
                        <li className="table__pages-btn-group-list-item">3</li>
                        <li className="table__pages-btn-group-list-item">4</li>
                        <li className="table__pages-btn-group-list-item">5</li>
                        <li className="table__pages-btn-group-list-item">6</li>
                        <li className="table__pages-btn-group-list-item">7</li>
                      </ul>
                      <div className="table__pages-btn-group-nav">
                        <a href="http://localhost:3000/" className="table__pages-btn-group-nav-link">Last page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    );
};

export default UserList;