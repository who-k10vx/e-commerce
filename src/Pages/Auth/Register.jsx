import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if( Pass !="" && Email != ""){
        let { data } = await axios.post(`http://localhost:8000/admin`, {
          name: Name,
          email: Email,
          password: Pass,
        })
        toast.success("Successfully Register")
        setName("");
        setEmail("");
        setPass("");
        navigate(`/`)
      }else{
        navigate(`/register`)
        alert("All details are required")
      }

    } catch (err) {
      console.log("error");
      return false;
    }
  }


  return (
    <div>
      {/* ===============================================*/}
      {/*    Main Content*/}
      {/* ===============================================*/}
      <form className="form" onSubmit={handleSubmit}>
        <main className="main" id="top">
          <div className="container ">
            <div className="row justify-content-center  py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-4 border p-4 shadow">

                <a className="d-flex justify-content-center flex-center text-decoration-none mb-4" href="../../../index.html">
                  <div className="d-flex  justify-content-center fw-bolder fs-5 d-inline-block"><img src="../../../assets/img/icons/logo.png" alt="phoenix" width={58} /></div>
                </a>

                <div className="text-center mb-7">
                  <h3 className="text-1000"> Sign up </h3>
                  <p className="text-700 py-3">Get access to your account</p>
                </div><button className="btn btn-phoenix-secondary w-100 mb-3 border"><span className="fab fa-google text-danger me-2 fs--1" />Sign up with google</button><button className="btn btn-phoenix-secondary w-100 border"><span className="fab fa-facebook text-primary me-2 fs--1" />Sign up with facebook</button>
                <div className="position-relative">
                  <hr className='mt-4' />
                  <div className="text-center fw-semibold ">or use email</div>
                  <hr />
                </div>
                <div className="mb-3 text-start position-relative"><label className="form-label" htmlFor="name">Name</label>
                  <div className="form-icon-container"><input onChange={(e) => setName(e.target.value)} value={Name} className="form-control form-icon-input ps-5 " id="name" type="text" placeholder="Name" /><span className="position-absolute icon-set  fas fa-user text-900 fs--1 form-icon" /></div>
                </div>
                <div className="mb-3 text-start position-relative"><label className="form-label" htmlFor="email">Email address</label>

                  <div className="form-icon-container"><input onChange={(e) => setEmail(e.target.value)} value={Email} className="form-control form-icon-input ps-5 " id="email" type="email" placeholder="name@example.com" /><span className="position-absolute icon-set  fas fa-user text-900 fs--1 form-icon" /></div>
                </div>

                <div className="mb-3 text-start  position-relative"><label className="form-label" htmlFor="password">Password</label>
                  <div className="form-icon-container"><input onChange={(e) => setPass(e.target.value)} value={Pass} className="form-control form-icon-input ps-5" id="password" type="password" placeholder="Password" /><span className="fas fa-key position-absolute icon-set text-900 fs--1 form-icon" /></div>
                </div>
                <div className="row flex-between-center mb-7 justify-content-between my-2">
                  <div className="col-auto">
                    <div className="form-check mb-0"><input className="form-check-input" id="basic-checkbox" type="checkbox" defaultChecked="checked" /><label className="form-check-label mb-0" htmlFor="basic-checkbox">Remember me</label></div>
                  </div>
                  <div className="col-auto"><a className="fs--1 fw-semi-bold p-2"> <Link to="/">Sign in</Link></a></div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Sign up</button>

              </div>
            </div>
          </div>
        </main>
      </form>
    </div>

  )
}

export default Register