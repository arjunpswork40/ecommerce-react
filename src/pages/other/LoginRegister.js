import React, { Fragment, useState,useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import AuthController from "../../controllers/Auth/AuthController";
import cogoToast from 'cogo-toast';
import AuthManagement from "../../utilities/AuthManagement";
const LoginRegister = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function retrieveToken() {
      const token = await AuthManagement.getToken();
      if(token) {
        let tokenVerify = await AuthController.tokenVerify({token: token})
        if(tokenVerify.success){
          navigate('/my-account',{state: {state:tokenVerify.user}})
        }
      }
    }
    retrieveToken();
  }, [navigate])
  
  const [loginFormData, setLoginFormData] = useState({
    mobileNumber: "",
    password: ""
  });

  const [loginFormErrors, setLoginFormErrors] = useState({
    mobileNumber: false,
    password: false
  });


  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    passwordConfirmation: ""
  });

  const [registrationErrors,setRegistrationErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobileNumber: false,
    password: false,
    passwordConfirmation:false
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = await AuthController.login(loginFormData);
      if(loginUser.success){
        await AuthManagement.setToken(loginUser.data.token)
        cogoToast.success("Login successfull", {position: "bottom-left"});
        navigate('/my-account',{state: {data : loginUser.user, token: loginUser.token}})
      } else {
        if (loginUser.data.errors?.length) {
          let errors = loginUser.data.errors;
          const updatedErrors = { ...loginFormErrors };
          updatedErrors.mobileNumber = false;
          updatedErrors.password = false;

          for (let error in errors) {
            updatedErrors[errors[error].path] = updatedErrors[errors[error].path]
              ? updatedErrors[errors[error].path] + '. ' + errors[error].msg
              : errors[error].msg;
          }
          setLoginFormErrors(updatedErrors)
        } else if(loginUser.data.statusCode === 401) {

          if(!loginUser.data.verificationStatus){
            AuthController.sendOtp({mobileNumber: loginUser.data.data.user.mobileNumber})
            cogoToast.error(loginUser.data.message, {position: "bottom-left"});
            navigate('/otp-verification',{state: {mobileNumber : loginUser.data.data.user.mobileNumber}})
          } else {
            const updatedErrors = { ...loginFormErrors };
            updatedErrors.mobileNumber = false;
            updatedErrors.password = false;
            updatedErrors.mobileNumber = loginUser.data.message
            setLoginFormErrors(updatedErrors)
          }
        }
      }
    } catch (error) {
      console.log(error,'<=ax err')
    }
  };


  const handleRegisterSubmit = async (e) => {
  
  
    e.preventDefault();
    // Make API call to register endpoint with registerFormData
    try {
      const registration = await AuthController.signuppost(registerFormData);
  
      if (registration.success) {
        cogoToast.success("User registration successfull! Please verify OTP", {position: "bottom-left"});

        navigate('/otp-verification',{state: {mobileNumber : registration.data.mobileNumber}})
      } else {
       
        if (registration.data.errors?.length) {

          let errors = registration.data.errors;
          const updatedErrors = { ...registrationErrors };
          updatedErrors.firstName = false;
          updatedErrors.lastName = false;
          updatedErrors.email = false;
          updatedErrors.mobileNumber = false;
          updatedErrors.password = false;
          updatedErrors.passwordConfirmation = false;

          for (let error in errors) {
            updatedErrors[errors[error].path] = updatedErrors[errors[error].path]
              ? updatedErrors[errors[error].path] + '. ' + errors[error].msg
              : errors[error].msg;
          }
          setRegistrationErrors(updatedErrors);
        } else {
        }
      }
    } catch (error) {
      console.log('controller error=>', error);
    }
  };
  

  const handleLoginInputChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterInputChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Login Register", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleLoginSubmit}> 
                              {loginFormErrors ? (
                                  <>
                                    <label style={{marginBottom:'8px', color:'red'}}>{loginFormErrors.mobileNumber}</label><br></br>
                                    <label style={{marginBottom:'8px', color:'red'}}>{loginFormErrors.password}</label>
                                  </>
                                ) : (
                                  <label></label>
                                )}
                              <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={loginFormData.mobileNumber}
                                onChange={handleLoginInputChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleLoginInputChange}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  {/* <input type="checkbox" />
                                  <label className="ml-10">Remember me</label> */}
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleRegisterSubmit}>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={loginFormData.firstName}
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.firstName ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.firstName}</label>
                              ) : (
                                <label></label>
                              )}
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={loginFormData.lastName}
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.lastName ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.lastName}</label>
                              ) : (
                                <label></label>
                              )}
                              <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={loginFormData.email}
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.email ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.email}</label>
                              ) : (
                                <label></label>
                              )}
                              <input
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                type="text"
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.mobileNumber ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.mobileNumber}</label>
                              ) : (
                                <label></label>
                              )}
                              <input
                                name="password"
                                placeholder="Password"
                                type="password"
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.password ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.password}</label>
                              ) : (
                                <label></label>
                              )}
                              <input
                                name="passwordConfirmation"
                                placeholder="Confirm Password"
                                type="password"
                                onChange={handleRegisterInputChange}
                              />
                              {registrationErrors && registrationErrors.passwordConfirmation ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{registrationErrors.passwordConfirmation}</label>
                              ) : (
                                <label></label>
                              )}
                              
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
