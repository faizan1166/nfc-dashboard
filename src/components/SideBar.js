import React, { useEffect, useState } from "react";
import App from "../App";
import { Link } from "react-router-dom";

function Sidebar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <img
                  src="Images/counted.png"
                  style={{ height: 30, width: 40, objectFit: "contain" }}
                />
              </div>
              <div className="sidebar-brand-text mx-3">NFC Admin</div>
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
           
            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
              id="school-link"
                className="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-school"></i>
                <span>School</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Actions</h6>
                  <Link className="collapse-item" to="/">
                    List of schools
                  </Link>
                </div>
              </div>
            </li>
        

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            {/* <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-building"></i>
                                <span>Assign School </span>
                            </a> */}
            {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div> */}
            {/* </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/assignSchool">
                <i className="fas fa-fw fa-building"></i>
                <span>Assign School</span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-user"></i>
                <span>Profile</span>
              </a>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Actions</h6>
                  <a className="collapse-item" href="#">
                    User Profile
                  </a>
                  <Link className="collapse-item" to="/changepassword">
                    Change Password
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" onClick={() => handleLogout()}>
                <i className="fas fw fa-sign-out-alt"></i>
                <span>Log Out</span>
              </a>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            {/* <div className="sidebar-heading">
                            Addons
                        </div> */}

            {/*   <!-- Sidebar Toggler (Sidebar) --> */}
            {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

            {/*  <!-- Sidebar Message --> */}
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <h3 className="fw-bold color_heading">NFC</h3>
                {/* <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form> */}

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Alerts --> */}

                  {/*  <!-- Nav Item - Messages --> */}

                  <div className="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">{localStorage.getItem("user")}</span> */}
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#logoutModal"
                        onClick={() => handleLogout()}
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}
              <App />
            </div>
            {/*   <!-- End of Main Content -->
                                        <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; NFC 2023</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->
                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
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
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Sidebar;

// import React from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// function SideBar() {
//   return (
//     <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
//     <div style={{ borderRight: "1px solid #dee2e6", background: "white" }}>
//       <nav
//         className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg "
//         id="sidebar"
//       >
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler ms-n2"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#sidebarCollapse"
//             aria-controls="sidebarCollapse"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <a className="navbar-brand d-inline-block py-lg-2 mb-lg-4 px-lg-6 me-0">
//             <img
//               src="/images/logoiph.png"
//               alt="..."
//               style={{ width: "80px", height: "55px" }}
//             />
//           </a>
//           <div class="navbar-user d-lg-none">
//             <div class="dropdown">
//               <a
//                 href="#"
//                 id="sidebarAvatar"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 <div class="avatar-parent-child">
//                   <img
//                     alt="..."
//                     src="/images/profileimg.png"
//                     class="avatar avatar- rounded-circle"
//                   />
//                   <span class="avatar-child avatar-badge bg-success"></span>
//                 </div>
//               </a>
//               <div
//                 class="dropdown-menu dropdown-menu-end"
//                 aria-labelledby="sidebarAvatar"
//               >
//                 <a href="#" class="dropdown-item">
//                   Profile
//                 </a>
//                 <a href="#" class="dropdown-item">
//                   Settings
//                 </a>
//                 <a href="#" class="dropdown-item">
//                   Billing
//                 </a>
//                 <hr class="dropdown-divider" />
//                 <a class="dropdown-item" >
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="collapse navbar-collapse" id="sidebarCollapse">
//             <ul className="navbar-nav">
//               <li class="nav-item">
//                 <a
//                   class="nav-link active"
//                   href="#sidebar-projects2"
//                   data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls="sidebar-projects"
//                   style={{
//                     paddingLeft: "25px",
//                     paddingRight: "25px",
//                     fontSize: "15px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   <i class="bi bi-file-earmark-text"></i>Invoices
//                 </a>
//                 <div class="collapse" id="sidebar-projects2">
//                   <ul class="nav nav-sm flex-column">
//                     <li class="nav-item">
//                       <Link to="/home" className="nav-link">
//                         <Form.Text
//                           style={{
//                             fontSize: "14px",
//                             fontWeight: "400",
//                           }}
//                           className="navlink"
//                         >
//                           All Invoices
//                         </Form.Text>
//                       </Link>
//                     </li>
//                     <li class="nav-item">
//                       <Link to="/create-new-bill" class="nav-link">
//                         <Form.Text
//                           style={{
//                             fontSize: "14px",
//                             fontWeight: "400",
//                           }}
//                           className="navlink"
//                         >
//                           Create New Invoice
//                         </Form.Text>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li class="nav-item">
//                 <Link
//                   to="/template"
//                   class="nav-link active"

//                   // data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls="sidebar-projects1"
//                   style={{
//                     paddingLeft: "25px",
//                     paddingRight: "25px",
//                     fontSize: "15px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   <i class="bi bi-file-earmark-text"></i>
//                   Select Templates
//                 </Link>
//                 {/* <Link to="/template">hello</Link> */}
//               </li>
//               <li className="nav-item">
//                 <a
//                   id="profilebg"
//                   class="nav-link"

