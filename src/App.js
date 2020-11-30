import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink
} from "react-router-dom";

import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';
import AddUserPage from './pages/AddUserPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  

  return (
    <Router>
      <Switch>
        <Route
                key={1}
                path='/'
                exact={true}
                children={<DashboardPage />}
        />
        <Route
                key={1}
                path='/users'
                exact={true}
                children={<UserListPage />}
        />
        <Route
                key={2}
                path='/users/add'
                exact={true}
                children={<AddUserPage />}
        />
        <Route
                key={3}
                path='/users/edit/:id'
                exact={true}
                children={<EditUserPage />}
        />
      </Switch>
      
    </Router>
  );
}

export default App;
