import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Item } from "react-sidebar-ui";

function SchoolList() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [addSchool, setAddSchool] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [fetchData, setFetchData] = useState();

  const handleSubmit = () => {
    if (addSchool !== "") {
      axios
        .post(
          "https://0be2-2405-201-6006-20bf-cc94-a44b-c-4645.ngrok-free.app/api/v1/addSchool",
          {
            name: addSchool,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
          setErrMsg("There was an error to add your school");
        });
    } else {
      setErrMsg("Please Fill School Name");
    }
  };

  useEffect(() => {
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
        setFetchData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    document.title = "School List - NFC Dashboard";
  }, []);

  return (
    <>
      <div className=" mb-4 container-fluid table-responsive">
        <div className="justify-content-between mb-2 style">
          <h1 className="h3 mb-3 text-gray-800">List of school</h1>
          <Button
            className="shadow-none btn_style1 mb-2"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            Add School
          </Button>
        </div>
        <Table striped bordered hover>
          <thead className="color">
            <tr>
              <th className="tablehead">ID</th>
              <th className="tablehead">School Name</th>
            </tr>
          </thead>
          <tbody>
            {fetchData?.map((item, index) => {
              return (
                <>
                  <tr key={item.school_id}>
                    <td>{item.school_id}</td>
                    <td>{item.name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

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
                Add a New School
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
              <label className="mb-2 modellabel">Add School</label>
              <MDBInput
                placeholder="School Name"
                value={addSchool}
                onChange={(e) => setAddSchool(e.target.value)}
                className=" style-input"
                id="formControlLg"
                type="email"
                size="lg"
                required={true}
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
              <Button className="btn_style shadow-none" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolList;
