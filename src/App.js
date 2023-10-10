import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/Showtime/ShowTime";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";
import Users from "./pages/Admin/Users/Users";
import AddUser from "./pages/Admin/Users/AddUser";
import EditUser from "./pages/Admin/Users/EditUser";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/" exact Component={Home} />
       

        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <DetailTemplate path="/detail/:id" exact Component={Detail} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <AdminTemplate path="/admin" exact Component={Users} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate path="/admin/users/addnew" exact Component={AddUser} />
        <AdminTemplate
          path="/admin/users/edit/:tk"
          exact
          Component={EditUser}
        />
        <AdminTemplate
          path="/admin/films/showtime/:id/:tenphim"
          exact
          Component={ShowTime}
        />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
