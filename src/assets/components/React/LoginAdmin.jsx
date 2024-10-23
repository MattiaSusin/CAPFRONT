import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/LoginAdmin.css";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import Cookies from "js-cookie";

const LoginAdmin = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const {login, loading, error, response } = useLogin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.email) errors.email = "email is required";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      
      await login(formData.email, formData.password);

    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    const tokenLogin = Cookies.get('accessToken');
    if(response || tokenLogin){
      console.log('Login effettuato con seccesso', response);
      navigate('/menuAdmin');
    }
  }, [response, navigate]);

  return (
    <div className="bodylogin d-flex justify-content-center align-items-center backgroundAdmin">
      <Card
        style={{
          width: "35rem",
          height: "40rem",
          background: "#122029",
          color: "white",
        }}
        className="border-0"
      >
        <div className="d-flex justify-content-center mb-3 mt-5 me-5">
          <svg
            width="150px"
            height="150px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffc999"
            strokeWidth="0.672"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.625 12C1.625 12.4142 1.96079 12.75 2.375 12.75L13.3476 12.75L11.3869 14.4306C11.0724 14.7001 11.036 15.1736 11.3056 15.4881C11.5751 15.8026 12.0486 15.839 12.3631 15.5694L15.8631 12.5694C16.0293 12.427 16.125 12.2189 16.125 12C16.125 11.7811 16.0293 11.573 15.8631 11.4306L12.3631 8.43056C12.0486 8.16099 11.5751 8.19741 11.3056 8.51191C11.036 8.8264 11.0724 9.29988 11.3869 9.56944L13.3476 11.25L2.375 11.25C1.96079 11.25 1.625 11.5858 1.625 12Z"
                fill="#ffc999"
              ></path>{" "}
              <path
                d="M9.375 9.75004L9.75328 9.75004C9.49473 9.01645 9.6241 8.16876 10.1667 7.53576C10.9754 6.59228 12.3958 6.48301 13.3393 7.29171L16.8393 10.2917C17.338 10.7192 17.625 11.3432 17.625 12C17.625 12.6569 17.338 13.2809 16.8393 13.7084L13.3393 16.7084C12.3958 17.5171 10.9754 17.4078 10.1667 16.4643C9.6241 15.8313 9.49473 14.9836 9.75328 14.25L9.375 14.25L9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5466 22 15.375 22L16.375 22C19.2034 22 20.6176 22 21.4963 21.1213C22.375 20.2426 22.375 18.8284 22.375 16L22.375 8C22.375 5.17158 22.375 3.75736 21.4963 2.87868C20.6176 2 19.2034 2 16.375 2L15.375 2C12.5466 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8L9.375 9.75004Z"
                fill="#ffc999"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <Form onSubmit={handleSubmit} className="p-4">
          <FormGroup controlId="formUsername">
          <FormLabel className="labelForm">Email*</FormLabel>
                        <FormControl
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          className="labelContatti border-bottom border-white rounded-0"
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.email}
                        </FormControl.Feedback>
          </FormGroup>
          <FormGroup controlId="formPassword" className="mt-3">
            <FormLabel className="labelForm" >Password*</FormLabel>
            <FormControl
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              className="labelContatti border-bottom border-white rounded-0"
            />
            <FormControl.Feedback type="invalid">
              {errors.password}
            </FormControl.Feedback>
          </FormGroup>
          <div className="d-flex justify-content-center mt-5">

          
          <Button 
          type="submit" 
          className="mt-4 btnFormPrenotazione "
          disabled={loading}
          >
            {loading ? 'Loading...' : 'Accedi'}
          </Button>
          </div>
          {error && <div className="error">
            {error}
          </div> }
        </Form>
      </Card>
    </div>
  );
};

export default LoginAdmin;
