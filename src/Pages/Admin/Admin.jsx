import React from 'react'
import Header from '../Users/Header'
import LeftSidebar from './LeftSidebar'

function Admin() {
  return (


    <div>
    <div>
    </div>
    <div className='position-sticky top-0 z-4 black-line'>
    <Header />
    </div>
    <LeftSidebar/>
   <div className="content margin-300 pt-0">
   <div className="content">
      <div className="pb-5">
        <div className="row g-4">
          <div className="col-12 col-xxl-6">
            <div className="mb-8">
              <h2 className="mb-2">Ecommerce Dashboard</h2>
              <h5 className="text-body-tertiary fw-semibold">Here’s what’s going on at your business right now</h5>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center"><span className="fa-stack" style={{ minHeight: 46, minWidth: 46 }}><span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-success-light" data-fa-transform="down-4 rotate--10 left-4" /><span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-success" data-fa-transform="up-4 right-3 grow-2" /><span className="fa-stack-1x fa-solid fa-star text-success " data-fa-transform="shrink-2 up-8 right-6" /></span>
                  <div className="ms-3">
                    <h4 className="mb-0">57 new orders</h4>
                    <p className="text-body-secondary fs-9 mb-0">Awating processing</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center"><span className="fa-stack" style={{ minHeight: 46, minWidth: 46 }}><span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-warning-light" data-fa-transform="down-4 rotate--10 left-4" /><span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-warning" data-fa-transform="up-4 right-3 grow-2" /><span className="fa-stack-1x fa-solid fa-pause text-warning " data-fa-transform="shrink-2 up-8 right-6" /></span>
                  <div className="ms-3">
                    <h4 className="mb-0">5 orders</h4>
                    <p className="text-body-secondary fs-9 mb-0">On hold</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center"><span className="fa-stack" style={{ minHeight: 46, minWidth: 46 }}><span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-danger-light" data-fa-transform="down-4 rotate--10 left-4" /><span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-danger" data-fa-transform="up-4 right-3 grow-2" /><span className="fa-stack-1x fa-solid fa-xmark text-danger " data-fa-transform="shrink-2 up-8 right-6" /></span>
                  <div className="ms-3">
                    <h4 className="mb-0">15 products</h4>
                    <p className="text-body-secondary fs-9 mb-0">Out of stock</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-body-secondary mb-6 mt-4" />
            <div className="row flex-between-center mb-4 g-3">
              <div className="col-auto">
                <h3>Total sells</h3>
                <p className="text-body-tertiary lh-sm mb-0">Payment received across all channels</p>
              </div>
              <div className="col-8 col-sm-4"><select className="form-select form-select-sm" id="select-gross-revenue-month">
                <option>Mar 1 - 31, 2022</option>
                <option>April 1 - 30, 2022</option>
                <option>May 1 - 31, 2022</option>
              </select></div>
            </div>
            <div className="echart-total-sales-chart" style={{ minHeight: 320, width: '100%' }} />
          </div>
          <div className="col-12 col-xxl-6">
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-1">Total orders<span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2"><span className="badge-label">-6.8%</span></span>
                        </h5>
                        <h6 className="text-body-tertiary">Last 7 days</h6>
                      </div>
                      <h4>16,247</h4>
                    </div>
                    <div className="d-flex justify-content-center px-4 py-6">
                      <div className="echart-total-orders" style={{ height: 85, width: 115 }} />
                    </div>
                    <div className="mt-2">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Completed</h6>
                        <h6 className="text-body fw-semibold mb-0">52%</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-primary-subtle me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Pending payment</h6>
                        <h6 className="text-body fw-semibold mb-0">48%</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-1">New customers<span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2"> <span className="badge-label">+26.5%</span></span>
                        </h5>
                        <h6 className="text-body-tertiary">Last 7 days</h6>
                      </div>
                      <h4>356</h4>
                    </div>
                    <div className="pb-0 pt-4">
                      <div className="echarts-new-customers" style={{ height: 180, width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-2">Top coupons</h5>
                        <h6 className="text-body-tertiary">Last 7 days</h6>
                      </div>
                    </div>
                    <div className="pb-4 pt-3">
                      <div className="echart-top-coupons" style={{ height: 115, width: '100%' }} />
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Percentage discount</h6>
                        <h6 className="text-body fw-semibold mb-0">72%</h6>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary-lighter me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Fixed card discount</h6>
                        <h6 className="text-body fw-semibold mb-0">18%</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-info-dark me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Fixed product discount</h6>
                        <h6 className="text-body fw-semibold mb-0">10%</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mb-2">Paying vs non paying</h5>
                        <h6 className="text-body-tertiary">Last 7 days</h6>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-3 flex-1">
                      <div className="echarts-paying-customer-chart" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="mt-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Paying customer</h6>
                        <h6 className="text-body fw-semibold mb-0">30%</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-primary-subtle me-2" />
                        <h6 className="text-body fw-semibold flex-1 mb-0">Non-paying customer</h6>
                        <h6 className="text-body fw-semibold mb-0">70%</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 border-y">
        <div data-list="{&quot;valueNames&quot;:[&quot;product&quot;,&quot;customer&quot;,&quot;rating&quot;,&quot;review&quot;,&quot;time&quot;],&quot;page&quot;:6}">
          <div className="row align-items-end justify-content-between pb-5 g-3">
            <div className="col-auto">
              <h3>Latest reviews</h3>
              <p className="text-body-tertiary lh-sm mb-0">Payment received across all channels</p>
            </div>
            <div className="col-12 col-md-auto">
              <div className="row g-2 gy-3">
                <div className="col-auto flex-1">
                  <div className="search-box">
                    <form className="position-relative"><input className="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                      <span className="fas fa-search search-box-icon" />
                    </form>
                  </div>
                </div>
                <div className="col-auto"><button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover me-2" type="button">All products</button><button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h" data-fa-transform="shrink-2" /></button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mx-n1 px-1 scrollbar">
            <table className="table fs-9 mb-0 border-top border-translucent">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 ps-0 align-middle">
                    <div className="form-check mb-0 fs-8"><input className="form-check-input" id="checkbox-bulk-reviews-select" type="checkbox" data-bulk-select="{&quot;body&quot;:&quot;table-latest-review-body&quot;}" /></div>
                  </th>
                  <th className="sort white-space-nowrap align-middle" scope="col" />
                  <th className="sort white-space-nowrap align-middle" scope="col" style={{ minWidth: 360 }} data-sort="product">PRODUCT</th>
                  <th className="sort align-middle" scope="col" data-sort="customer" style={{ minWidth: 200 }}>CUSTOMER</th>
                  <th className="sort align-middle" scope="col" data-sort="rating" style={{ minWidth: 110 }}>RATING</th>
                  <th className="sort align-middle" scope="col" style={{ maxWidth: 350 }} data-sort="review">REVIEW</th>
                  <th className="sort text-start ps-5 align-middle" scope="col" data-sort="status">STATUS</th>
                  <th className="sort text-end align-middle" scope="col" data-sort="time">TIME</th>
                  <th className="sort text-end pe-0 align-middle" scope="col" />
                </tr>
              </thead>
              <tbody className="list" id="table-latest-review-body">
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8"><input className="form-check-input" type="checkbox" data-bulk-select-row="{&quot;product&quot;:&quot;Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)&quot;,&quot;productImage&quot;:&quot;/products/60x60/1.png&quot;,&quot;customer&quot;:{&quot;name&quot;:&quot;Richard Dawkins&quot;,&quot;avatar&quot;:&quot;&quot;},&quot;rating&quot;:5,&quot;review&quot;:&quot;This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.&quot;,&quot;status&quot;:{&quot;title&quot;:&quot;Approved&quot;,&quot;badge&quot;:&quot;success&quot;,&quot;icon&quot;:&quot;check&quot;},&quot;time&quot;:&quot;Just now&quot;}" /></div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0"><a className="d-block rounded-2 border border-translucent" href="apps/e-commerce/landing/product-details.html"><img src="assets/img//products/60x60/1.png" alt width={53} /></a></td>
                  <td className="align-middle product white-space-nowrap"><a className="fw-semibold" href="apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools fo...</a></td>
                  <td className="align-middle customer white-space-nowrap">
                    <a className="d-flex align-items-center text-body" href="apps/e-commerce/landing/profile.html">
                      <div className="avatar avatar-l">
                        <div className="avatar-name rounded-circle"><span>R</span></div>
                      </div>
                      <h6 className="mb-0 ms-3 text-body">Richard Dawkins</h6>
                    </a>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /></td>
                  <td className="align-middle review" style={{ minWidth: 350 }}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
                  </td>
                  <td className="align-middle text-start ps-5 status"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Approved</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">Just now</h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions"><button className="btn btn-sm btn-phoenix-secondary me-1 fs-10"><span className="fas fa-check" /></button><button className="btn btn-sm btn-phoenix-secondary fs-10"><span className="fas fa-trash" /></button></div>
                    </div>
                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                      <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                        <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row align-items-center py-1">
            <div className="pagination d-none" />
            <div className="col d-flex fs-9">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" /><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" /></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less</a>
            </div>
            <div className="col-auto d-flex">
              <button className="btn btn-link px-1 me-1" type="button" title="Previous" data-list-pagination="prev"><span className="fas fa-chevron-left me-2" />Previous</button><button className="btn btn-link px-1 ms-1" type="button" title="Next" data-list-pagination="next">Next<span className="fas fa-chevron-right ms-2" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-6">
        <div className="col-12 col-xl-6">
          <div data-list="{&quot;valueNames&quot;:[&quot;country&quot;,&quot;users&quot;,&quot;transactions&quot;,&quot;revenue&quot;,&quot;conv-rate&quot;],&quot;page&quot;:5}">
            <div className="mb-5 mt-7">
              <h3>Top regions by revenue</h3>
              <p className="text-body-tertiary">Where you generated most of the revenue</p>
            </div>
            <div className="table-responsive scrollbar">
              <table className="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th className="sort border-top border-translucent ps-0 align-middle" scope="col" data-sort="country" style={{ width: '32%' }}>COUNTRY</th>
                    <th className="sort border-top border-translucent align-middle" scope="col" data-sort="users" style={{ width: '17%' }}>USERS</th>
                    <th className="sort border-top border-translucent text-end align-middle" scope="col" data-sort="transactions" style={{ width: '16%' }}>TRANSACTIONS</th>
                    <th className="sort border-top border-translucent text-end align-middle" scope="col" data-sort="revenue" style={{ width: '20%' }}>REVENUE</th>
                    <th className="sort border-top border-translucent text-end pe-0 align-middle" scope="col" data-sort="conv-rate" style={{ width: '17%' }}>CONV. RATE</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td />
                  <td className="align-middle py-4">
                    <h4 className="mb-0 fw-normal">377,620</h4>
                  </td>
                  <td className="align-middle text-end py-4">
                    <h4 className="mb-0 fw-normal">236</h4>
                  </td>
                  <td className="align-middle text-end py-4">
                    <h4 className="mb-0 fw-normal">$15,758</h4>
                  </td>
                  <td className="align-middle text-end py-4 pe-0">
                    <h4 className="mb-0 fw-normal">10.32%</h4>
                  </td>
                </tr>
                </tbody><tbody className="list" id="table-regions-by-revenue">
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{ width: '32%' }}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">1. </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center"><img src="assets/img/country/india.png" alt width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">India</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{ width: '17%' }}>
                      <h6 className="mb-0">92896<span className="text-body-tertiary fw-semibold ms-2">(41.6%)</span></h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{ width: '17%' }}>
                      <h6 className="mb-0">67<span className="text-body-tertiary fw-semibold ms-2">(34.3%)</span></h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{ width: '17%' }}>
                      <h6 className="mb-0">$7560<span className="text-body-tertiary fw-semibold ms-2">(36.9%)</span></h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{ width: '17%' }}>
                      <h6>14.01%</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center py-1">
              <div className="pagination d-none" />
              <div className="col d-flex fs-9">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" />
              </div>
              <div className="col-auto d-flex">
                <button className="btn btn-link px-1 me-1" type="button" title="Previous" data-list-pagination="prev"><span className="fas fa-chevron-left me-2" />Previous</button><button className="btn btn-link px-1 ms-1" type="button" title="Next" data-list-pagination="next">Next<span className="fas fa-chevron-right ms-2" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="mx-n4 mx-lg-n6 ms-xl-0 h-100">
            <div className="h-100 w-100">
              <div className="h-100 bg-body-emphasis" id="map" style={{ minHeight: 300 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-9 border-top">
        <div className="row g-6">
          <div className="col-12 col-xl-6">
            <div className="me-xl-4">
              <div>
                <h3>Projection vs actual</h3>
                <p className="mb-1 text-body-tertiary">Actual earnings vs projected earnings</p>
              </div>
              <div className="echart-projection-actual" style={{ height: 300, width: '100%' }} />
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div>
              <h3>Returning customer rate</h3>
              <p className="mb-1 text-body-tertiary">Rate of customers returning to your shop over time</p>
            </div>
            <div className="echart-returning-customer" style={{ height: 300 }} />
          </div>
        </div>
      </div>
    </div>

</div>


  </div>

  )
}

export default Admin