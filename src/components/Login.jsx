import axios, { Axios } from "axios";
import React, {useEffect, useState} from "react";
import { Link ,useNavigate} from "react-router-dom";


export default function Login(props) {
  useEffect(() => {
    props.setProgress(30)
    setTimeout(() => {
      props.setProgress(100)
    }, 300);
    props.KeepLoggedIn();
  }, [])
  
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (event)=>{
    event.preventDefault();
    props.setProgress(30)

    if (props.userEmail == 'admin@gmail.com' && props.password == 'admin'){
      props.setUserName("Order Manager")
      props.setIsAdminLogin(true);
      navigate('/currentOrders');
      setTimeout(() => {
        props.setProgress(100)
      }, 300)
    }
    else{
      await axios.post(`http://${props.ip}/login`, {userEmail: props.userEmail,password: props.password})
      
      .then(res=>{
        if (res.data == "Incorrect Email or Password"){
          setLoginError(res.data);
        }
        else{
          setLoginError("");
        }
  
        if (res.data != "Incorrect Email or Password"){
          props.setUserName(res.data.data[0].user_username)
          props.setUserAddress(res.data.data[0].user_address)
          props.setIsLogin(true)

          localStorage.setItem('user', JSON.stringify(res.data.data))
          navigate(`/${props.navigateTo}`)
        }
      },setTimeout(() => {
        props.setProgress(100)
      }, 300)
      
      )
      .catch(err=>console.log(err));
    }


  }

  return (
    <>
      <div className="container mt-16 ">
        <div className="w-full mx-auto rounded-lg   md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight mb-4 text-gray-900 md:text-2xl dark:text-white">
              LOG IN
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={LoginUser} >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={(e)=>{
                    props.setUserEmail(e.target.value)
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="loginFormField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e)=>{
                    props.setPassword(e.target.value)
                  }}
                  type="password"
                  name="password"
                  id="password"
                  className={`loginFormField text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${loginError=== "" ? "mb-4": "mb-1"}`}
                  required
                />
                <span className={`errorMessage mb-4 mx-2 ${loginError=== "" ? "hidden": ""}`}>{loginError}</span>
              </div>
              
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  href="#"
                  className="font-medium underline text-primary-600 dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <div className="text-center mt-4">
              <button                
                className="LoginButton text-sm  py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
              >
                Log in
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