//                   // data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls="sidebar-integrations"
//                 >
//                   <i class="bi bi-people"></i> Profile
//                 </a>
//                 <div class="collapse" id="sidebar-integrations">
//                   <ul class="nav nav-sm flex-column">
//                     <li class="nav-item">
//                       <a
//                         href="/pages/projects/overview.html"
//                         class="nav-link"
//                       >
//                         Overview
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         href="/pages/projects/grid-view.html"
//                         class="nav-link"
//                       >
//                         Grid View
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li class="nav-item">
//                 <a
//                   id="profilebg"
//                   class="nav-link "

//                   // data-bs-toggle="collapse"
//                   role="button"
//                   aria-expanded="false"
//                   aria-controls="sidebar-tasks"
//                 >
//                   <i class="bi bi-terminal"></i> Roles
//                 </a>
//                 <div class="collapse" id="sidebar-tasks">
//                   <ul class="nav nav-sm flex-column">
//                     <li class="nav-item">
//                       <a
//                         href="/pages/projects/overview.html"
//                         class="nav-link font-bold"
//                       >
//                         Overview
//                       </a>
//                     </li>
//                     <li class="nav-item">
//                       <a
//                         href="/pages/projects/grid-view.html"
//                         class="nav-link"
//                       >
//                         Grid View
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//             </ul>

//             <div className="mt-auto" />
//             <div className="my-4 px-lg-6 position-relative">
//               <div className="dropup w-full">
//                 <button
//                   className="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center rounded-3"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   style={{ marginBottom: "-27px", height: "60px" }}
//                 >
//                   <span className="me-3">
//                     <img
//                       alt="..."
//                       src="/images/profileimg.png"
//                       className="avatar avatar-sm rounded-circle"
//                     />
//                   </span>

