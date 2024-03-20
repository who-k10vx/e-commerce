import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import Header from '../Users/Header'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Addproduct() {
  const [Tittle, setTittle] = useState('')
  const [Description, setDescription] = useState('')
  const [Category, setCategory] = useState('')
  const [Color, setColor] = useState('')
  const [Brands, setBrands] = useState('')
  const [Img, setImg,] = useState('')
  const [Imgurl, setImgurl,] = useState('')
  const [Regularprice, setRegularprice] = useState('')
  const [Saleprice, setSaleprice] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (Tittle != "" && Description != "" && Category != "" && Color != "" && Brands != "" && Regularprice != "" && Saleprice != "" && ((Img != "" && Imgurl == "") || (Img == "" && Imgurl != ""))) {

        let { data } = await axios.post(`http://localhost:8000/products`, {
          tittle: Tittle,
          description: Description,
          category: Category,
          Color: Color,
          image: Img,
          imageurl:Imgurl,
          Brands: Brands,
          regularprice: Regularprice,
          saleprice: Saleprice
        })
        setTittle("");
        setDescription("");
        setCategory("");
        setColor("");
        setBrands("");
        setImg("");
        setImgurl("");
        setRegularprice("");
        setSaleprice("");
        navigate(`/Products`)
        toast.success("Successfully Register")

      } else {
        toast.error("Please enter valid details ")
      }

    } catch (err) {
      console.log("error");
      return false;
    }

  }
  return (
    <div>
      <div className='position-sticky top-0 z-4 black-line'>
      <Header />
      </div>
      <LeftSidebar />
      <main className="main margin-300 col-10 p-2" id="top">
        <div className="content p-0">
          <nav className="mb-2" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a>Page 1</a></li>
              <li className="breadcrumb-item"><a>Page 2</a></li>
              <li className="breadcrumb-item active">Default</li>
            </ol>
          </nav>
          <form className="mb-9" >
            <div className="row g-3 flex-between-end mb-5">
              <div className="col-auto">
                <h2 className="mb-2">Add a product</h2>
                <h5 className="text-body-tertiary fw-semibold">Orders placed across your store</h5>
              </div>
              <div className="col-auto"><button className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0" type="button">Discard</button><button className="btn btn-phoenix-primary me-2 mb-2 mb-sm-0" type="button">Save draft</button>
                <button
                  onClick={handleSubmit} className="btn btn-primary mb-2 mb-sm-0" type="button">Publish product
                </button>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-12 col-xl-8">
                <h4 className="mb-3">Product Title</h4><input onChange={(e) => setTittle(e.target.value)} value={Tittle} className="form-control mb-5" type="text" placeholder="Write title here..." />
                <div className="mb-6">
                  <h4 className="mb-3"> Product Description</h4><textarea onChange={(e) => setDescription(e.target.value)} value={Description} className="tinymce w-100 h-40 px-3 py-2" placeholder="Write a description here..." name="content" data-tinymce="{&quot;height&quot;:&quot;15rem&quot;,&quot;placeholder&quot;:&quot;Write a description here...&quot;}" defaultValue={""} />
                </div>
                <h4 className="mb-3">Display images</h4>
                <div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone="data-dropzone">
                  <div className="fallback">
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <input onChange={(e) => setImgurl(e.target.value)} value={Imgurl} className="form-control mb-xl-3" type="text" placeholder="URL" />
                      </div>
                    </div>
                  </div>
                  {/* <h2 className='text-center text-secondary'>OR</h2>
                    <br />
                    <input className='form-control bor' onChange={(e) => setImg(e.target.value)} value={Img}
                      name="file" type="file" multiple="multiple" /> */}
                      </div>

              </div>
              <div className="col-12 col-xl-4">
                <div className="row g-2">
                  <div className="col-12 col-xl-12">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Organize</h4>
                        <div className="row">

                          <div className="col-12 col-sm-6 col-xl-12">
                            <div className="mb-4">
                              <h5 className="mb-2 text-body-highlight">Category</h5><input onChange={(e) => setCategory(e.target.value)} value={Category} className="form-control mb-xl-3" type="text" placeholder="Category" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-12">
                            <div className="mb-4">
                              <h5 className="mb-2 text-body-highlight">Color</h5><input onChange={(e) => setColor(e.target.value)} value={Color} className="form-control mb-xl-3" type="text" placeholder="Color" />
                            </div>
                          </div>  <div className="col-12 col-sm-6 col-xl-12">
                            <div className="mb-4">
                              <h5 className="mb-2 text-body-highlight">Brands</h5><input onChange={(e) => setBrands(e.target.value)} value={Brands} className="form-control mb-xl-3" type="text" placeholder="Brands" />
                            </div>
                          </div>

                        </div>


                        <div className="row">
                          <div className="col-sm-12">
                            <div className="tab-content h-100">
                              <div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
                                <h4 className="mb-3 d-sm-none">Pricing</h4>
                                <div className="row g-3">
                                  <div className="col-12 col-lg-6">
                                    <h5 className="mb-2 text-body-highlight">Regular price</h5><input onChange={(e) => setRegularprice(e.target.value)} value={Regularprice} className="form-control" type="text" placeholder="$$$" />
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <h5 className="mb-2 text-body-highlight">Sale price</h5><input onChange={(e) => setSaleprice(e.target.value)} value={Saleprice} className="form-control" type="text" placeholder="$$$" />
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
                                <div className="d-flex flex-column h-100">
                                  <h5 className="mb-3 text-body-highlight">Add to Stock</h5>
                                  <div className="row g-3 flex-1 mb-4">
                                    <div className="col-sm-7"><input className="form-control" type="number" placeholder="Quantity" /></div>
                                    <div className="col-sm"><button className="btn btn-primary" type="button"><span className="fa-solid fa-check me-1 fs-10" />Confirm</button></div>
                                  </div>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th style={{ width: 200 }} />
                                        <th />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="text-body-highlight fw-bold py-1">Product in stock now:</td>
                                        <td className="text-body-tertiary fw-semibold py-1">$1,090<button className="btn p-0" type="button"><span className="fa-solid fa-rotate text-body ms-1" /></button></td>
                                      </tr>
                                      <tr>
                                        <td className="text-body-highlight fw-bold py-1">Product in transit:</td>
                                        <td className="text-body-tertiary fw-semibold py-1">5000</td>
                                      </tr>
                                      <tr>
                                        <td className="text-body-highlight fw-bold py-1">Last time restocked:</td>
                                        <td className="text-body-tertiary fw-semibold py-1">30th June, 2021</td>
                                      </tr>
                                      <tr>
                                        <td className="text-body-highlight fw-bold py-1">Total stock over lifetime:</td>
                                        <td className="text-body-tertiary fw-semibold py-1">20,000</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
                                <div className="d-flex flex-column h-100">
                                  <h5 className="mb-3 text-body-highlight">Shipping Type</h5>
                                  <div className="flex-1">
                                    <div className="mb-4">
                                      <div className="form-check mb-1"><input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller" /><label className="form-check-label fs-8 text-body" htmlFor="fullfilledBySeller">Fullfilled by Seller</label></div>
                                      <div className="ps-4">
                                        <p className="text-body-secondary fs-9 mb-0">You’ll be responsible for product delivery. <br />Any damage or delay during shipping may cost you a Damage fee.</p>
                                      </div>
                                    </div>
                                    <div className="mb-4">
                                      <div className="form-check mb-1"><input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" defaultChecked="checked" /><label className="form-check-label fs-8 text-body d-flex align-items-center" htmlFor="fullfilledByPhoenix">Fullfilled by Phoenix <span className="badge badge-phoenix badge-phoenix-warning fs-10 ms-2">Recommended</span></label></div>
                                      <div className="ps-4">
                                        <p className="text-body-secondary fs-9 mb-0">Your product, Our responsibility.<br />For a measly fee, we will handle the delivery process for you.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="fs-9 fw-semibold mb-0">See our <a className="fw-bold">Delivery terms and conditions </a>for details.</p>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab">
                                <h5 className="mb-3 text-body-highlight">Global Delivery</h5>
                                <div className="mb-3">
                                  <div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" id="worldwideDelivery" /><label className="form-check-label fs-8 text-body" htmlFor="worldwideDelivery">Worldwide delivery</label></div>
                                  <div className="ps-4">
                                    <p className="fs-9 mb-0 text-body-secondary">Only available with Shipping method: <a >Fullfilled by Phoenix</a></p>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" defaultChecked="checked" id="selectedCountry" /><label className="form-check-label fs-8 text-body" htmlFor="selectedCountry">Selected Countries</label></div>
                                  <div className="ps-4" style={{ maxWidth: 350 }}><select className="form-select ps-4" id="organizerMultiple" data-choices="data-choices" multiple="multiple" data-options="{&quot;removeItemButton&quot;:true,&quot;placeholder&quot;:true}">
                                    <option value>Type Country name</option>
                                    <option>United States of America</option>
                                    <option>United Kingdom</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select></div>
                                </div>
                                <div>
                                  <div className="form-check"><input className="form-check-input" type="radio" name="deliveryRadio" id="localDelivery" /><label className="form-check-label fs-8 text-body" htmlFor="localDelivery">Local delivery</label></div>
                                  <p className="fs-9 ms-4 mb-0 text-body-secondary">Deliver to your country of residence <a >Change profile address </a></p>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab">
                                <h5 className="mb-3 text-body-highlight">Attributes</h5>
                                <div className="form-check"><input className="form-check-input" id="fragileCheck" type="checkbox" /><label className="form-check-label text-body fs-8" htmlFor="fragileCheck">Fragile Product</label></div>
                                <div className="form-check"><input className="form-check-input" id="biodegradableCheck" type="checkbox" /><label className="form-check-label text-body fs-8" htmlFor="biodegradableCheck">Biodegradable</label></div>
                                <div className="mb-3">
                                  <div className="form-check"><input className="form-check-input" id="frozenCheck" type="checkbox" defaultChecked="checked" /><label className="form-check-label text-body fs-8" htmlFor="frozenCheck">Frozen Product</label><input className="form-control" type="text" placeholder="Max. allowed Temperature" style={{ maxWidth: 350 }} /></div>
                                </div>
                                <div className="form-check"><input className="form-check-input" id="productCheck" type="checkbox" defaultChecked="checked" /><label className="form-check-label text-body fs-8" htmlFor="productCheck">Expiry Date of Product</label><input className="form-control inventory-attributes datetimepicker" id="inventory" type="text" style={{ maxWidth: 350 }} placeholder="d/m/y" data-options="{&quot;disableMobile&quot;:true}" /></div>
                              </div>
                              <div className="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab">
                                <h5 className="mb-3 text-body-highlight">Advanced</h5>
                                <div className="row g-3">
                                  <div className="col-12 col-lg-6">
                                    <h5 className="mb-2 text-body-highlight">Product ID Type</h5><select className="form-select" aria-label="form-select-lg example">
                                      <option selected="selected">ISBN</option>
                                      <option value={1}>UPC</option>
                                      <option value={2}>EAN</option>
                                      <option value={3}>JAN</option>
                                    </select>
                                  </div>
                                  <div className="col-12 col-lg-6">
                                    <h5 className="mb-2 text-body-highlight">Product ID</h5><input className="form-control" type="text" placeholder="ISBN Number" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
        <div className="support-chat-container">
          <div className="container-fluid support-chat">
            <div className="card bg-body-emphasis">
              <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
                <h5 className="mb-0 d-flex align-items-center gap-2">Demo widget<span className="fa-solid fa-circle text-success fs-11" /></h5>
                <div className="btn-reveal-trigger"><button className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h text-body" /></button>
                  <div className="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown"><a className="dropdown-item">Request a callback</a><a className="dropdown-item">Search in chat</a><a className="dropdown-item" >Show history</a><a className="dropdown-item">Report to Admin</a><a className="dropdown-item btn-support-chat">Close Support</a></div>
                </div>
              </div>
              <div className="card-body chat p-0">
                <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                  <div className="text-end mt-6">
                    <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                      <p className="mb-0 fw-semibold fs-9">I need help with something</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                    </a>
                    <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                      <p className="mb-0 fw-semibold fs-9">I can’t reorder a product I previously ordered</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                    </a>
                    <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                      <p className="mb-0 fw-semibold fs-9">How do I place an order?</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                    </a>
                    <a className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                      <p className="mb-0 fw-semibold fs-9">My payment method not working</p><span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
                    </a>
                  </div>
                  <div className="text-center mt-auto">
                    <div className="avatar avatar-3xl status-online"><img className="rounded-circle border border-3 border-light-subtle" src="assets/img/team/30.webp" alt /></div>
                    <h5 className="mt-2 mb-3">Eric</h5>
                    <p className="text-center text-body-emphasis mb-0">Ask us anything – we’ll get back to you here or by email within 24 hours.</p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
                <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4"><input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" /><label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatPhotos"><span className="fa-solid fa-image" /></label><input className="d-none" type="file" accept="image/*" id="supportChatPhotos" /><label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatAttachment"> <span className="fa-solid fa-paperclip" /></label><input className="d-none" type="file" id="supportChatAttachment" /></div><button className="btn p-0 border-0 send-btn"><span className="fa-solid fa-paper-plane fs-9" /></button>
              </div>
            </div>
          </div><button className="btn p-0 border border-translucent btn-support-chat"><span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span><span className="fa-solid fa-circle text-success fs-9 ms-2" /><span className="fa-solid fa-chevron-down text-primary fs-7" /></button>
        </div>
      </main>
    </div>
  )
}

export default Addproduct