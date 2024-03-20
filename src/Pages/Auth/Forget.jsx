import React from 'react'
import { Link } from 'react-router-dom';

function Forget() {
  return (
<main className="main " id="top">
  <div className="container">
    <div className="row align-items-center justify-content-center flex-center min-vh-100 py-5">
      <div className="col-sm-10 col-md-8 col-lg-5 col-xxl-6">
        <a className="d-flex justify-content-center   text-decoration-none mb-4">
          <div className="d-flex  fw-bolder fs-5 "><img src="../../../assets/img/icons/logo.png" alt="phoenix" width={58} /></div>
        </a>
        <div className="px-xxl-5">
          <div className="text-center mb-6">
            <h4 className="text-1000">Forgot your password?</h4>
            <p className="text-700 mb-5">Enter your email below and we will send <br className="d-sm-none" />you a reset link</p>
            <form className="d-flex align-items-center mb-5"><input className="form-control flex-1" id="email" type="email" placeholder="Email" /><button type='button' className="btn  btn-primary ms-2 d-flex align-items-center"> <Link className='text-white' to="/reset">Send</Link><span className="fas fa-chevron-right ms-2" /></button></form><a className=" fw-semibold" href="#!">Still having problems?</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>

  )
}

export default Forget