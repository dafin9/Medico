import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
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
                                    Medico
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
                            <li className="menu-item active">
                                <a href="homepage.html" className="menu-link">
                                    <i className="menu-icon tf-icons bx bx-home-circle" />
                                    <div data-i18n="Analytics">Home</div>
                                </a>
                            </li>
                            {/* Layouts */}
                            <li className="menu-item">
                                <Link to="/uploadreport" className="menu-link menu-toggle">
                                    <box-icon name="upload" />
                                    <i className="menu-icon tf-icons bx bx-upload"> </i>
                                    <div data-i18n="Layouts">Upload Report</div>
                                </Link>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <a href="upload.html" className="menu-link">
                                            <div data-i18n="Without menu">Lab Report</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="prescription.html" className="menu-link">
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
                                        <a href="layouts-without-menu.html" className="menu-link">
                                            <div data-i18n="Without menu">All</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-without-menu.html" className="menu-link">
                                            <div data-i18n="Without menu">Lab Report</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="layouts-without-navbar.html" className="menu-link">
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
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    {/* <div class="col-lg-8 mb-4 order-0">
            <div class="card">
              <div class="d-flex align-items-end row">
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title text-primary">Congratulations John! 🎉</h5>
                    <p class="mb-4">
                      You have done <span class="fw-bold">72%</span> more sales today. Check your new badge in
                      your profile.
                    </p>
                    <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>
                  </div>
                </div>
                <div class="col-sm-5 text-center text-sm-left">
                  <div class="card-body pb-0 px-0 px-md-4">
                    <img
                      src="../assets/img/illustrations/man-with-laptop-light.png"
                      height="140"
                      alt="View Badge User"
                      data-app-dark-img="illustrations/man-with-laptop-dark.png"
                      data-app-light-img="illustrations/man-with-laptop-light.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                                    {/* Total Revenue */}
                                    {/* <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div class="card">
              <div class="row row-bordered g-0">
                <div class="col-md-8">
                  <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                  <div id="totalRevenueChart" class="px-2"></div>
                </div>
                <div class="col-md-4">
                  <div class="card-body">
                    <div class="text-center">
                      <div class="dropdown">
                        <button
                          class="btn btn-sm btn-outline-primary dropdown-toggle"
                          type="button"
                          id="growthReportId"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          2022
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                          <a class="dropdown-item" href="javascript:void(0);">2021</a>
                          <a class="dropdown-item" href="javascript:void(0);">2020</a>
                          <a class="dropdown-item" href="javascript:void(0);">2019</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="growthChart"></div>
                  <div class="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>
                  <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                    <div class="d-flex">
                      <div class="me-2">
                        <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
                      </div>
                      <div class="d-flex flex-column">
                        <small>2022</small>
                        <h6 class="mb-0">$32.5k</h6>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="me-2">
                        <span class="badge bg-label-info p-2"><i class="bx bx-wallet text-info"></i></span>
                      </div>
                      <div class="d-flex flex-column">
                        <small>2021</small>
                        <h6 class="mb-0">$41.2k</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                                    {/*/ Total Revenue */}
                                    <div className="row">
                                        {/* Lab Report Card */}
                                        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <div className="avatar flex-shrink-0">
                                                            <img
                                                                src="../../img/lab_report12.png"
                                                                alt="lab report"
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Lab Reports
                                                    </span>
                                                    <h3 className="card-title mb-2">0</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Lab Report card */}
                                        {/* Prescription Card */}
                                        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <div className="avatar flex-shrink-0">
                                                            <img
                                                                src="../../img/prescription1.png"
                                                                alt="lab report"
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Prescription
                                                    </span>
                                                    <h3 className="card-title mb-2">0</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Prescription Card */}
                                        {/* Total Card */}
                                        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <div className="avatar flex-shrink-0">
                                                            <img
                                                                src="../../img/total1.png"
                                                                alt="lab report"
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">Total</span>
                                                    <h3 className="card-title mb-2">0</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Total Card */}
                                    </div>
                                    <div className="row">
                                        <h5>TIPS FOR GOOD HEALTH</h5>
                                        {/* Tips 1 */}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/water-drop.png" />
                                                        <span className="fw-semibold d-block mb-1 ">
                                                            DRINK WATER <hr className="horizontal-line" />
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                      src="/sneat-1.0.0/favicon.ico"
                      alt="lab report"
                      class="rounded"
                    /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                    <button
                      class="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <a class="dropdown-item" href="javascript:void(0);">View More</a>
                      <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                    </div>
                  </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Drink water! Stay away from cokes and other sugary sodas,
                                                        which can pack as much as 17 teaspoons of sugar per 20oz
                                                        drink! Sugar is a source of empty calories that can use up
                                                        important vitamins and minerals in your body. Drinking
                                                        water can prevent dehydration, a condition that can cause
                                                        unclear thinking, result in mood change, cause your body
                                                        to overheat, and lead to constipation and kidney stones.
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Tips 1(1) */}
                                        {/* Tips 1(2) */}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/check-up.png" />
                                                        <span className="fw-semibold d-block mb-1">
                                                            HAVE REGULAR CHECK-UPS
                                                            <hr className="horizontal-line" />
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                      src="/sneat-1.0.0/favicon.ico"
                      alt="lab report"
                      class="rounded"
                    /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                    <button
                      class="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <a class="dropdown-item" href="javascript:void(0);">View More</a>
                      <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                    </div>
                  </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Regular health checks can identify any early signs of
                                                        health issues.When you have a health check, your doctor
                                                        will talk with you about your medical history, your
                                                        family’s history of disease and your lifestyle, including
                                                        your diet, weight, physical activity, alcohol use and
                                                        whether you smoke.Your doctor may include a general health
                                                        check when you visit for another reason.Your doctor can
                                                        tell you how often you need health checks.
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ Tips 1(2) */}
                                        {/* Transactions */}
                                        {/* <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="card-title d-flex align-items-start justify-content-between">
                  <div class="avatar flex-shrink-0">
                    <img
                      src="/sneat-1.0.0/favicon.ico"
                      alt="lab report"
                      class="rounded"
                    />
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <a class="dropdown-item" href="javascript:void(0);">View More</a>
                      <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                    </div>
                  </div>
                </div>
                <span class="fw-semibold d-block mb-1">Total</span>
                <h3 class="card-title mb-2">0</h3>
                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small>
              </div>
            </div>
          </div> */}
                                        {/* Tips 2(1)*/}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/weight-scale.png" />
                                                        <span className="fw-semibold d-block mb-1">
                                                            MAINTAIN A HEALTHY BODY WEIGHT
                                                            <hr className="horizontal-line" />{" "}
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                      src="/sneat-1.0.0/favicon.ico"
                      alt="lab report"
                      class="rounded"
                    /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                    <button
                      class="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <a class="dropdown-item" href="javascript:void(0);">View More</a>
                      <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                    </div>
                  </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        The right weight for each us depends on factors like our
                                                        gender, height, age, and genes. Being affected by obesity
                                                        and overweight increases the risks of a wide range of
                                                        diseases, including diabetes, heart diseases, and
                                                        cancer.Excess body fat comes from eating more than we
                                                        need. The extra calories can come from any caloric
                                                        nutrient - protein, fat, carbohydrate, or alcohol, but fat
                                                        is the most concentrated source of energy. Physical
                                                        activity helps us spend the energy, and makes us feel
                                                        good.
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*/Tips 2(1)*/}
                                        {/* Tips 2(2)*/}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/zzz.png" />
                                                        <span className="fw-semibold d-block mb-1">
                                                            GET ENOUGH SLEEP
                                                            <hr className="horizontal-line" />
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                      src="/sneat-1.0.0/favicon.ico"
                      alt="lab report"
                      class="rounded"
                    /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                    <button
                      class="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <a class="dropdown-item" href="javascript:void(0);">View More</a>
                      <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                    </div>
                  </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        The importance of getting enough quality sleep cannot be
                                                        overstated. Poor sleep can drive insulin resistance, can
                                                        disrupt your appetite hormones, and reduce your physical
                                                        and mental performance. What’s more, poor sleep is one of
                                                        the strongest individual risk factors for weight gain and
                                                        obesity. People who do not get enough sleep tend to make
                                                        food choices that are higher in fat, sugar, and calories,
                                                        potentially leading to unwanted weight gain.
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
                <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*Tips 3(1) */}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/seasoning.png" />
                                                        <span className="fw-semibold d-block mb-1">
                                                            CONSUME LESS SALT AND SUGAR
                                                            <hr className="horizontal-line" />
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                                  src="/sneat-1.0.0/favicon.ico"
                                  alt="lab report"
                                  class="rounded"
                                /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                                <button
                                  class="btn p-0"
                                  type="button"
                                  id="cardOpt3"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                  <a class="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Filipinos consume twice the recommended amount of sodium,
                                                        putting them at risk of high blood pressure, which in turn
                                                        increases the risk of heart disease and stroke. Most
                                                        people get their sodium through salt. Reduce your salt
                                                        intake to 5g per day, equivalent to about one teaspoon. On
                                                        the other hand, consuming excessive amounts of sugars
                                                        increases the risk of tooth decay and unhealthy weight
                                                        gain.The intake of free sugars should be reduced to less
                                                        than 10% of total energy intake.
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
                            <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*/Tips 3(1)*/}
                                        {/* Tips 3(2)*/}
                                        <div className="col-md-6 col-lg-6 col-xl-6 order-0 mb-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-title d-flex align-items-start justify-content-between">
                                                        <img src="../../img/diet.png" />
                                                        <span className="fw-semibold d-block mb-1">
                                                            EAT A HEALTHY DIET
                                                            <hr className="horizontal-line" />
                                                        </span>
                                                        <div className="avatar flex-shrink-0">
                                                            {/* <img
                    src="/sneat-1.0.0/favicon.ico"
                    alt="lab report"
                    class="rounded"
                  /> */}
                                                        </div>
                                                        {/* <div class="dropdown">
                  <button
                    class="btn p-0"
                    type="button"
                    id="cardOpt3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                    <a class="dropdown-item" href="javascript:void(0);">View More</a>
                    <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                  </div>
                </div> */}
                                                    </div>
                                                    <span className="fw-semibold d-block mb-1">
                                                        Eat a combination of different foods, including fruit,
                                                        vegetables, legumes, nuts and whole grains. Adults should
                                                        eat at least five portions (400g) of fruit and vegetables
                                                        per day. You can improve your intake of fruits and
                                                        vegetables by always including veggies in your meal;
                                                        eating fresh fruit and vegetables as snacks; eating a
                                                        variety of fruits and vegetables; and eating them in
                                                        season. By eating healthy, you will reduce your risk of
                                                        malnutrition and noncommunicable diseases (NCDs).
                                                    </span>
                                                    {/* <h3 class="card-title mb-2">0</h3>
              <small class="text-success fw-semibold"><i class="bx bx-up-arrow-alt"></i>0%</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Tips 3(2)*/}
                                        {/* / Content */}
                                        {/* Footer */}
                                        <footer className="content-footer footer bg-footer-theme">
                                            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                                <div className="mb-2 mb-md-0">
                                                    © made with ❤ by {" "}
                                                    <a
                                                        href="https://themeselection.com"
                                                        target="_blank"
                                                        className="footer-link fw-bolder"
                                                    >
                                                        Medico Team
                                                    </a>
                                                </div>
                                                <div>
                                                    <a
                                                        href="https://themeselection.com/license/"
                                                        className="footer-link me-4"
                                                        target="_blank"
                                                    >
                                                        Help
                                                    </a>
                                                    <a
                                                        href="https://themeselection.com/"
                                                        target="_blank"
                                                        className="footer-link me-4"
                                                    >
                                                        About Us
                                                    </a>
                                                    <a
                                                        href="contactpage.html"
                                                        target="_blank"
                                                        className="footer-link me-4"
                                                    >
                                                        Contact Us
                                                    </a>
                                                    {/* <a
              href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
              target="_blank"
              class="footer-link me-4"
              >Support</a
            > */}
                                                </div>
                                            </div>
                                        </footer>
                                        {/* / Footer */}
                                        <div className="content-backdrop fade" />
                                    </div>
                                    {/* Content wrapper */}
                                </div>
                                {/* / Layout page */}
                            </div>
                            {/* Overlay */}
                            <div className="layout-overlay layout-menu-toggle" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage