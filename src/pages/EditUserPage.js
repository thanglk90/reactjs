import { useState } from 'react';

import Navbar from '../components/NavbarComponent';
import Sidebar from '../components/SidebarComponent';
import EditUser from '../components/EditUserComponent';
import Breadcrumb from '../components/BreadcrumbComponent';

function EditUserPage() {
	const [isMenuShow, setMenuShow] = useState(true);

  return (
    <div className="fluid-container">
		<input type="checkbox" defaultChecked={isMenuShow} className="sidebar-toggle" name="sidebar-toggle" id="sidebar" />

		<Navbar />

		<div className="left-side">
			<Sidebar />
		</div>

		<div className="right-side">
			<div className="main">

			<h1 className="title">Tables</h1>

				{/* Breadcrumb */}
				<Breadcrumb />

				{/* EditUser */}
				<EditUser />
			</div>
		</div>
    </div>
  );
}

export default EditUserPage;
