import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [cart, setCart] = useState([])
    const [record, setRecord] = useState([])


    const view = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            setRecord(data)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    const viewDetails = async()=>{
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            setRecord(data)
        } catch (error) {
            console.log(error);
            return false
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let record = await axios.post(`http://localhost:8000/users`, {
                name: Name,
                email: Email,
                password: Pass

            })
            console.log(record);
            toast.success("Successfully Register")
            setEmail("");
            setPass("");
            setName("")
        } catch (err) {
            return false;
        }
    }



    // const viewCart = async () => {
    //     try {
    //         let { data } = await axios.get(`http://localhost:8000/addcart`);
    //         setCart(data)
    //     } catch (err) {
    //         console.log(err);
    //         return false;
    //     }
    // }

    // useEffect(() => {
    //     viewCart();
    // }, [])

    return (
        <div>
            {/* Header  */}
            <header className="w-100 left-0 d-block" >
                <div className="top-bar py-2 justify-content-center d-flex">
                    <div className="top-contant d-flex justify-content-center align-items-center carousel slide col-lg-6 col-12 col-md-8" id="carouselExample">
                        <button className="carousel-control-next z-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <i className="bi bi-chevron-right" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner text-center">
                            <p className="carousel-item active fs-6 fw-bold px-5 text-white">Free shipping for orders over $80 😎
                            </p>
                            <p className="carousel-item fs-7 fw-bold px-5 text-white">⭐️⭐️⭐️⭐️⭐️ Over 200,000 happy customers</p>
                            <p className="carousel-item fs-7 fw-bold px-5 text-white">60-day free returns</p>
                            <p className="carousel-item fs-7 fw-bold px-5 text-white">Made-to-order in Australia 🇦🇺</p>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <i className="bi bi-chevron-left" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                    </div>
                </div>
                <div className="headerpx-lg-5  z-2 px-md-3 px-sm-2 position-absolute w-100" style={{ top: '70px!important', zIndex: '599!important' }} id="headColor">
                    <div className="col-12 d-flex align-items-center position-sticky top-0">
                        <div className="d-lg-none col-1 d-flex px-2 pt-1 justify-content-center align-items-center">
                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i className="bi bi-list fs-5 fw-bold text-white" />
                            </a>
                            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel" />
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                </div>
                                <div className="offcanvas-body d-flex flex-wrap">
                                    <ul className="col-12">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                ADULTS
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                KIDS
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                ACCESSORIES
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                COLLABS
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                THEMES
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                WHAT'S NEW?
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                ON SALE
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <a href="#" style={{ fontWeight: 800 }} className="fs-5 fst-italic px-1 py-1">
                                                CUSTOM
                                            </a>
                                            <i className="bi bi-chevron-right " />
                                        </li>
                                    </ul>
                                    <div className="footer-laset-icon d-flex col-12">
                                        <a href="#" className="nav-link me-3"><i className="bi bi-facebook fs-4" /></a>
                                        <a href="#" className="nav-link me-3"><i className="bi bi-instagram fs-4" /></a>
                                        <a href="#" className="nav-link me-3"><i className="bi bi-tiktok fs-4" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-lg-2 col-md-3">
                            <a className="navbar-brand" href="#"><img src="img/logoW.avif" alt className="img-fluid fl w-75" id="logoImg" /></a>
                        </div>
                        <nav className="col-8 col-xl-7 py-4 d-none d-lg-block">
                            <ul className="d-flex gap-xxl-4 gap-xl-3 gap-lg-2">
                                <li>
                                    <a className="fw-semibold fs-6 text-white" onclick="show(1)">
                                        Threads
                                        <i className="bi bi-chevron-down ps-1 fs-7  fw-bold text-white" />
                                    </a>
                                    <div id="mdrop1" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{ zIndex: 100, display: 'none' }}>
                                        <div className="container">
                                            <div className="row">
                                                <ul className="col-12 d-flex py-5 justify-content-center">
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>JUMPERS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>KIDS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="fw-semibold fs-6  mdrop text-white" onclick="show(2)">
                                        Themes
                                        <i className="bi bi-chevron-down ps-1 fs-7  fw-bold text-white" />
                                    </a>
                                    <div id="mdrop2" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{ zIndex: 100, display: 'none' }}>
                                        <div className="container">
                                            <div className="row">
                                                <ul className="col-12 d-flex py-5 justify-content-center">
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>JUMPERS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>KIDS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="fw-semibold fs-6 mdrop text-white" onclick="show(3)">
                                        Accessories
                                        <i className="bi bi-chevron-down ps-1 fs-7  fw-bold text-white" />
                                    </a>
                                    <div id="mdrop3" className=" border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{ zIndex: 100, display: 'none' }}>
                                        <div className="container">
                                            <div className="row">
                                                <ul className="col-12 d-flex py-5 justify-content-center">
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>JUMPERS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>KIDS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2 pe-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                    <li className="col-2 ps-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="fw-semibold fs-6  mdrop text-white" onclick="show(4)">
                                        Collabs
                                        <i className="bi bi-chevron-down ps-1 fs-7  fw-bold text-white" />
                                    </a>
                                    <div id="mdrop4" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{ zIndex: 100, display: 'none' }}>
                                        <div className="container">
                                            <div className="row">
                                                <ul className="col-12 d-flex py-5 justify-content-center">
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>JUMPERS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>KIDS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="fw-semibold fs-6  mdrop text-white" onclick="show(5)">
                                        What's New?
                                        <i className="bi bi-chevron-down ps-1 fs-7  fw-bold text-white" />
                                    </a>
                                    <div id="mdrop5" className="  border-top col-12 position-absolute start-0 mt-4 bg-white border-bottom dropp" style={{ zIndex: 100, display: 'none' }}>
                                        <div className="container">
                                            <div className="row">
                                                <ul className="col-12 d-flex py-5 justify-content-center">
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>SHIRTS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                            <li className="text-secondary fs-8 py-2">New Arrivals</li>
                                                            <li className="text-secondary fs-8 py-2">Popular Now</li>
                                                            <li className="text-secondary fs-8 py-2">Shop All Shirts</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>JUMPERS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Tanks</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2">
                                                        <h4 className="fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>KIDS
                                                        </h4>
                                                        <ul>
                                                            <li className="text-secondary fs-8 py-2">Classic Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Long Sleeves</li>
                                                            <li className="text-secondary fs-8 py-2">Stonewash Tees</li>
                                                            <li className="text-secondary fs-8 py-2">Crop Tees</li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-2 pe-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                    <li className="col-2 ps-2">
                                                        <img src="img/mega-menu-1.webp" alt="..." className="img-fluid" />
                                                        <h5 className="mt-3  text-center fw-bold">Front and Back</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="fw-semibold fs-6  text-white">
                                        Custom
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="icons col-6 col-md-8 col-lg-2 col-xl-3">
                            <div className="header-part-3 d-flex text-white align-items-center justify-content-end text-black">
                                {/* austraila accordian  */}
                                <p className="me-4 text-white d-xl-block d-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRigh" aria-controls="offcanvasRight fs-7" style={{ cursor: 'pointer', fontWeight: '600!important' }}><i className="bi bi-globe-asia-australia me-2 text-white" />AUD $</p>
                                {/* second search  */}
                                <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#searchcanva" aria-controls="offcanvasRight" style={{ cursor: 'pointer', fontWeight: '900!important' }}><i className="bi bi-search  fs-5 fw-bold text-white" /></a>
                                <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#user-canva" aria-controls="offcanvasRight" style={{ fontWeight: '900!important' }}> <i className="bi bi-person fs-5 fw-bold text-white" /></a>
                                <a href="#" className="me-4 text-black nav-link" data-bs-toggle="offcanvas" data-bs-target="#add-to-cart" aria-controls="offcanvasRight" style={{ fontWeight: '900!important' }}><i className="bi bi-bag  fs-5 fw-bold text-white" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* POPUP  */}
            <div>
                {/* australiya popup  */}
                <div className="offcanvas offcanvas-end rounded-3 m-3 p-3 overwidth" tabIndex={-1} id="offcanvasRigh" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold fst-italic" id="offcanvasRightLabel">SELECT YOUR REGION</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12">
                            <h6 className="fw-semibold">Asia-Pacific</h6>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h6 className="mt-3 pb-2 fw-semibold">North America</h6>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h6 className="mt-3 pb-2 fw-semibold">Europe &amp; United Kingdom</h6>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2   text-black" />Japan</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                        <li className="mb-2"><a href="#" className="nav-link fs-8 pb-1"><i className="bi bi-globe-asia-australia me-2  text-black" />Australia</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* search popup  */}
                <div className="offcanvas offcanvas-end rounded-3  m-3 pt-3 px-2 overwidth" tabIndex={-1} id="searchcanva" aria-labelledby="offcanvasRightLabel ">
                    <div className="offcanvas-header col-11">
                        <h5 className="offcanvas-title col-12" id="offcanvasRightLabel">
                            <input type="text" className="form-control search border-0 col-12 fw-semibold border-1 text-secondary border-bottom border-black rounded-0 fs-5 ps-0 pb-2" id="validationCustom03" placeholder="Search..." required />
                            <div className="invalid-feedback">
                            </div></h5>
                        <button type="button" className="btn-close col-1" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12">
                            <ul className="nav nav-pills mb-2  col-12 " id="pills-tab" role="tablist">
                                <li className="nav-item px-1  " role="presentation">
                                    <button className="bg-white fs-5 border-0 fw-semibold fst-italic active" id="pills-home-tab1" data-bs-toggle="pill" style={{ fontWeight: '900!important', letterSpacing: '-0.02rem' }} data-bs-target="#pills-home1" role="tab" aria-controls="pills-home1" aria-selected="true">PRODUCTS</button>
                                </li>
                                <li className="nav-item px-1  " role="presentation">
                                    <button className="bg-white fs-5 border-0 fw-semibold text-secondary opacity-50 fst-italic" id="pills-profile-tab1" data-bs-toggle="pill" style={{ fontWeight: '900!important', letterSpacing: '-0.02rem' }} data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile1" aria-selected="false">SUGGESTIONS</button>
                                </li>
                                <li className="nav-item px-1 " role="presentation">
                                    <button className="bg-white fs-5 border-0 text-secondary opacity-50 fw-semibold fst-italic" id="pills-contact-tab1" data-bs-toggle="pill" style={{ fontWeight: '900!important', letterSpacing: '-0.02rem' }} data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1" aria-selected="false">COLLECTIONS</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1" tabIndex={0}>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-1.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">$45.00</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-2.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">$45.00</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-4.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">$45.00</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-2.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">$45.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade mb-2" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1" tabIndex={0}>
                                    <ul>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                cat t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                dont take to strangers
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                vintage shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                cat t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                sonic the shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                cat t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                dont take to strangers
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                cat t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                shirt dont take to strangers
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                cat t shirt
                                            </a>
                                        </li>
                                        <li className="py-2 px-2">
                                            <a href="#" className="fs-6 fw-semibold" style={{ color: 'black!important' }}>
                                                shirt
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1" tabIndex={0}>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-1.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">123 products</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-2.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">13 products</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-4.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">123 products</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center px-3 py-3">
                                        <div className="col-2">
                                            <div className="imge">
                                                <img src="img/product-2.webp" alt="product" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-10 d-flex flex-column ms-3">
                                            <p className="fs-8 text-dark fw-bold hovbor fit-width">These Pretzels Are Making Me Thirsty
                                                T-Shirt</p>
                                            <p className="text-secondary fw-normal pt-2 fs-8 text-start">12 products</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* user canva  */}
                <div className="offcanvas offcanvas-start m-3 rounded-4 overwidth2" tabIndex={-1} id="user-canva" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bolder" id="offcanvasRightLabel">Welcome</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="     offcanvas-body d-flex justify-content-between flex-column">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                <div className="user-canva container px-0" id="getCode1">
                                    <h4 className="fw-bold"> Manage addresses and contact information
                                    </h4>
                                    <form className="form" onSubmit={handleSubmit}>
                                        <input onChange={(e) => setName(e.target.value)} value={Name} type="text" className="py-2 px-2 m-0 my-1" placeholder="Name" size={22} />
                                        <input onChange={(e) => setEmail(e.target.value)} value={Email} type="email" className="py-2 px-2 m-0 my-1" placeholder="Email" size={22} />
                                        <input onChange={(e) => setPass(e.target.value)} value={Pass} type="text" className="py-2 px-2 m-0 my-1" placeholder="Password" size={22} />
                                        <input id="next" data-bs-dismiss="offcanvas" type="Submit" defaultValue="Register" className="fw-semibold w-100 rounded-2 ms-0" onclick="return getCode(1)" />
                                    </form>
                                    <p className="text-center">OR</p>
                                    <button className="button w-100 ">
                                        <img src="https://img.icons8.com/color/48/undefined/google-logo.png" alt="google logo" className="img" />
                                        <p>SIGN IN WITH GOOGLE</p>
                                    </button>
                                </div>
                                <div className="header-part d-flex mb-2 mt-3 border-top  pt-5">
                                    <h5>Recently viewed</h5><i className="bi bi-arrow-right-circle-fill ms-3 fs-4" />
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="col-3 me-1">
                                        <div className="img position-relative">
                                            <img src="img/product-2.webp" alt="product" className="img-fluid rounded-3" />
                                            <button className="position-absolute text-white rounded-circle border-0 pt-1 fw-dark" style={{ bottom: '5%', right: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onclick="return favshow()"><i className="bi bi-heart" /></button>
                                        </div>
                                    </div>
                                    <div className="col-3 me-1">
                                        <div className="img position-relative">
                                            <img src="img/product-2.webp" alt="product" className="img-fluid rounded-3" />
                                            <button className="position-absolute text-white rounded-circle border-0 pt-1 fw-dark" style={{ bottom: '5%', right: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onclick="return favshow()"><i className="bi bi-heart" /></button>
                                        </div>
                                    </div>
                                    <div className="col-3 me-1">
                                        <div className="img position-relative">
                                            <img src="img/product-2.webp" alt="product" className="img-fluid rounded-3" />
                                            <button className="position-absolute text-white rounded-circle border-0 pt-1 fw-dark" style={{ bottom: '5%', right: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onclick="return favshow()"><i className="bi bi-heart" /></button>
                                        </div>
                                    </div>
                                    <div className="col-3 me-1">
                                        <div className="img position-relative">
                                            <img src="img/product-2.webp" alt="product" className="img-fluid rounded-3" />
                                            <button className="position-absolute text-white rounded-circle border-0 pt-1 fw-dark" style={{ bottom: '5%', right: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onclick="return favshow()"><i className="bi bi-heart" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-part d-flex mt-3 mb-2 pt-3">
                                    <h5>Saved frome cart</h5><i className="bi bi-arrow-right-circle-fill ms-3 fs-4" />
                                </div>
                                <div className="col-12 d-flex mb-2 border-bottom pb-4">
                                    <div className="col-3 me-1">
                                        <div className="img position-relative">
                                            <img src="img/product-2.webp" alt="product" className="img-fluid rounded-3" />
                                            <button className="position-absolute text-white rounded-circle border-0 pt-1 fw-dark" style={{ bottom: '5%', right: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onclick="return favshow()"><i className="bi bi-heart" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade mb-2 border-bottom" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                <div className="user-canva container px-0" id="getCode2">
                                    <h4 className="fw-bold"> Manage addresses and contact information
                                    </h4>
                                    <form className="form" onSubmit={handleSubmit}>
                                        <input onChange={(e) => setEmail(e.target.value)} value={Email} type="email" className="py-2 px-2 m-0 my-1" placeholder="Email" size={22} />
                                        <input onChange={(e) => setPass(e.target.value)} value={Pass} type="text" className="py-2 px-2 m-0 my-1" placeholder="Password" size={22} />
                                        <input id="next" data-bs-dismiss="offcanvas" type="Submit" defaultValue="Register" className="fw-semibold w-100 rounded-2 ms-0" onclick="return getCode(1)" />
                                    </form>
                                    <p className="text-center">OR</p>
                                    <button className="button w-100 ">
                                        <img src="https://img.icons8.com/color/48/undefined/google-logo.png" alt="google logo" className="img" />
                                        <p>SIGN IN WITH GOOGLE</p>
                                    </button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                <div className="user-canva container px-0" id="getCode3">
                                    <h4 className="fw-bold"> Manage addresses and contact information
                                    </h4>
                                    <form className="form">
                                        <input type="text" className="py-2 px-2 m-0" placeholder="Email" size={22} />
                                        <input id="next" type="button" defaultValue="GET LOGIN CODE" className="fw-semibold w-100 rounded-2 ms-0" onclick="return getCode(3)" />
                                    </form>
                                    <p className="text-center">OR</p>
                                    <button className="button w-100 ">
                                        <img src="https://img.icons8.com/color/48/undefined/google-logo.png" alt="google logo" className="img" />
                                        <p>SIGN IN WITH GOOGLE</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-block px-3 border-top col-12">
                        <ul className="nav nav-pills mb-2 pt-0 col-12 " id="pills-tab" role="tablist">
                            <li className="nav-item hovbortop py-2 col-4 text-center" role="presentation">
                                <button className="bg-white border-0 fs-6 fw-semibold active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sign up
                                </button>
                            </li>
                            <li className="nav-item hovbortop py-2 col-4 text-center" role="presentation">
                                <button className="bg-white border-0 fs-6 fw-semibold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sign in</button>
                            </li>
                            <li className="nav-item hovbortop py-2 col-4 text-center" role="presentation">
                                <button className="bg-white border-0 fs-6 fw-semibold" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Profile</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* add-to-cart  */}
                <div className="offcanvas offcanvas-end m-4 rounded-3 p-3 w-35 Z-3" tabIndex={-1} id="add-to-cart" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold fst-italic" id="offcanvasRightLabel">CART</h5>
                        <div className="circule" style={{ width: 25, height: 25 }} />
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <p className="fs-8 text-dark mb-2">Spend <a href="#" className="text-primary">$35.00</a> more and get free shipping!
                        </p>
                        <div className="progress m-1" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: '50%' }} />
                        </div>


                        {/* {
                            cart.map((val) => {
                                return (
                                    <div className="col-12 mt-4 d-flex">
                                        <div className="col-8">
                                            <div className="card mb-3 border-0">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-4 col-4">
                                                        <img src={val.imageurl} className="img-fluid rounded-2" alt="..." />
                                                    </div>
                                                    <div className="col-md-8 col-9">
                                                        <div className="card-body">
                                                            <h5 className="card-title vinteg fs-8 fw-bold">{val.tittle}</h5>
                                                            <p className="card-text fw-medium text-secondary">${val.saleprice}</p>
                                                            <p className="card-text fs-7"><small className="text-body-secondary">Men's / Black /
                                                                S</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-end align-items-center flex-wrap">
                                            <div>
                                                <div className="squre border rounded-3 border-1  d-flex align-items-center justify-content-center bg-light border-dark" style={{ width: 50, height: 40 }}>1
                                                </div>
                                                <a href="#" className="col-12 fs-7 text-body-secondary pt-2">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } */}

<div className="col-12 mt-4 d-flex">
                                        <div className="col-8">
                                            <div className="card mb-3 border-0">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-4 col-4">
                                                        <img src="imageurl" className="img-fluid rounded-2" alt="..." />
                                                    </div>
                                                    <div className="col-md-8 col-9">
                                                        <div className="card-body">
                                                            <h5 className="card-title vinteg fs-8 fw-bold">tittle</h5>
                                                            <p className="card-text fw-medium text-secondary">$saleprice</p>
                                                            <p className="card-text fs-7"><small className="text-body-secondary">Men's / Black /
                                                                S</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex justify-content-end align-items-center flex-wrap">
                                            <div>
                                                <div className="squre border rounded-3 border-1  d-flex align-items-center justify-content-center bg-light border-dark" style={{ width: 50, height: 40 }}>1
                                                </div>
                                                <a href="#" className="col-12 fs-7 text-body-secondary pt-2">Remove</a>
                                            </div>
                                        </div>
                                    </div>





                        <div className="col-12 mb-5 ">
                            <div className="col-12 d-flex justify-content-end  py-1 top-50 show1">
                                <div>
                                    <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
                  (() => {
                          var scr10 = document.getElementById('scr10');
                          scr10.scrollLeft -=400;
                  })()
                  ">
                                        <i className="bi bi-arrow-left text-black fw-bold fs-6" />
                                    </button>
                                    <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
                          (() => {
                                  var scr10 = document.getElementById('scr10');
                                  scr10.scrollLeft +=400;
                          })()
                      ">
                                        <i className="bi bi-arrow-right text-black fw-bold fs-6" /></button>
                                </div>
                            </div>
                            <div className="position-relative hide1">
                                <div className=" col-12 d-flex  ps-2 gap-1" id="scr10" style={{ overflow: 'scroll!important' }}>
                                    <div className="col-12">
                                        <div className="card mb-3 border-1 bg-light  ">
                                            <div className="row g-0 p-4 align-items-center">
                                                <div className=" col-3 ">
                                                    <img src="img/product-1.png" className="img-fluid rounded-3" alt="..." />
                                                </div>
                                                <div className="col-lg-6 col-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold fs-8">Vintage Hannibal T-Shirt</h5>
                                                        <p className="card-text fs-7">$45.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 pt-3 d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary rounded-4 pe-lg-3 fs-8"> +
                                                        Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card mb-3 border-1 bg-light  ">
                                            <div className="row g-0 p-4 align-items-center">
                                                <div className=" col-3 ">
                                                    <img src="img/product-1.png" className="img-fluid rounded-3" alt="..." />
                                                </div>
                                                <div className="col-lg-6 col-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold fs-8">Vintage Hannibal T-Shirt</h5>
                                                        <p className="card-text fs-7">$45.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 pt-3 d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary rounded-4 pe-lg-3 fs-8"> +
                                                        Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card mb-3 border-1 bg-light  ">
                                            <div className="row g-0 p-4 align-items-center">

                                                {

                                                }
                                                <div className=" col-3 ">
                                                    <img src="img/product-1.png" className="img-fluid rounded-3" alt="..." />
                                                </div>
                                                <div className="col-lg-6 col-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold fs-8">Vintage Hannibal T-Shirt</h5>
                                                        <p className="card-text fs-7">$45.00</p>
                                                    </div>
                                                </div>



                                                <div className="col-lg-3 col-12 pt-3 d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary rounded-4 pe-lg-3 fs-8"> +
                                                        Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card mb-3 border-1 bg-light  ">
                                            <div className="row g-0 p-4 align-items-center">
                                                <div className=" col-3 ">
                                                    <img src="img/product-1.png" className="img-fluid rounded-3" alt="..." />
                                                </div>
                                                <div className="col-lg-6 col-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold fs-8">Vintage Hannibal T-Shirt</h5>
                                                        <p className="card-text fs-7">$45.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 pt-3 d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary rounded-4 pe-lg-3 fs-8"> +
                                                        Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card mb-3 border-1 bg-light  ">
                                            <div className="row g-0 p-4 align-items-center">
                                                <div className=" col-3 ">
                                                    <img src="img/product-1.png" className="img-fluid rounded-3" alt="..." />
                                                </div>
                                                <div className="col-lg-6 col-9">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold fs-8">Vintage Hannibal T-Shirt</h5>
                                                        <p className="card-text fs-7">$45.00</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 pt-3 d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary rounded-4 pe-lg-3 fs-8"> +
                                                        Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-top">
                            <div className="col-12 pt-4 d-flex pb-4 justify-content-between">
                                <div className="text-black fs-5 fw-bold fst-italic">TOTAL</div>
                                <div className="text-black fs-5 fw-bold fst-italic">$45.00 AUD</div>
                            </div>
                            <button type="button" className="d-block btn btn-primary col-12 py-3 rounded-3 fw-bold">Checkout</button>
                        </div>
                    </div>
                </div>


            </div>

            <ToastContainer />
        </div>
    )
}

export default Header