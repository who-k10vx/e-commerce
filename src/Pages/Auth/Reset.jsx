import React from 'react'
import { Link } from 'react-router-dom'


function Reset() {
    return (
        <main className="main" id="top">
            <div className="container">
                <div className="row justify-content-center align-items-center flex-center min-vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-5">
                        <a className="d-flex justify-content-center align-items-center  flex-center text-decoration-none mb-4" href="../../../index.html">
                            <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block"><img src="../../../assets/img/icons/logo.png" alt="phoenix" width={58} /></div>
                        </a>
                        <div className="text-center mb-6">
                            <h4 className="text-1000">Reset new password</h4>
                            <p className="text-700">Type your new password</p>
                            <form className="mt-5"><input className="form-control mb-2" id="password" type="password" placeholder="Type new password" /><input className="form-control mb-4" id="confirmPassword" type="password" placeholder="Cofirm new password" /><button className="btn btn-primary w-100" type="button"> <Link to="/">Reset Now</Link></button></form>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Reset