//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//     <div className="flex-lg-1 h-screen overflow-y-lg-auto">
//       <nav
//         className="navbar navbar-light position-lg-sticky top-lg-0 d-none d-lg-block overlap-10 flex-none bg-white border-bottom px-0 py-3"
//         id="topbar"
//       >
//         <div className="container-fluid">
//           <div className="hstack gap-2"></div>
//           <form className="form-inline ms-auto me-4 d-none d-md-flex">
//             <div className="input-group input-group-inline shadow-none">
//               <span className="input-group-text border-0 shadow-none ps-0 pe-3"></span>
//             </div>
//           </form>
//           <div className="navbar-user d-none d-sm-block">
//             <div className="hstack gap-3 ms-4">
//               <div className="dropdown">
//                 <a
//                   href="#"
//                   className="nav-link px-3 text-base text-muted text-opacity-70 text-opacity-100-hover"
//                   id="dropdown-notifications"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <i className="bi bi-bell-fill" />
//                 </a>
//                 <div
//                   className="dropdown-menu dropdown-menu-end px-2"
//                   aria-labelledby="dropdown-notifications"
//                 >
//                   <div className="dropdown-item d-flex align-items-center">
//                     <h6 className="dropdown-header p-0 m-0 font-semibold">
//                       Notifications
//                     </h6>
//                     <a href="#" className="text-sm font-semibold ms-auto">
//                       Clear all
//                     </a>
//                   </div>
//                   <div className="dropdown-item py-3 d-flex">
//                     <div>
//                       <div className="avatar bg-tertiary text-white rounded-circle">
//                         RF
//                       </div>
//                     </div>
//                     <div className="flex-fill ms-3">
//                       <div className="text-sm lg-snug w-64 text-wrap">
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Robert
//                         </a>{" "}
//                         sent a message to{" "}
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Webpixels
//                         </a>
//                       </div>
//                       <span className="text-muted text-xs">
//                         30 mins ago
//                       </span>
//                     </div>
//                   </div>
//                   <div className="dropdown-item py-3 d-flex">
//                     <div>
//                       <img
//                         alt="..."
//                         src="/images/profileimg.png"
//                         className="avatar rounded-circle"
//                         style={{ width: "20px", height: "20px" }}
//                       />
//                     </div>
//                     <div className="flex-fill ms-3">
//                       <div className="text-sm lg-snug w-64 text-wrap">
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Robert
//                         </a>{" "}
//                         sent a message to{" "}
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Webpixels
//                         </a>
//                       </div>
//                       <span className="text-muted text-xs">
//                         30 mins ago
//                       </span>
//                     </div>
//                   </div>
//                   <div className="dropdown-item py-3 d-flex">
//                     <div>
//                       <img
//                         alt="..."
//                         src="/img/people/img-2.jpg"
//                         className="avatar rounded-circle"
//                       />
//                     </div>
//                     <div className="flex-fill ms-3">
//                       <div className="text-sm lg-snug w-64 text-wrap">
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Robert
//                         </a>{" "}
//                         sent a message to{" "}
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Webpixels
//                         </a>
//                       </div>
//                       <span className="text-muted text-xs">
//                         30 mins ago
//                       </span>
//                     </div>
//                   </div>
//                   <div className="dropdown-item py-3 d-flex">
//                     <div>
//                       <div className="avatar bg-success text-white rounded-circle">
//                         KW
//                       </div>
//                     </div>
//                     <div className="flex-fill ms-3">
//                       <div className="text-sm lg-snug w-64 text-wrap">
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Robert
//                         </a>{" "}
//                         sent a message to{" "}
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Webpixels
//                         </a>
//                       </div>
//                       <span className="text-muted text-xs">
//                         30 mins ago
//                       </span>
//                     </div>
//                   </div>
//                   <div className="dropdown-item py-3 d-flex">
//                     <div>
//                       <img
//                         alt="..."
//                         src="/img/people/img-4.jpg"
//                         className="avatar rounded-circle"
//                       />
//                     </div>
//                     <div className="flex-fill ms-3">
//                       <div className="text-sm lg-snug w-64 text-wrap">
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Robert
//                         </a>{" "}
//                         sent a message to{" "}
//                         <a
//                           href="#"
//                           className="font-semibold text-heading text-primary-hover"
//                         >
//                           Webpixels
//                         </a>
//                       </div>
//                       <span className="text-muted text-xs">
//                         30 mins ago
//                       </span>
//                     </div>
//                   </div>
//                   <div className="dropdown-divider" />
//                   <div className="dropdown-item py-2 text-center">
//                     <a
//                       href="#"
//                       className="font-semibold text-muted text-primary-hover"
//                     >
//                       View all
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="dropdown">
//                 <span
//                   className="d-flex align-items-center"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-haspopup="false"
//                   aria-expanded="false"
//                 >
//                   <div>
//                     <div className="avatar avatar-sm bg-warning rounded-circle text-white">
//                       <img alt="..." src="/images/profileimg.png" />
//                     </div>
//                   </div>
//                   <div
//                     className="d-none d-sm-block ms-3"
//                     style={{ textDecoration: "none" }}
//                   >
//                     <span
//                       className="h6"
//                       style={{ color: "black", textDecoration: "none" }}
//                     >

