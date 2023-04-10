import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    document.title = "Login - NFC Dashboard";
  }, []);

  const submit = () => {
    if (email !== "" && password !== "") {
      axios
        .post(
          "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/login",
          {
            email: email,
            password: password,
          }
        )
        .then((result) => {
          if (result.data.token !== undefined) {
            localStorage.setItem("token", JSON.stringify(result.data.token));
            navigate("/");
            window.location.reload();
          } else {
            alert("Email or Password is invalid!");
          }
        });
    } else {
      setErrMsg("Please Fill Email and password Fields");
    }
  };

  return (
    <div className="loginpage">
      <MDBContainer>
        <div className="card_container">
          {toggle ? (
            <MDBCard className="card_style">
              <MDBCol className="container ">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2 style_image">
                    <img className="image_style" src="Images/counted.png" />
                  </div>
                  <h5
                    className="style_image fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>
                  <label className="mb-2">Email address:</label>

                  <div
                    className="form-group has-search"
                    style={{ position: " relative" }}
                  >
                    <input
                      type="email"
                      className="form-control style-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label className="mb-2">Password:</label>

                  <div
                    className="form-group has-search"
                    style={{ position: " relative" }}
                  >
                    <input
                      type={passwordVisible ? `text` : `password`}
                      className="form-control style-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="form-control-feedback ">
                      <i
                        className={`fa ${
                          passwordVisible ? `fa-eye` : `fa-eye-slash`
                        } fa-sm`}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      ></i>
                    </span>
                  </div>
                  <span className="mb-4 errormsg">{errMsg}</span>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input style-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember Password
                    </label>
                  </div>

                  <Button
                    className="btn_style shadow-none"
                    onClick={() => submit()}
                  >
                    Login
                  </Button>
                  <a
                    href="#"
                    className="forget_password mb-3"
                    onClick={() => setToggle(!toggle)}
                  >
                    Forget password?
                  </a>
                </MDBCardBody>
              </MDBCol>
            </MDBCard>
          ) : (
            <MDBCard className="card_style">
              <MDBCol className="container ">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2 style_image">
                    <img className="image_style" src="Images/counted.png" />
                  </div>

                  <label className="mb-2">Email address:</label>
                  <MDBInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" style-input mb-4"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <Button
                    className="btn_style mb-3 shadow-none"
                    // onClick={() => naviagte("/sidebar")}
                  >
                    Send OTP
                  </Button>
                  <Button
                    className="btn_style mb-3 shadow-none"
                    onClick={() => setToggle(!toggle)}
                  >
                    Back to login
                  </Button>
                </MDBCardBody>
              </MDBCol>
            </MDBCard>
          )}
        </div>
      </MDBContainer>
    </div>
  );
}

export default Login;
