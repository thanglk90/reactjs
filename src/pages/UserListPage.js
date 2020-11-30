import { useState, useEffect } from 'react';
import {
	// Link,
	NavLink
} from "react-router-dom";

import Navbar from '../components/NavbarComponent';
import Sidebar from '../components/SidebarComponent';
import UserList from '../components/UserListComponent';
import Breadcrumb from '../components/BreadcrumbComponent';

function changeTilte(title) {
	document.title = title;
}
function UserListPage({match}) {
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
				<UserList />
			</div>
		</div>
    </div>
  );
}

export default UserListPage;
