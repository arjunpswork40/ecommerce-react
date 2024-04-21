import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import AuthController from "../../controllers/Auth/AuthController";
import cogoToast from 'cogo-toast';

const OtpVerification = () => {
  let { pathname, state } = useLocation();
  const navigate = useNavigate();

  const [otpFormData, setOtpFormData] = useState({
    otp: "",
  });

  const [otpErrors,setOtpErrors] = useState({
    otp: false,
  })



  const errorManagement = async(details) => {
    if (details.data.errors.length) {
      let errors = details.data.errors;
      const updatedErrors = { ...otpErrors };
      updatedErrors.otp = false;

      for (let error in errors) {
        updatedErrors[errors[error].path] = updatedErrors[errors[error].path]
          ? updatedErrors[errors[error].path] + '. ' + errors[error].msg
          : errors[error].msg;
      }
      setOtpErrors(updatedErrors);
    }else if(details.status === 401) {
      let updatedErrors = {otp: details.data.message}
      setOtpErrors(updatedErrors);
    }
  }

  
  const resendOtp = async() => {
    try{
      let resendOtp = await AuthController.sendOtp({mobileNumber:state.mobileNumber})
      if (resendOtp.success) {
        cogoToast.success("OTP resend successfully! Please verify OTP", {position: "bottom-left"});
      } else {
        await errorManagement(resendOtp)

      }
    } catch(error){
      console.log('controller error=>', error);
      cogoToast.error("Internal error occured", {position: "bottom-left"});      
    }
  }

  const handleOtpSubmit = async (e) => {
  
  
    e.preventDefault();
    // Make API call to register endpoint with registerFormData
    try {
      otpFormData.mobileNumber = state.mobileNumber;
      const registration = await AuthController.verifyOtp(otpFormData);
  
      if (registration.success) {

        navigate('/my-account',{state: {data : registration.data, token: registration.token}})
        // Handle success
      } else {
       
        await errorManagement(registration)
        
      }
    } catch (error) {
      console.log('controller error=>', error);
    }
  };
  

  const handleOtpInputChange = (e) => {
    setOtpFormData({
      ...otpFormData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <Fragment>
      <SEO
        titleTemplate="OTP"
        description="Verify your OTP."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Login Register", path: process.env.PUBLIC_URL + '/login-register' },
            {label: "Verfy OTP", path: process.env.PUBLIC_URL + pathname },
          ]} 
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="otp">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="otp">
                          <h4>OTP Verification</h4>
                        </Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="otp">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleOtpSubmit}> 
                              <input
                                type="text"
                                name="otp"
                                placeholder="Enter your OTP"
                                value={otpFormData.otp}
                                onChange={handleOtpInputChange}
                              />
                              {otpErrors && otpErrors.otp ? (
                                <label style={{marginBottom:'8px', color:'red'}}>{otpErrors.otp}</label>
                              ) : (
                                <label></label>
                              )}
                             
                              <div className="button-box">
                                
                                <button type="submit">
                                  <span>Verify</span>
                                </button>
                                <button style={{position:'relative', left:'60%'}} onClick={resendOtp} type="button">
                                  <span>Resend OTP</span>
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

export default OtpVerification;
