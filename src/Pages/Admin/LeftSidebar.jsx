import React from 'react'
import Header from '../Users/Header'
import { Link } from 'react-router-dom'

function LeftSidebar() {
  return (

    <nav className="navbar navbar-vertical navbar-expand-lg margin-90 position-absolute 100vh z-1">
      <div className="collapse navbar-collapse overflow 100vh" id="navbarVerticalCollapse">
        {/* scrollbar removed*/}
        <div className="navbar-vertical-content p-0">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <li className="nav-item">
              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <div className="d-flex align-items-center">
                  <div className="dropdown-indicator-icon"><span className="fas fa-caret-right" /></div><span className="nav-link-text fs-6 p-1"><Link to="/admin">Home</Link></span>
                </div>
              </div>

            </li>
            <li className="nav-item pb-3">
              {/* label*/}
              <hr className="navbar-vertical-line" />
              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a className="nav-link dropdown-indicator label-1" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-e-commerce">
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="nv-e-commerce">
                    <li className="collapsed-nav-item-title d-none">E commerce</li>
                    <li className="nav-item">
                      <a className="nav-link dropdown-indicator"
                        data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-admin">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon"><span className="fas fa-caret-right" /></div><span className="nav-link-text fs-6">Admin</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-admin">
                          <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text"> <Link className='text-decoration-none' to="/addproducts"> Add product</Link> </span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text"> <Link className='text-decoration-none' to="/products " >Products</Link> </span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text"> <Link to="/customers">Customers</Link> </span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Customer details</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Orders</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Order details</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Refund</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item">
              {/* label*/}
              <hr className="navbar-vertical-line" />
              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-e-commerce">
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="nv-e-commerce">
                    <li className="collapsed-nav-item-title d-none">E commerce</li>
                    <li className="nav-item">
                      <a className="nav-link dropdown-indicator" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-admin">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon"><span className="fas fa-caret-right" /></div><span className="nav-link-text fs-6">Documention</span>
                        </div>
                      </a>
                      {/* more inner pages*/}
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-admin">
                          <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Changelog</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Getting started</span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text"></span></div>
                            </a>
                            {/* more inner pages*/}
                          </li>
                          <li className="nav-item">
                            <a className="nav-link"
                              data-bs-toggle aria-expanded="false">
                              <div className="d-flex align-items-center"><span className="nav-link-text">Showcase
                              </span></div>
                            </a>

                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div className="navbar-vertical-footer"><button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span className="uil uil-left-arrow-to-left fs-8" /><span className="uil uil-arrow-from-right fs-8" /><span className="navbar-vertical-footer-text ms-2">Collapsed View</span></button></div>
    </nav>

  )
}

export default LeftSidebar