import './App.css';

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { InterfaceStorage } from "./contexts/interfaceContext";

import Header from "./components/header";
import Menu from "./components/menu";

import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import Library from "./pages/library";
import SignIn from "./pages/signIn";
import SignUp from './pages/signUp';

function MainApp() {
  return(
    <div className="mainApp">
      <Header />

      <div className="container">
        <Menu />

        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {  
  return (
      <InterfaceStorage>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainApp />} >
                <Route path='/' element={<Home />} />
                <Route path='/shorts' element={<Shorts />} />
                <Route path='/subscriptions' element={<Subscriptions />} />
                <Route path='/library' element={<Library />} />
              </Route>

              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes> 
          </div>
        </BrowserRouter>
      </InterfaceStorage>

  );
}

export default App;