//                     </span>
//                   </div>
//                   <div className="d-none d-md-block ms-md-2">
//                     <i className="bi bi-chevron-down text-muted text-xs" />
//                   </div>
//                 </span>
//                 <div className="dropdown-menu dropdown-menu-end">
//                   <div className="dropdown-header">
//                     <span className="d-block text-sm text-muted mb-1">
//                       Signed in as
//                     </span>
//                     <span className="d-block text-heading font-semibold">
//                       Tahlia Mooney
//                     </span>
//                   </div>
//                   <div className="dropdown-divider" />
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-house me-3" />
//                     Home
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-pencil me-3" />
//                     Edit profile
//                   </a>
//                   <div className="dropdown-divider" />
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-gear me-3" />
//                     Settings{" "}
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-image me-3" />
//                     Media{" "}
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-box-arrow-up me-3" />
//                     Share
//                   </a>
//                   <div className="dropdown-divider" />
//                   <a className="dropdown-item" >
//                     <i className="bi bi-person me-3" />
//                     Log Out
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main
//         className="py-6"
//         style={{ backgroundColor: "#f5f9fc", minHeight: "120vh" }}
//       >
//         <div
//           className="offcanvas offcanvas-end w-full w-lg-1/3"
//           data-bs-scroll="true"
//           data-bs-backdrop="true"
//           tabIndex={-1}
//           id="offcanvasCreate"
//           aria-labelledby="offcanvasCreateLabel"
//         >
//           <div className="offcanvas-header border-bottom py-5 bg-surface-secondary">
//             <h5 className="offcanvas-title" id="offcanvasCreateLabel">
//               Create a new project
//             </h5>
//             <button
//               type="button"
//               className="btn-close text-reset text-xs"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <div className="offcanvas-body vstack gap-5">
//             <div>
//               <label className="form-label">Name</label>{" "}
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Project name"
//               />{" "}
//               <span className="d-block mt-2 text-sm text-muted">
//                 Make it unique.
//               </span>
//             </div>
//             <div>
//               <label className="form-label">Description</label>{" "}
//               <textarea
//                 className="form-control"
//                 placeholder="Project description ..."
//                 rows={2}
//                 defaultValue={""}
//               />{" "}
//               <span className="d-block mt-2 text-sm text-muted">
//                 Make it unique.
//               </span>
//             </div>
//             <hr className="my-0" />
//             <div>
//               <label className="form-label">Select view</label>
//               <div className="hstack gap-3">
//                 <div className="form-item-checkable">
//                   <input
//                     className="form-item-check"
//                     type="radio"
//                     name="project-view"
//                     id="project-view-kanban"
//                     defaultChecked="checked"
//                   />{" "}
//                   <label
//                     className="form-item"
//                     htmlFor="project-view-kanban"
//                   >
//                     <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
//                       <i
//                         className="bi bi-kanban"
//                         style={{ fontSize: "2rem" }}
//                       />
//                     </span>
//                   </label>
//                 </div>
//                 <div className="form-item-checkable">
//                   <input
//                     className="form-item-check"
//                     type="radio"
//                     name="project-view"
//                     id="project-view-list"
//                   />{" "}
//                   <label className="form-item" htmlFor="project-view-list">
//                     <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
//                       <i
//                         className="bi bi-view-list"
//                         style={{ fontSize: "2rem" }}
//                       />
//                     </span>
//                   </label>
//                 </div>
//                 <div className="form-item-checkable">
//                   <input
//                     className="form-item-check"
//                     type="radio"
//                     name="project-view"
//                     id="project-view-table"
//                   />{" "}
//                   <label className="form-item" htmlFor="project-view-table">
//                     <span className="form-item-click d-inline-flex align-items-center justify-content-center form-control w-24 h-24 text-center text-muted">
//                       <i
//                         className="bi bi-table"
//                         style={{ fontSize: "2rem" }}
//                       />
//                     </span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <hr className="my-0" />
//             <div className="vstack gap-4">
//               <div className="d-flex gap-3">
//                 <input
//                   className="form-check-input flex-shrink-0 text-lg"
//                   type="radio"
//                   name="projecy-privacy"
//                   defaultChecked="checked"
//                 />
//                 <div className="pt-1 form-checked-content">
//                   <h6 className="mb-1 lh-relaxed">Private</h6>
//                   <span className="d-block text-muted text-sm">
//                     <i className="bi bi-lock-fill me-1" /> Only you will be
//                     able to see this project
//                   </span>
//                 </div>
//               </div>
//               <div className="d-flex gap-3">
//                 <input
//                   className="form-check-input flex-shrink-0 text-lg"
//                   type="radio"
//                   name="projecy-privacy"
//                 />
//                 <div className="pt-1 form-checked-content">
//                   <h6 className="mb-1 lh-relaxed">Make it public</h6>
//                   <span className="d-block text-muted text-sm">
//                     <i className="bi bi-people-fill me-1" /> Everyone in
//                     this workspace will be able to see this project
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <hr className="my-0" />
//             <div className="row gx-4">
//               <div className="col-md">
//                 <div>
//                   <label className="form-label">Client</label>
//                   <select className="form-select">
//                     <option>Webpixels</option>
//                     <option>Apple</option>
//                     <option>Elrond</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="col-auto align-self-end">
//                 <span className="d-inline-block py-3 font-semibold text-muted">
//                   or
//                 </span>
//               </div>
//               <div className="col-md-auto align-self-end">
//                 <button type="button" className="btn btn-neutral">
//                   <i className="bi bi-plus-lg me-2" />
//                   New client
//                 </button>
//               </div>
//             </div>
//             <div className="row gx-4">
//               <div className="col-md-6">
//                 <div>
//                   <label className="form-label">Start date</label>
//                   <div className="input-group input-group-inline datepicker">
//                     <span className="input-group-text pe-2">
//                       <i className="bi bi-calendar" />{" "}
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Select date"
//                       data-input
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div>
//                   <label className="form-label">Due date</label>
//                   <div className="input-group input-group-inline datepicker">
//                     <span className="input-group-text pe-2">
//                       <i className="bi bi-calendar" />{" "}
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Select date"
//                       data-input
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="modal-footer py-2 bg-surface-secondary">
//             <button
//               type="button"
//               className="btn btn-sm btn-neutral"
//               data-bs-dismiss="offcanvas"
//             >
//               Close
//             </button>{" "}
//             <button type="button" className="btn btn-sm btn-primary">
//               Save
//             </button>
//           </div>
//         </div>
//         <div
//           className="modal fade"
//           id="modalExport"
//           tabIndex={-1}
//           aria-labelledby="modalExport"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content shadow-3">
//               <div className="modal-header">
//                 <div className="icon icon-shape rounded-3 bg-soft-primary text-primary text-lg me-4">
//                   <i className="bi bi-globe" />
//                 </div>
//                 <div>
//                   <h5 className="mb-1">Share to web</h5>
//                   <small className="d-block text-xs text-muted">
//                     Publish and share link with anyone
//                   </small>
//                 </div>
//                 <div className="ms-auto">
//                   <div className="form-check form-switch me-n2">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id="flexSwitchCheckChecked"
//                       defaultChecked="checked"
//                     />{" "}
//                     <label
//                       className="form-check-label"
//                       htmlFor="flexSwitchCheckChecked"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-body">
//                 <div className="d-flex align-items-center mb-5">
//                   <div>
//                     <p className="text-sm">
//                       Anyone with this link{" "}
//                       <span className="font-bold text-heading">
//                         can view
//                       </span>
//                     </p>
//                   </div>
//                   <div className="ms-auto">
//                     <a href="#" className="text-sm font-semibold">
//                       Settings
//                     </a>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="input-group input-group-inline">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="username"
//                       defaultValue="https://webpixels.io/your-amazing-link"
//                     />{" "}
//                     <span className="input-group-text">
//                       <i className="bi bi-clipboard" />
//                     </span>
//                   </div>
//                   <span className="mt-2 valid-feedback">Looks good!</span>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <div className="me-auto">
//                   <a href="#" className="text-sm font-semibold">
//                     <i className="bi bi-clipboard me-2" />
//                     Copy link
//                   </a>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-neutral"
//                   data-bs-dismiss="modal"
//                 >
//                   Close
//                 </button>{" "}
//                 <button type="button" className="btn btn-sm btn-success">
//                   Share file
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </main>
//     </div>
//   </div>
//   )
// }

// export default SideBar
