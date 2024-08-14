import { useState } from "react";
import "../style.css";
import "./App.css";
import RegistrationForm from "./Registration/RegistrationForm";
import LoginForm from "./Login/LoginForm";
import logo from "../task-master-logo.png";

const App = () => {
  const [toogleLogin, setToogleLogin] = useState<boolean>(true);

  const handleToogle = () => {
    setToogleLogin(toogle => !toogle);
  }

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Task Master
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        {toogleLogin ? <LoginForm /> : <RegistrationForm/> }

          <p className="mt-10 text-center text-sm text-gray-500">
            <button onClick={handleToogle}>{toogleLogin ? 'Not a member?' : 'Sign In' } </button>
          </p>
        </div>
      </div>
  );
};

export default App;
