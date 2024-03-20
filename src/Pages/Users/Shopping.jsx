import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Shopping() {

    const [record, setRecord] = useState([]);
    const [cate, setCate] = useState([]);
    const [viewcartDetails, setViewcartDetails] = useState([])
    const [singlerecord,setSingleRecord] = useState({});
    console.log(viewcartDetails);

    const view = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            console.log(data);
            setRecord(data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    const viewCatogery = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            console.log(data);
            setCate(data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const viewDetails = async (id) => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products/${id}`)
           setSingleRecord(data)
            //    setViewcartDetails(data)
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    const category = async (cate) => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            let cat = data.filter((val) => {
                return val.category == cate
            })
            setRecord(cat);
            console.log(cat);
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // const AddCart = async(id) => {
    //     try {
    //         let { data } = await axios.get(`http://localhost:8000/products/${id}`)

    //         let cart = await axios.post(`http://localhost:8000/addcart`,{
    //             tittle  : data.tittle,
    //             description : data.description,
    //             category : data.category,
    //             Color : data.Color,
    //             imageurl : data.imageurl,
    //             Brands : data.Brands,
    //             regularprice : data.regularprice,
    //             saleprice  : data.saleprice
    //         })

    //         alert("successfully add cart")

    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }





    useEffect(() => {
        view("");
        viewCatogery("");
        viewDetails("")
    }, [])


    return (
        <div>

            {/* Ouick Add  */}
            <div className="ind offcanvas offcanvas-end m-4 p-3 bottom-0  rounded-3 h-75  mt-auto overwidth" tabIndex={-1} id="quickadd" aria-labelledby="offcanvasRightLabel" style={{ height: 'fit-content!important' }}>
                
                   
                       
                            <>
                                <div>
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="col-12 d-flex align-items-center justify-content-center border-bottom pb-4">
                                            <div className="col-2">
                                                <div className="imge">
                                                    <img src={singlerecord.imageurl} alt="product" className="img-fluid rounded-3" />
                                                </div>
                                            </div>
                                            <div className="col-10 d-flex flex-column ms-3">
                                                <p className="fs-8 text-dark fw-bold">These Pretzels Are Making Me Thirsty T-Shirt</p>
                                                <p className="text-secondary fw-normal pt-2 fs-8 text-start">$45.00</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="box">
                                                <div className="contant text-center mt-4 mb-3">
                                                    <p className="fs-8 text-dark fw-bold">Gender : <span className="text-secondary fs-8 fw-medium">
                                                        MEN'S</span></p>
                                                </div>
                                                <div className="choice d-flex align-items-center justify-content-center  mb-4">
                                                    <button type="button" className="btn btn-outline-dark me-3 rounded-4">Men's</button>
                                                    <button type="button" className="btn btn-outline-secondary rounded-4">Women's</button>
                                                </div>
                                                <div className="contant text-center mb-3">
                                                    <p className="fs-8 text-dark fw-bold">Colour : <span className="text-secondary fs-8 fw-medium">
                                                        Red</span></p>
                                                </div>
                                                <center className='mb-3'>
                                                    <div classname="color-icon d-flex justify-content-center">
                                                        <input type="radio" name="color" id="red" defaultValue="red" />
                                                        <label htmlFor="red"><span className="red rounded-circle" /></label>
                                                        <input type="radio" name="color" id="green" />
                                                        <label htmlFor="green"><span className="green rounded-circle" /></label>
                                                        <input type="radio" name="color" id="yellow" />
                                                        <label htmlFor="yellow"><span className="yellow rounded-circle" /></label>
                                                        <input type="radio" name="color" id="olive" />
                                                        <label htmlFor="olive"><span className="olive rounded-circle" /></label>
                                                        <input type="radio" name="color" id="orange" />
                                                        <label htmlFor="orange"><span className="orange rounded-circle" /></label>
                                                        <input type="radio" name="color" id="teal" />
                                                        <label htmlFor="teal"><span className="teal rounded-circle" /></label>
                                                        <input type="radio" name="color" id="blue" />
                                                        <label htmlFor="blue"><span className="blue rounded-circle" /></label>
                                                        <input type="radio" name="color" id="violet" />
                                                        <label htmlFor="violet"><span className="violet rounded-circle" /></label>
                                                        <input type="radio" name="color" id="purple" />
                                                        <label htmlFor="purple"><span className="purple rounded-circle" /></label>
                                                        <input type="radio" name="color" id="pink" />
                                                        <label htmlFor="pink"><span className="pink rounded-circle" /></label>
                                                    </div>
                                                </center>
                                                <div className="text-center">
                                                    <p className="fs-6 text-secondary">Size: <span className="fs-6 text-dark fw-bold">5</span></p>
                                                </div>
                                                <center>
                                                    <span class="icon ion-tshirt"></span>

                                                    <div className="radio__group">
                                                        <div className="radio__button">
                                                            <input defaultChecked type="radio" id="type1" name="type" defaultValue="small" />
                                                            <label htmlFor="type1"><p>S</p></label>
                                                        </div>
                                                        <div className="radio__button">
                                                            <input disabled type="radio" id="type2" name="type" defaultValue="medium" />
                                                            <label htmlFor="type2"><p>M</p></label>
                                                        </div>
                                                        <div className="radio__button">
                                                            <input type="radio" id="type3" name="type" defaultValue="large" />
                                                            <label htmlFor="type3">
                                                                <p>L</p>
                                                            </label>
                                                        </div>
                                                        <div className="radio__button">
                                                            <input type="radio" id="type4" name="type" defaultValue="extra-large" />
                                                            <label htmlFor="type4"><p>XL</p></label>
                                                        </div>
                                                    </div>
                                                </center>

                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-primary fs-8 fw-semibold py-3 rounded-4 mt-5" type="button">Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        
                    
                




            </div>

            <div className='black-line z-3'>
                <Header />
            </div>
            <main onclick="return hide(0)">
                <section>
                    <div className="container">
                        <div className="row">
                            <h1 className=" text-center display-5 fw-bold  fst-italic" style={{ letterSpacing: '-0.02em', fontWeight: '900!important' }}>CHRISTMAS</h1>
                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor: '#F2F2F2' }}>
                    <div className="container">
                        <div className="row py-1">
                            <div className="py-3 d-flex justify-content-md-center gap-1 gap-lg-2 overf">
                                {
                                    cate.map((val, i) => {
                                        i += 1
                                        if (i > 7) {

                                            return (



                                                <button onClick={() => category(val.category)} type="button" className="btn btn-light bg-white fw-normal rounded-5">{val.category}</button>

                                            )
                                        }
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-lg-5 px-md-3 px-sm-2">
                    <div className="d-flex justify-content-center align-items-end">
                        <button className="btn btn-dark text-center d-lg-none position-fixed z-3" style={{ bottom: '10%' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <svg role="presentation" fill="none" focusable="false" strokeWidth={2} width={20} height={14} className="icon-subdued icon icon-filter" viewBox="0 0 20 14">
                                <path d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z" fill="currentColor" />
                                <path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z" fill="currentColor" />
                                <path d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z" fill="currentColor" />
                                <path d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z" fill="currentColor" />
                                <circle cx={7} cy={3} r={2} stroke="currentColor" />
                                <circle cx={13} cy={11} r={2} stroke="currentColor" />
                            </svg>
                            <p className="d-inline ps-2 fw-medium">Filter and sort</p>
                        </button>
                        <div className="d-flex justify-content-center">
                            <div className="offcanvas offcanvas-start rounded-top-3" style={{ top: '50%!important', left: '50%!important', transform: 'translateX(0%)' }} data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filter &amp; Sort By</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                </div>
                                <div className="offcanvas-body">
                                    <div className="col-12 px-0 ">

                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Style
                                                </p>
                                                <button className=" border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse col-12 pt-3">

                                            </div>
                                        </div>

                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Category
                                                </p>
                                                <button className=" border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse col-12 pt-3">
                                                <div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Tee (1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Hoodie (28)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Jumper (26)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Kids Jumper (3)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Kids T-Shirt (3)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Long Sleeve (27)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Long Sleeve (27)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Pin (1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Colour
                                                </p>
                                                <button className=" border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse col-12 pt-3">
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-danger rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-success rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-warning rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-danger rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-warning rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-success rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Brand
                                                </p>
                                                <button className=" border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse col-12 pt-3">
                                                <div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Tee (1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Hoodie (28)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Jumper (26)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Kids Jumper (3)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Kids T-Shirt (3)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Long Sleeve (27)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Long Sleeve (27)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Pin (1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div >
                            <div className="col-12 d-none ps-2 d-lg-flex justify-content-between">
                                <div className="fw-medium  pt-3 pb-4 border-bottom text-secondary ps-1 col-3">
                                    <svg role="presentation" fill="none" focusable="false" strokeWidth={2} width={20} height={14} className="icon-subdued icon icon-filter" viewBox="0 0 20 14">
                                        <path d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4V2ZM1 4H5V2H1V4Z" fill="currentColor" />
                                        <path d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12V10ZM1 12H11V10H1V12Z" fill="currentColor" />
                                        <path d="M10 2H9V4H10V2ZM19 4C19.5523 4 20 3.55228 20 3C20 2.44772 19.5523 2 19 2V4ZM10 4H19V2H10V4Z" fill="currentColor" />
                                        <path d="M16 10H15V12H16V10ZM19 12C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10V12ZM16 12H19V10H16V12Z" fill="currentColor" />
                                        <circle cx={7} cy={3} r={2} stroke="currentColor" />
                                        <circle cx={13} cy={11} r={2} stroke="currentColor" />
                                    </svg>
                                    <p className="ps-2 d-inline mb-0">
                                        Filters
                                    </p>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-end">
                                    <h6 className="pe-2">Sort by: <span className="fw-medium text-secondary hovbor">Trending</span></h6><button className=" border-0 d-flex justify-content-center align-items-center rounded-circle  " style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            </path>
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="py-2 px-4"><a className="dropdown-item p-0 hovbor" href="#">Trending</a></li>
                                        <li className="py-2 px-4"><a className="dropdown-item p-0 hovbor" href="#">Popular</a></li>
                                        <li className="py-2 px-4"><a className="dropdown-item p-0 hovbor" href="#">Cheapest</a></li>
                                        <li className="py-2 px-4"><a className="dropdown-item p-0 hovbor" href="#">Most Expensive</a></li>
                                        <li className="py-2 px-4"><a className="dropdown-item p-0 hovbor" href="#">What's New?</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between col-12 px-1 pt-lg-0 pt-5">
                                <div className="d-lg-block d-none col-3 pb-5">
                                    <div className="col-12 px-0 position-sticky d-block " style={{ top: 60 }}>
                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Style
                                                </p>
                                                <button className="hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse col-12 pt-3">
                                                <div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Tee (1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Hoodie (28)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Jumper (26)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Kids Jumper (3)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Kids T-Shirt (3)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Long Sleeve (27)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Long Sleeve (27)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Pin (1)</label></div>
                                                    <div className="py-1 d-flex"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary w-100">Crop Jumper(1)</label></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Category
                                                </p>
                                                <button className="hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse col-12 pt-3">
                                                <div>
                                                {
                                    cate.map((val, i) => {
                                        i += 1
                                        if (i > 10) {

                                            return (

                                                <div onClick={() => category(val.category)} className="py-1 "><label className=" fw-medium text-secondary"><input class="rd-on d-inline-block m-2   " type="radio" id="age1" name="age" value="30"/>{val.category}({i})</label></div>


                                                


  


                                            )
                                        }
                                    }
                                    )
                                }
                                               
                                                  
                                                </div>

                                            </div>
                                        </div>
                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Colour
                                                </p>
                                                <button className="hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse col-12 pt-3">
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-danger rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-success rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-warning rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-danger rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-warning rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-success rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                                <div className="d-flex gap-1 gap-lg-2 ">
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-secondary rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-white rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                    <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark1(this)">
                                                        <div className="bg-black rounded-circle border border-1" style={{ width: 25, height: 25 }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-bolder py-3 border-bottom ps-1">
                                            <div className="d-flex justify-content-between col-12">
                                                <p className="mb-0">
                                                    Brand
                                                </p>
                                                <button className=" hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                                        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse col-12 pt-3">
                                                <div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Tee (1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Hoodie (28)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Jumper (26)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Kids Jumper (3)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Kids T-Shirt (3)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Long Sleeve (27)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Long Sleeve (27)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Pin (1)</label></div>
                                                    <div className="py-1"><input type="checkbox" /><label className="ps-2 fw-medium text-secondary">Crop Jumper(1)</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12 d-flex flex-wrap ps-2">

                                    {

                                        record.map((val) => {
                                            return (
                                                <div className="col-lg-4 col-6 col-xxl-3  px-lg-2 pb-lg-5 pb-md-4 px-1 pb-3 ">
                                                    <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                                                        <div className='set position-absolute pink-bg rounded-5 px-2 text-white fw-semibold'>
                                                            <p> save 24%</p>
                                                        </div>
                                                        <div className='like-set position-absolute bg-white rounded-circle py-1 px-2  fw-semibold text-black'>
                                                            <p><i class="fa-regular fa-heart"></i></p>
                                                        </div>
                                                        <img src={val.imageurl} className="img-fluid rounded-3" alt />
                                                        <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{ width: 40, height: 40 }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a>
                                                        <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{ fontSize: 13, backgroundColor: '#8e75f5' }} data-bs-toggle="offcanvas" data-bs-target="#quickadd"
                                                            onClick={() => viewDetails(val.id)}
                                                            aria-controls="offcanvasRight">+ Quick add</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <h6 className="fw-bold pt-4">{val.tittle}</h6>
                                                        <p className="text-secondary mb-2">
                                                            {val.description}
                                                        </p>
                                                        <div className='d-flex justify-content-between'>

                                                            <div className='d-flex'>
                                                                <p className=" fw-semibold mb-2 fs-3">
                                                                    ${val.saleprice}
                                                                </p>
                                                                <p className=" pink-text text-decoration-line-through  mb-2 p-2">
                                                                    ${val.regularprice}
                                                                </p>
                                                            </div>

                                                            <td className="Brands align-middle review " style={{ minWidth: 25 }}><a className="text-decoration-none">
                                                                <span className="badge pink-bg badge-tag mt-2 me-2">{val.Brands}</span>
                                                            </a>
                                                            </td>


                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="text-black fw-semibold">
                                                                {val.category}
                                                            </p>
                                                            <p className="text-secondary">
                                                                {val.Color}
                                                            </p>


                                                        </div>

                                                        <div>

                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-96 mt-5 ">
                    <div className="popular">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <div className="popular-title">
                                        <h3 className=" text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                            RECENTLY VIEWED</h3>
                                    </div>
                                </div>
                                <div className="position-relative hide1">
                                    <div className=" col-12 d-flex  ps-2 " id="scr16" style={{ overflow: 'scroll!important' }}>
                                        <div className="col-lg-3 col-md-6 col-xxl-2 col-sm-7 col-10  px-lg-2  px-1 ">
                                            <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                                                <img src="img/product-2.webp" className="img-fluid rounded-3" alt />
                                                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{ width: 40, height: 40 }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{ fontSize: 13, backgroundColor: '#8e75f5' }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                                                <p className="text-secondary fw-semibold mb-2">
                                                    $45.00
                                                </p>
                                                <div>
                                                    <div className="d-flex gap-1 gap-lg-2  pt-0">
                                                        <button className="rounded-circle p-1 bg-white" style={{ border: '2px solid black' }} onclick="return borderDark(this)">
                                                            <div className="bg-warning rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-danger rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-black rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{ border: 'none' }} onclick="return borderDark(this)">
                                                            <div className="bg-success rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-dark rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{ transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none' }}>
                                        <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
                          (() => {
                                  var scr16 = document.getElementById('scr16');
                                  scr16.scrollLeft -=200;
                          })()
                          ">
                                            <i className="bi bi-arrow-left text-black fw-bold fs-5" />
                                        </button>
                                        <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
                                  (() => {
                                          var scr16 = document.getElementById('scr16');
                                          scr16.scrollLeft +=200;
                                  })()
                              ">
                                            <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-96 mt-5 ">
                    <div className="popular">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mb-5">
                                    <div className="popular-title">
                                        <h3 className=" text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                            RECENTLY VIEWED</h3>
                                    </div>
                                </div>
                                <div className="position-relative hide1">
                                    <div className=" col-12 d-flex  ps-2 " id="scr6" style={{ overflow: 'scroll!important' }}>
                                        <div className="col-lg-3 col-md-6 col-xxl-2 col-sm-7 col-10  px-lg-2  px-1 ">
                                            <div className="col-12 rounded-3 hovbut border  border-1 position-relative">
                                                <img src="img/product-2.webp" className="img-fluid rounded-3" alt />
                                                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{ width: 40, height: 40 }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{ fontSize: 13, backgroundColor: '#8e75f5' }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="fw-bold pt-4">JFC T-Shirt</h6>
                                                <p className="text-secondary fw-semibold mb-2">
                                                    $45.00
                                                </p>
                                                <div>
                                                    <div className="d-flex gap-1 gap-lg-2  pt-0">
                                                        <button className="rounded-circle p-1 bg-white" style={{ border: '2px solid black' }} onclick="return borderDark(this)">
                                                            <div className="bg-warning rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-danger rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-black rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle p-1 bg-white d-none d-lg-block" style={{ border: 'none' }} onclick="return borderDark(this)">
                                                            <div className="bg-success rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                        <button className="rounded-circle bg-white" style={{ border: 'none', padding: '2px!important' }} onclick="return borderDark(this)">
                                                            <div className="bg-dark rounded-circle border border-1" style={{ width: 15, height: 15 }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{ transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none' }}>
                                        <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
                          (() => {
                                  var scr6 = document.getElementById('scr6');
                                  scr6.scrollLeft -=200;
                          })()
                          ">
                                            <i className="bi bi-arrow-left text-black fw-bold fs-5" />
                                        </button>
                                        <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
                                  (() => {
                                          var scr6 = document.getElementById('scr6');
                                          scr6.scrollLeft +=200;
                                  })()
                              ">
                                            <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Shopping