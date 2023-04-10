import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";

const AssignSchool = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [schoolData, setSchooldata] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  const fetchData = async () => {
    axios(
      "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/users/getAllUser",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const fetchSchoolData = async () => {
    axios(
      "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/school",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        setSchooldata(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSave = () => {
    if (selectedValue && email !== "") {
      axios
        .post(
          "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/users",
          {
            email_id: email,
            school_name: selectedValue,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Origin: window.location.origin,
            },
          }
        )
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrMsg("There was an error");
        });
    } else setErrMsg("Please Fill all Input Fields");
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    fetchData();

    document.title = "Assign School - NFC Dashboard";

    fetchSchoolData();
  }, []);

  return (
    <>
      <div className=" mb-4 container-fluid table-responsive">
        <div className="justify-content-between mb-2 style">
          <h1 className="h3 mb-3 text-gray-800">Assign Schools</h1>
          <Button
            className="shadow-none btn_style1 mb-2"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            Assign Members
          </Button>
        </div>
        <Table striped bordered hover>
          <thead className="color">
            <tr>
              <th className="tablehead">ID</th>
              <th className="tablehead">School Name</th>
              <th className="tablehead">Access Code</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.school_name}</td>
                    <td>{item.access_code}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>

        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Assign a New Member
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <label className="mb-2 modellabel">Select School</label>
                <select
                  className="form-select form-select-lg style-input mb-4"
                  required
                  aria-label=".form-select-lg example"
                  onChange={handleSelectChange}
                  value={selectedValue}
                >
                  <option selected>...</option>
                  {schoolData?.map((item, index) => {
                    return <option key={index}>{item.name}</option>;
                  })}
                </select>
                <label className="mb-2 modellabel">Email</label>
                <MDBInput
                  value={email}
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" style-input"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  required
                />
                <span className="mb-4 errormsg">{errMsg}</span>
              </div>
              <div className="modal-footer">
                <Button
                  className="btn btn-danger shadow-none"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </Button>
                <Button className="btn_style shadow-none" onClick={handleSave}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignSchool;
