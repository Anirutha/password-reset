import { Route, Routes } from "react-router-dom";
import './App.css';
import { SignUpPage } from "./Components/SignUpPage";
import { LoginPage } from "./Components/LoginPage";
import {EmailVerification} from "./Components/EmailVerification"
import {ForgetPassword} from "./Components/ForgetPassword"
import { PasswordReset } from "./Components/PasswordReset";
import {HomePage} from "./Components/HomePage"
import { Nopage } from "./Components/Nopage";

function App() {


  return (
    <div className="App">
      <div>
        <Routes>
        <Route exact path ="/"
        element={<HomePage/>}
       />

          <Route path="/login"
          element={<LoginPage />}
          />

          <Route path="/signup"
          element={<SignUpPage />}
          />

          <Route path="/users/:id/verify/:token"
          element={<EmailVerification />}
          />

          <Route path="/forget-password"
          element={<ForgetPassword />}
          />

          <Route path="/api/password-reset/:id/:token"
          element={<PasswordReset />}
          />

          <Route path="*"
          element={<Nopage />}
          />
          </Routes>

        
      </div>
    </div>

  );
}

export default App;


