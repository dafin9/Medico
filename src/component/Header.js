import React from 'react'
import { Link } from 'react-router-dom'
import Aside from './Aside'
import AccSetting from './AccSetting';
import AllReport from './AllReport';
import ChangePw from './ChangePw';
import DelAcc from './DelAcc';
import ForgotPw from './ForgotPw';
import HomePage from './HomePage';
import LabReport from './LabReport';
import Login from './Login';
import Precription from './Precription';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import Register from './Register';
import ReportUpload from './ReportUpload';
import Upload from './Upload';
import { Routes, Route } from "react-router-dom";
import HomeContent from './HomeContent'

function Header() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* Menu */}
                    <Aside />
                    <div className="layout-page">
                        {/* Navbar */}
                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a
                                    className="nav-item nav-link px-0 me-xl-4"
                                    href="javascript:void(0)"
                                >
                                    <i className="bx bx-menu bx-sm" />
                                </a>
                            </div>
                            <div
                                className="navbar-nav-right d-flex align-items-center"
                                id="navbar-collapse"
                            >
                                {/* Search */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0" />
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none"
                                            placeholder="Search..."
                                            aria-label="Search..."
                                        />
                                    </div>
                                </div>
                                {/* /Search */}
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    {/* Place this tag where you want the button to render. */}
                                    {/* User */}
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a
                                            className="nav-link dropdown-toggle hide-arrow"
                                            href="javascript:void(0);"
                                            data-bs-toggle="dropdown"
                                        >
                                            <div className="avatar avatar-online">
                                                <img
                                                    src="../../img/avatars/1.png"
                                                    alt=""
                                                    className="w-px-40 h-auto rounded-circle"
                                                />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img
                                                                    src="../assets/img/avatars/1.png"
                                                                    alt=""
                                                                    className="w-px-40 h-auto rounded-circle"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-semibold d-block">Name</span>
                                                            <small className="text-muted">User Id</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>{/* <div class="dropdown-divider"></div> */}</li>
                                            <li>
                                                <a className="dropdown-item" href="profile.html">
                                                    <i className="bx bx-user me-2" />
                                                    <span className="align-middle">My Profile</span>
                                                </a>
                                            </li>
                                            {/* <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li> */}
                                            <li>{/* <div class="dropdown-divider"></div> */}</li>
                                            <li>
                                                <a className="dropdown-item" href="login.html">
                                                    <i className="bx bx-power-off me-2" />
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {/*/ User */}
                                </ul>
                            </div>
                        </nav>
                        {/* / Navbar */}
                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            {/* Content */}
                            <Routes>
                                <Route path="/" element={<HomeContent />}></Route>
                                <Route path="/login" element={<Login />}></Route>
                                <Route path="/uploadreport" element={<ReportUpload />}></Route>
                            </Routes>
                            <div className="layout-overlay layout-menu-toggle" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header