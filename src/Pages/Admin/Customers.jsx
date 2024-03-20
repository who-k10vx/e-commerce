import React, { useEffect, useState } from 'react'
import Header from '../Users/Header'
import LeftSidebar from './LeftSidebar'
import axios from 'axios'

function Customers() {

  const [loginRecord,setLoginRecord] = useState([])

  const loginData = async()=>{
    try {
      let {data} = await axios.get(`http://localhost:8000/users`)
      setLoginRecord(data)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  const removeitems =async(id)=>{
    console.log(id);  
    try {
     await axios.delete(`http://localhost:8000/users/${id}`)
     let deletedata = loginRecord.filter((val)=>{
      return val.id != id
     });
     setLoginRecord(deletedata)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(()=>{
    loginData();
  },[])



  return (
    
    <div>
    <div>
    </div>
    <div className='position-sticky top-0 z-4 black-line'>
    <Header />
    </div>
    <LeftSidebar/>
   <div className="content margin-300 pt-0">
  <nav className="mb-2" aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item"><a href="#!">Page 1</a></li>
      <li className="breadcrumb-item"><a href="#!">Page 2</a></li>
      <li className="breadcrumb-item active">Default</li>
    </ol>
  </nav>
  <div className="mb-9">
    <div className="row g-2 mb-4">
      <div className="col-auto">
        <h2 className="mb-0">Customers</h2>
      </div>
    </div>
    <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
      <li className="nav-item"><a className="nav-link active" aria-current="page" href="#"><span>All </span><span className="text-body-tertiary fw-semibold">(68817)</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#"><span>New </span><span className="text-body-tertiary fw-semibold">(6)</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#"><span>Abandoned checkouts </span><span className="text-body-tertiary fw-semibold">(17)</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#"><span>Locals </span><span className="text-body-tertiary fw-semibold">(6,810)</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#"><span>Email subscribers </span><span className="text-body-tertiary fw-semibold">(8)</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#"><span>Top reviews </span><span className="text-body-tertiary fw-semibold">(2)</span></a></li>
    </ul>
    <div id="products" data-list="{&quot;valueNames&quot;:[&quot;customer&quot;,&quot;email&quot;,&quot;total-orders&quot;,&quot;total-spent&quot;,&quot;city&quot;,&quot;last-seen&quot;,&quot;last-order&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true}">
      <div className="mb-4">
        <div className="row g-3">
          <div className="col-auto">
            <div className="search-box">
              <form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search customers" aria-label="Search" />
                <span className="fas fa-search search-box-icon" />
              </form>
            </div>
          </div>
          <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
            <div className="btn-group position-static" role="group">
              <div className="btn-group position-static text-nowrap"><button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> Country<span className="fas fa-angle-down ms-2" /></button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">US</a></li>
                  <li><a className="dropdown-item" href="#">Uk</a></li>
                  <li><a className="dropdown-item" href="#">Australia</a></li>
                </ul>
              </div>
              <div className="btn-group position-static text-nowrap"><button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"> VIP<span className="fas fa-angle-down ms-2" /></button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">VIP 1</a></li>
                  <li><a className="dropdown-item" href="#">VIP 2</a></li>
                  <li><a className="dropdown-item" href="#">VIP 3</a></li>
                  <li />
                </ul>
              </div><button className="btn btn-phoenix-secondary px-7 flex-shrink-0">More filters</button>
            </div>
          </div>
          <div className="col-auto"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2" />Export</button><button className="btn btn-primary"><span className="fas fa-plus me-2" />Add customer</button></div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
        <div className="table-responsive scrollbar-overlay mx-n1 px-1">
          <table className="table table-sm fs-9 mb-0">
            <thead>
              <tr>
                <th className="white-space-nowrap fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select="{&quot;body&quot;:&quot;customers-table-body&quot;}" /></div>
                </th>
                <th className="sort align-middle pe-5" scope="col" data-sort="customer" style={{width: '15%'}}>CUSTOMER</th>
                <th className="sort align-middle pe-5" scope="col" data-sort="email" style={{width: '15%'}}>EMAIL</th>
                <th className="sort align-middle pe-5" scope="col" data-sort="email" style={{width: '15%'}}>PASSWORD</th>

                <th className="sort align-middle " scope="col" data-sort="total-orders" style={{width: '15%'}}>ORDERS</th>
                <th className="sort align-middle" scope="col" data-sort="total-spent" style={{width: '15%'}}>TOTAL SPENT</th>
                <th className="sort align-middle" scope="col" data-sort="city" style={{width: '15%'}}>CITY</th>
                <th className="sort align-middle " scope="col" data-sort="last-seen" style={{width: '15%'}}>LAST SEEN</th>
                <th className="sort align-middle  pe-0" scope="col" data-sort="last-order" style={{width: '15%', minWidth: 150}}>LAST ORDER</th>
                <th className="sort align-middle text-center  pe-0" scope="col" data-sort="last-order" style={{width: '15%', minWidth: 150}}>ACTION</th>
              </tr>
            </thead>
            <tbody className="list" id="customers-table-body">
                  {
                    loginRecord.map((val)=>{
                      return(
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                          <div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="{&quot;customer&quot;:{&quot;avatar&quot;:&quot;/team/32.webp&quot;,&quot;name&quot;:&quot;Carry Anna&quot;},&quot;email&quot;:&quot;annac34@gmail.com&quot;,&quot;city&quot;:&quot;Budapest&quot;,&quot;totalOrders&quot;:89,&quot;totalSpent&quot;:23987,&quot;lastSeen&quot;:&quot;34 min ago&quot;,&quot;lastOrder&quot;:&quot;Dec 12, 12:56 PM&quot;}" /></div>
                        </td>
                        <td className="customer align-middle white-space-nowrap pe-5">
                          <a className="d-flex align-items-center text-body-emphasis" href="../../../apps/e-commerce/admin/customer-details.html">
                            <div className="avatar avatar-m"><img className="rounded-circle" src="../../../assets/img/team/32.webp" alt /></div>
                            <p className="mb-0 ms-3 text-body-emphasis fw-bold">{val.name}</p>
                          </a>
                        </td>
                        <td className="email align-middle white-space-nowrap pe-5"><a className="fw-semibold" href="mailto:annac34@gmail.com">{val.email  }</a></td>
                        <td className="email align-middle white-space-nowrap fs-5 pe-5"><a className="fw-semibold" href="mailto:annac34@gmail.com">{val.password}</a></td>
                        <td className="total-orders align-middle white-space-nowrap fw-semibold text-body-highlight">89</td>
                        <td className="total-spent align-middle white-space-nowrap fw-boldps-3 text-body-emphasis">$ 23987</td>
                        <td className="city align-middle white-space-nowrap text-body-highlight">Budapest</td>
                        <td className="last-seen align-middle white-space-nowrap text-body-tertiary ">34 min ago</td>
                        <td className="last-order align-middle white-space-nowrap text-body-tertiary">Dec 12, 12:56 PM</td>
                        <td className="align-middle white-space-nowrap text-end pe-0 ps-5 btn-reveal-trigger">
                              <div className="btn-reveal-trigger position-static">
                                <div className="inset  dropdown-menu-end py-2">
                                  <a className=" text-danger pe-1 pe-0" onClick={()=>removeitems(val.id)}>Remove</a>
                                  <a className=" text-danger p-4 pe-4" onClick={()=>removeitems(val.id)}>Edit</a>
                                </div>
                              </div>
                            </td>
                      </tr>
                      )
                    })
                  }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  )
}

export default Customers