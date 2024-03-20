import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import LeftSidebar from './LeftSidebar'
import Header from '../Users/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Products() {

  const [record, setRecord] = useState([])

  const handleSubmit = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/products`)
      setRecord(data)

    } catch (err) {
      console.log("error");
      return false;
    }

  }

  const removeitems =async(id)=>{
    console.log(id);  
    try {
     await axios.delete(`http://localhost:8000/products/${id}`)
     let deletedata = record.filter((val)=>{
      return val.id != id
     });
     setRecord(deletedata)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    handleSubmit("");
  }, [])

  return (

    <div>
      <div className='position-sticky top-0 z-4 black-line'>
      <Header />
      </div>
      <LeftSidebar />
      <div className="content margin-300  pt-0">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a >Page 1</a></li>
            <li className="breadcrumb-item"><a >Page 2</a></li>
            <li className="breadcrumb-item active">Default</li>
          </ol>
        </nav>
        <div className="mb-9">
          <div className="row g-3 mb-4">
            <div className="col-auto">
              <h2 className="mb-0">Products</h2>
            </div>
          </div>
          <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
            <li className="nav-item"><a className="nav-link active" aria-current="page"><span>All </span><span className="text-body-tertiary fw-semibold">(68817)</span></a></li>
            <li className="nav-item"><a className="nav-link" ><span>Published </span><span className="text-body-tertiary fw-semibold">(70348)</span></a></li>
            <li className="nav-item"><a className="nav-link" ><span>Drafts </span><span className="text-body-tertiary fw-semibold">(17)</span></a></li>
            <li className="nav-item"><a className="nav-link" ><span>On discount </span><span className="text-body-tertiary fw-semibold">(810)</span></a></li>
          </ul>
          <div id="products" className='pe-2' data-list="{&quot;valueNames&quot;:[&quot;product&quot;,&quot;price&quot;,&quot;category&quot;,&quot;tags&quot;,&quot;vendor&quot;,&quot;time&quot;],&quot;page&quot;:10,&quot;pagination&quot;:true}">
            <div className="mb-4">
              <div className="d-flex flex-wrap gap-3">
                <div className="search-box">
                  <form className="position-relative"><input className="form-control search-input search" type="search" placeholder="Search products" aria-label="Search" />
                    <span className="fas fa-search search-box-icon" />
                  </form>
                </div>
                <div className=" overflow-hidden-y">

                </div>
                <div className="ms-xxl-auto"><button className="btn btn-link text-body me-4 px-0"><span className="fa-solid fa-file-export fs-9 me-2" />Export</button><button className="btn btn-primary" id="addBtn"><span className="fas fa-plus me-2" />  <Link to="/addproducts" className='text-white text-decoration-none'> Add product</Link> </button></div>
              </div>
            </div>
            <div className="pro mx-n4 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
              <div className="">
                <table className="table fs-9 mb-0">
                  <thead>
                    <tr>
                      <th className="white-space-nowrap fs-9 align-middle ps-0" style={{ maxWidth: 20, width: 18 }}>
                        <div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-products-select" type="checkbox" data-bulk-select="{&quot;body&quot;:&quot;products-table-body&quot;}" /></div>
                      </th>
                      <th className="sort white-space-nowrap align-middle ps-5" scope="col" style={{ width: 70 }} >IMG</th>
                      <th className="sort white-space-nowrap align-middle ps-5" scope="col" style={{ width: 50 }} data-sort="product">PRODUCT NAME</th>
                      <th className="sort align-middle ps-5" scope="col" data-sort="price" style={{ width: 150 }}>PRICE</th>
                      <th className="sort align-middle ps-5" scope="col" data-sort="category" style={{ width: 150 }}>CATEGORY</th>
                      <th className="sort align-middle ps-5" scope="col" data-sort="category" style={{ width: 150 }}>COLLECTION</th>
                      <th className="sort align-middle ps-5" scope="col" data-sort="tags" style={{ width: 25 }}>TAGS</th>
                      <th className="sort align-middle fs-8 text-center ps-5" scope="col" style={{ width: 125 }} />
                      <th className="sort align-middle ps-5" scope="col" data-sort="vendor" style={{ width: 300 }}>DESCRIPTION</th>
                      <th className="sort align-middle ps-5 pe-4" scope="col" data-sort="time" style={{ width: 50 }}>PUBLISHED ON</th>
                      <th className="sort align-middle ps-5 pe-4 text-center" scope="col" >ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="list" id="products-table-body">
                    {

                      record.map((val) => {
                        return (
                          <tr className="position-static">
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="{&quot;product&quot;:&quot;iPhone 13 pro max-Pacific Blue-128GB storage&quot;,&quot;productImage&quot;:&quot;/products/2.png&quot;,&quot;price&quot;:&quot;$87&quot;,&quot;category&quot;:&quot;Furniture&quot;,&quot;tags&quot;:[&quot;Class&quot;,&quot;Camera&quot;,&quot;Discipline&quot;,&quot;invincible&quot;,&quot;Pro&quot;,&quot;Swag&quot;],&quot;star&quot;:true,&quot;vendor&quot;:&quot;Beatrice Furnitures&quot;,&quot;publishedOn&quot;:&quot;Nov 11, 7:36 PM&quot;}" />
                              </div>
                            </td>
                            <td className="align-middle white-space-nowrap py-0 ps-5"><a className="d-block border border-translucent rounded-2">
                              <img src={val.imageurl} alt width={53} />
                            </a></td>
                            <td className="product align-middle ps-5 text-center"><a className="fw-semibold line-clamp-3 mb-0">{val.tittle}</a></td>
                            <td className="price align-middle  white-space-nowrap fw-bold text-body-tertiary ps-5">{val.saleprice}</td>
                            <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-5 fw-semibold">{val.category}</td>
                            <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-5 fw-semibold">{val.collection}</td>
                            <td className="tags align-middle review pb-2 ps-5" style={{ minWidth: 25 }}><a className="text-decoration-none">
                              <span className="badge badge-tag me-2 mb-2  bg-secondary">{val.tags}</span>
                              </a>  
                            </td>
                            <td className="align-middle review fs-8 text-center ps-5"><span className="fas fa-star text-warning" /></td>
                            <td className="vendor align-middle text-start fw-semibold ps-5"><a>{val.description}</a></td>
                            <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-5">Nov 11, 7:36 PM</td>
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

export default Products