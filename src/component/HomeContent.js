import React from 'react'
import { Link } from 'react-router-dom'

function HomeContent() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* Menu */}

                    {/* / Menu */}
                    {/* Layout container */}
                    <div className="layout-page">
                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            {/* Content */}
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
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

                                                        </div>
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
                                                </div>
                                            </div>
                                        </div>
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
                                                        </div>
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
                                                </div>
                                            </div>
                                        </div>
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
                                                    <Link className="footer-link me-4" to="/help">
                                                        Help
                                                    </Link>
                                                    <Link className="footer-link me-4" to="/about">
                                                        About Us
                                                    </Link>
                                                    <Link className="footer-link me-4" to="/contact">
                                                        Contact Us
                                                    </Link>
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

export default HomeContent