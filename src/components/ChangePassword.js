import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState();

  const handleChangePassword = () => {
    if (email !== "" && oldPassword !== "" && newPassword !== "") {
      axios
        .post(
          "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/update",
          { email: email, newPassword: newPassword, oldPassword: oldPassword },
          {
            headers: {
              "Content-Type": "application/json",
              Origin: window.location.origin,
            },
          }
        )
        .then((response) => {
          setData(response);
          setErrMsg(data.data.message);
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrMsg(data.data.message)
        });
    } else {
      setErrMsg("All fields must be filled");
    }
  };

  useEffect(() => {
    document.title = "Change Password - NFC Dashboard";
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 container-fluid">
        <h1 className="h3 mb-0 text-gray-800">Change Password</h1>
      </div>

      <div className="container-fluid">
        <div className="form_style">
          <label className="mb-2 modellabel">Email address:</label>
          <div className="form-group has-search" style={{ position: " relative" }}>
            <input
              type="email"
              className="form-control style-input"
              value={email}
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="mb-2 modellabel">Old Password:</label>
          <div className="form-group has-search" style={{ position: " relative" }}>
            <input
              type={passwordVisible ? `text` : `password`}
              className="form-control style-input"
              value={oldPassword}
              placeholder="old password"
              onChange={(e) => setOldPassword(e.target.value)}
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

          <label className="mb-2 modellabel">New Password:</label>
          <div className="form-group has-search" style={{ position: " relative" }}>
            <input
              type={ConfirmPasswordVisible ? `text` : `password`}
              className="form-control style-input"
              value={newPassword}
              placeholder={"new password"}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span className="form-control-feedback ">
              <i
                className={`fa ${
                  ConfirmPasswordVisible ? `fa-eye` : `fa-eye-slash`
                } fa-sm`}
                onClick={() =>
                  setConfirmPasswordVisible(!ConfirmPasswordVisible)
                }
              ></i>
            </span>
          </div>
          <div>
            <span className={"mb-3"}>{errMsg}</span>
          </div>

          <Button
            className="shadow-none btn_style1 mb-2 my-4"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
