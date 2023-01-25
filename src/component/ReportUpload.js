import React from 'react'

function LabReport2() {
    return (
        <div>
            <>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        {/* Menu */}

                        {/* / Menu */}
                        {/* Layout container */}
                        <div className="layout-page">
                            {/* Navbar */}

                            {/* / Navbar */}
                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4">
                                        <span className="text-muted fw-light">Upload Documents</span>
                                    </h4>
                                    <div className="col-md-6 col-12">
                                        <div className="card">
                                            <form
                                                id="formAccountSettings"
                                                method="POST"
                                                onsubmit="return false"
                                            >
                                                <h5 className="card-header">Upload Lab Report</h5>
                                                <div className="card-body">
                                                    <div className="mb-3 col-md-6 mt-0">
                                                        <label className="form-label" htmlFor="customFile">
                                                            Upload Document
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="customFile"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        Submit
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
                {/* / Layout page */}
                {/* Overlay */}
                <div className="layout-overlay layout-menu-toggle" />
            </>

        </div>
    )
}

export default LabReport2