import { useState, useEffect } from 'react';
import {
	// Link,
	NavLink
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../components/NavbarComponent';
import Sidebar from '../components/SidebarComponent';
import UserList from '../components/UserListComponent';
import Breadcrumb from '../components/BreadcrumbComponent';
import { listUser } from '../redux/actions';

function changeTilte(title) {
	document.title = title;
}

function UserListPage({match}) {

	const dispatch = useDispatch();
	const list = useSelector(state => state.user.list);
	console.log(list);

	useEffect(() => {
		getList();
	}, [])

	const getList = async () => {
		const path = `http://localhost:5000/users`;
		const response = await fetch(path);
		const json = await response.json();    

		dispatch(listUser(json));
	}


	const [isMenuShow, setMenuShow] = useState(true);
	changeTilte('User list');
	
  	return (
    <div className="fluid-container">
		<input type="checkbox" defaultChecked={isMenuShow} className="sidebar-toggle" name="sidebar-toggle" id="sidebar" />

		<Navbar />

		<div className="left-side">
			<Sidebar />
		</div>

		<div className="right-side">
			<div className="main">
				<h1 className="title">Users</h1>

				{/* Breadcrumb */}
				<Breadcrumb />

				{/* UserList */}
				<UserList listItem={list} />
			</div>
		</div>
    </div>
  );
}

export default UserListPage;
