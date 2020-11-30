import React from 'react';
import {
	// Link,
	NavLink
} from "react-router-dom";

import './index.scss';

const UserListItem = ( { item, index, handleOnclick }) => {

    const handleOnclickDelete = (e) => {
      e.preventDefault();
      handleOnclick(item.id);  
    }

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.group}</td>
        <td>{item.created_at}</td>
        <td>{item.updated_at}</td>
        <td>{item.id}</td>
        <td>
          <div className="table__btn">
            <NavLink to={`/users/edit/${item.id}`} className="table__btn-item table__btn-edit" title="edit">
              <i className="far fa-edit" />
            </NavLink>
            <a href="http://localhost:3000/" 
              className="table__btn-item table__btn-del" 
              title="delete"
              onClick={handleOnclickDelete}
            >
              <i className="far fa-trash-alt" />
            </a>
          </div>
        </td>
      </tr>
    );
};

export default UserListItem;