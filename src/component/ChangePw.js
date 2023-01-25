import React from 'react'

function ChangePw() {
    return (
        <div>
            <>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        {/* Menu */}
                        <aside
                            id="layout-menu"
                            className="layout-menu menu-vertical menu bg-menu-theme"
                        >
                            <div className="app-brand demo">
                                <a href="index.html" className="app-brand-link">
                                    <span className="app-brand-logo demo">
                                        <svg
                                            width={25}
                                            viewBox="0 0 25 42"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <defs>
                                                <path
                                                    d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                                                    id="path-1"
                                                />
                                                <path
                                                    d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                                                    id="path-3"
                                                />
                                                <path
                                                    d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                                                    id="path-4"
                                                />
                                                <path
                                                    d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                                                    id="path-5"
                                                />
                                            </defs>
                                            <g
                                                id="g-app-brand"
                                                stroke="none"
                                                strokeWidth={1}
                                                fill="none"
                                                fillRule="evenodd"
                                            >
                                                <g
                                                    id="Brand-Logo"
                                                    transform="translate(-27.000000, -15.000000)"
                                                >
                                                    <g id="Icon" transform="translate(27.000000, 15.000000)">
                                                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                                                            <mask id="mask-2" fill="white">
                                                                <use xlinkHref="#path-1" />
                                                            </mask>
                                                            <use fill="#696cff" xlinkHref="#path-1" />
                                                            <g id="Path-3" mask="url(#mask-2)">
                                                                <use fill="#696cff" xlinkHref="#path-3" />
                                                                <use
                                                                    fillOpacity="0.2"
                                                                    fill="#FFFFFF"
                                                                    xlinkHref="#path-3"
                                                                />
                                                            </g>
                                                            <g id="Path-4" mask="url(#mask-2)">
                                                                <use fill="#696cff" xlinkHref="#path-4" />
                                                                <use
                                                                    fillOpacity="0.2"
                                                                    fill="#FFFFFF"
                                                                    xlinkHref="#path-4"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g
                                                            id="Triangle"
                                                            transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                                                        >
                                                            <use fill="#696cff" xlinkHref="#path-5" />
                                                            <use
                                                                fillOpacity="0.2"
                                                                fill="#FFFFFF"
                                                                xlinkHref="#path-5"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="app-brand-text demo menu-text fw-bolder ms-2">
                                        medico
                                    </span>
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                                >
                                    <i className="bx bx-chevron-left bx-sm align-middle" />
                                </a>
                            </div>
                            <div className="menu-inner-shadow" />
                            <ul className="menu-inner py-1">
                                {/* Dashboard */}
                                <li className="menu-item ">
                                    <a href="index.html" className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-home-circle" />
                                        <div data-i18n="Analytics">Home</div>
                                    </a>
                                </li>
                                {/* Layouts */}
                                <li className="menu-item ">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <box-icon name="upload" />
                                        <i className="menu-icon tf-icons bx bx-upload"> </i>
                                        <div data-i18n="Layouts">Upload Report</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="/html/lab_report.html" className="menu-link">
                                                <div data-i18n="Without menu">Lab Report</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/html/prescription.html" className="menu-link">
                                                <div data-i18n="Without navbar">Prescription</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <box-icon type="solid" name="heart" />
                                        <i className="menu-icon tf-icons bx bxs-heart"> </i>
                                        <div data-i18n="Layouts">My Health</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="/html/All_report.html" className="menu-link">
                                                <div data-i18n="Without menu">All</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/html/my_health(lab_report).html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Without menu">Lab Report</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/html/my_health(prescription).html"
                                                className="menu-link"
                                            >
                                                <div data-i18n="Without navbar">Prescription</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <box-icon type="solid" name="virus" />
                                        <i className="menu-icon tf-icons bx bxs-virus"> </i>
                                        <div data-i18n="Layouts">Disease</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="layouts-without-menu.html" className="menu-link">
                                                <div data-i18n="Without menu">Sugar</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="layouts-without-menu.html" className="menu-link">
                                                <div data-i18n="Without menu">Diabities</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="layouts-without-navbar.html" className="menu-link">
                                                <div data-i18n="Without navbar">Blood Pressure</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="layouts-without-navbar.html" className="menu-link">
                                                <div data-i18n="Without navbar">Thyroid</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="layouts-without-navbar.html" className="menu-link">
                                                <div data-i18n="Without navbar">Infection</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="layouts-without-navbar.html" className="menu-link">
                                                <div data-i18n="Without navbar">Other</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                                        target="_blank"
                                        className="menu-link"
                                    />
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                                        target="_blank"
                                        className="menu-link"
                                    />
                                </li>
                            </ul>
                        </aside>
                        {/* / Menu */}
                        {/* Layout container */}
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
                                                        src="../assets/img/avatars/1.png"
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
                                                <li>
                                                    <a className="dropdown-item" href="/html/profile.html">
                                                        <i className="bx bx-user me-2" />
                                                        <span className="align-middle">My Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/html/login.html">
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
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4">
                                        <span className="text-muted fw-light">Change Password</span>
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="nav nav-pills flex-column flex-md-row mb-3">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="Account_setting.html">
                                                        <i className="bx bx-user me-1" /> Account Setting
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="javascript:void(0);">
                                                        <i className="bx bxs-key me-1" /> Change Password
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="Delete_Account.html">
                                                        <i className="bx bx-trash-alt me-1" /> Delete Account
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="col-md-6 col-12">
                                                <div className="card">
                                                    <form
                                                        id="formAccountSettings"
                                                        method="POST"
                                                        onsubmit="return false"
                                                    >
                                                        <h5 className="card-header">Chnage Password</h5>
                                                        <div className="card-body">
                                                            <div className="mb-3 col-md-6 mt-0">
                                                                <label htmlFor="oldpassword" className="form-label">
                                                                    Old Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="oldPassword"
                                                                    name="oldPassword"
                                                                    maxLength={6}
                                                                />
                                                            </div>
                                                            <div className="mb-3 col-md-6 mt-0">
                                                                <label htmlFor="newpassword" className="form-label">
                                                                    New Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="newPassword"
                                                                    name="newPassword"
                                                                    maxLength={6}
                                                                />
                                                            </div>
                                                            <div className="mb-3 col-md-6 mt-0">
                                                                <label
                                                                    htmlFor="confirmpassword"
                                                                    className="form-label"
                                                                >
                                                                    Confirm Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="confirmpassword"
                                                                    name="confirmpassword"
                                                                    maxLength={6}
                                                                />
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-success change-password"
                                                            >
                                                                Change Password
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* / Content */}
                        {/* Footer */}
                        {/* / Footer */}
                        <div className="content-backdrop fade" />
                    </div>
                    {/* Content wrapper */}
                </div>
                {/* / Layout page */}
                {/* Overlay */}
                <div className="layout-overlay layout-menu-toggle" />
            </>

        </div>
    )
}

export default ChangePw