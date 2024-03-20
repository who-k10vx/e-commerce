import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import Footer from './Footer'

function Home() {

    const [record, setRecord] = useState([]);

    const view = async (e) => {
        // e.preventDefault();

        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            console.log(data);
            setRecord(data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        view("");
    }, [])


    return (

        <main onclick="return hide(0)">
            {/* main-banner  */}
            <Header />
            <section className='p-0'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators justify-content-end d-flex mx-5">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/b1.webp" className="d-block heig col-md-12" alt="..." />
                            <div className="carousel-caption d-none d-lg-flex flex-column justify-content-center h-100 text-start" style={{ left: '5%!important', width: '90%!important' }}>
                                <p className="fw-bold">IT'S SPOOKY SZN 🍿</p>
                                <h1 className="display-5 fst-italic col-7" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                    HORROR TEES SO GOOD THEY'LL MAKE YOU SCREAM</h1>
                                <div>
                                    <button className="btn btn-light fw-bold rounded-4 px-4 py-3">SHOP HALLOWEEN</button>
                                </div>
                            </div>
                            <div className="carousel-caption d-flex flex-column justify-content-end d-lg-none text-center h-100 text-start" style={{ left: '5%!important', width: '90%!important' }}>
                                <p className="fw-bold fs-8">IT'S SPOOKY SZN 🍿</p>
                                <h1 className="fs-5 fst-italic col-lg-8  col-xl-7 col-12" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>HORROR TEES SO GOOD THEY'LL MAKE YOU
                                    SCREAM</h1>
                                <div>
                                    <button className="btn btn-light fw-bold rounded-4 px-3 py-2 fs-7">SHOP HALLOWEEN</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="img/banner-1.webp" className="d-block col-md-12 heig" alt="b2" />
                        </div>
                        <div className="carousel-item">
                            <img src="img/b3.webp" className="d-block col-md-12 heig" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev banner-arrows-prev" style={{ width: '5%!important' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next banner-arrows-next" style={{ width: '5%!important' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* popular section  */}
            <section className="py-100 py-99 mt-5 ">
                <div className="popular">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-5 d-flex flex-wrap justify-content-between">
                                <div className="popular-title col-md-6 col-12">
                                    <h3 className=" display-6 text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>POPULAR NOW</h3>
                                </div>
                                <div className="vieww d-flex col-md-6 col-12 justify-content-md-end fs-8 align-items-center">
                                    <p className="fs-6 text-dark me-2">View all</p>
                                    <button className=" hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="position-relative hide1">
                                <div className=" col-12 d-flex  ps-2 " id="scr" style={{ overflow: 'scroll!important' }}>
                                    <div className="col-lg-12 col-12 d-flex flex-wrap ps-2">

                                        {

                                            record.map((val, i) => {
                                                if (i < 4) {

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
                                                                <a href="#" className="rounded-3 btn btn-light position-absolute bottom-0 end-0 d-lg-none m-3 p-2 rounded-circle " style={{ width: 40, height: 40 }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight"><i className="bi bi-basket2" /></a> <button type="button" className="rounded-3 btn btn-primary position-absolute bottom-0 end-0 d-none m-3 p-2 rounded-3" style={{ fontSize: 13, backgroundColor: '#8e75f5' }} data-bs-toggle="offcanvas" data-bs-target="#quickadd" aria-controls="offcanvasRight">+ Quick add</button>
                                                            </div>
                                                            <div className="col-12 px-3">
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

                                                                    <td className="tags align-middle review " style={{ minWidth: 25 }}><a className="text-decoration-none">
                                                                        <span className="badge pink-bg badge-tag mt-2 me-2">{val.tags}</span>
                                                                    </a>
                                                                    </td>


                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <p className="text-black fw-semibold">
                                                                        {val.category}
                                                                    </p>
                                                                    <p className="text-secondary">
                                                                        {val.collection}
                                                                    </p>


                                                                </div>

                                                                <div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                }
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{ transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none' }}>
                                    <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
  (() => {
          var scr = document.getElementById('scr');
          scr.scrollLeft -=200;
  })()
  ">
                                        <i className="bi bi-arrow-left text-black fw-bold fs-5" />
                                    </button>
                                    <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
          (() => {
                  var scr = document.getElementById('scr');
                  scr.scrollLeft +=200;
          })()
      ">
                                        <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* JUST DROPPED  */}
            <section>
                <div className="just-dropped py-100 py-99">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="title col-12 mb-5">
                                <h3 className=" display-6 text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>JUST DROPPED</h3>
                            </div>
                            {/* DROPP-BOX-1  */}
                            <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
                                <div className="dropped-box position-relative rounded-3">
                                    <div className="drop-img justify-content-center d-flex">
                                        <img src="img/just-dropped-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                    </div>
                                    <div className="drop-content">
                                        <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                            SEINFELD</h3>
                                    </div>
                                    <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                </div>
                            </div>
                            {/* DROPP-BOX-2  */}
                            <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
                                <div className="dropped-box position-relative rounded-3">
                                    <div className="drop-img justify-content-center d-flex">
                                        <img src="img/just-dropped-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                    </div>
                                    <div className="drop-content">
                                        <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                            CHRISTMAS</h3>
                                    </div>
                                    <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                </div>
                            </div>
                            {/* DROPP-BOX-3  */}
                            <div className="col-lg-4 col-12 col-md-6 py-3 py-lg-0">
                                <div className="dropped-box position-relative rounded-3">
                                    <div className="drop-img justify-content-center d-flex">
                                        <img src="img/just-dropped-3.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                    </div>
                                    <div className="drop-content">
                                        <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                            DESIGN </h3>
                                    </div>
                                    <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services  */}
            <section className="py-100 py-99">
                <div className="services ">
                    <div className="container-fluid  rounded-5" style={{ backgroundColor: '#8e75f5' }}>
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center py-5  ">
                                {/* services-box-1  */}
                                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
                                    <div className="service-box ">
                                        <div className="box-upper d-flex justify-content-center">
                                            <img src="img/stack1.png" alt="services-1" className="img-fluid" />
                                        </div>
                                        <div className="box-text text-center mt-4">
                                            <p className="fs-5 text-white fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>
                                                PRINTED BY US </p>
                                        </div>
                                    </div>
                                </div>
                                {/* services box-2  */}
                                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
                                    <div className="service-box">
                                        <div className="box-upper d-flex justify-content-center">
                                            <img src="img/stack2.png" alt="services-1" className="img-fluid" />
                                        </div>
                                        <div className="box-text text-center mt-4">
                                            <p className=" fs-5 text-white fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>FREE SHIPPING </p>
                                        </div>
                                    </div>
                                </div>
                                {/* services -box -3  */}
                                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
                                    <div className="service-box ">
                                        <div className="box-upper d-flex justify-content-center">
                                            <img src="img/stack3.png" alt="services-1" className="img-fluid" />
                                        </div>
                                        <div className="box-text text-center mt-4">
                                            <p className="fs-5 text-white fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>
                                                FREE RETURNS</p>
                                        </div>
                                    </div>
                                </div>
                                {/* services-box-4  */}
                                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center">
                                    <div className="service-box ">
                                        <div className="box-upper d-flex justify-content-center">
                                            <img src="img/stack4.png" alt="services-1" className="img-fluid" />
                                        </div>
                                        <div className="box-text text-center mt-4">
                                            <p className="fs-5 text-white fw-bold fst-italic" style={{ letterSpacing: '-0.02rem' }}>
                                                MADE-TO-ORDER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PICK YOUR THREADS   */}
            <section className="py-100 py-99">
                <div className="threads">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-5 d-flex flex-wrap justify-content-between">
                                <div className="thread-title col-md-6 col-12">
                                    <h3 className=" display-6 text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>PICK YOUR THREADS</h3>
                                </div>
                                <div className="vieww d-flex col-md-6 col-12 justify-content-md-end fs-8 align-items-center">
                                    <p className="fs-6 text-dark me-2">View all</p>
                                    <button className=" hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="position-relative hide1">
                                <div className=" col-12 d-flex  ps-2 " id="scr2" style={{ overflow: 'scroll!important' }}>
                                    {/* thrad-box-1  */}
                                    <div className="col-lg-4 col-12 col-md-6 me-2">
                                        <div className="thread-box position-relative">
                                            <div className="thread-img ">
                                                <img src="img/thread-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                            </div>
                                            <div className="thread-content">
                                                <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                    T-SHIRT</h3>
                                            </div>
                                            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* thread-box-2  */}
                                    <div className="col-lg-4 col-12 col-md-6 mx-2">
                                        <div className="thread-box position-relative">
                                            <div className="thread-img ">
                                                <img src="img/thread-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                            </div>
                                            <div className="thread-content">
                                                <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                    HODDIE</h3>
                                            </div>
                                            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* thread-box-3  */}
                                    <div className="col-lg-4 col-12 col-md-6 mx-2 ">
                                        <div className="thread-box position-relative">
                                            <div className="thread-img ">
                                                <img src="img/thread-3.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                            </div>
                                            <div className="thread-content">
                                                <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                    JUMPERS</h3>
                                            </div>
                                            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* thread-box-4  */}
                                    <div className="col-lg-4 col-12 col-md-6 mx-2">
                                        <div className="thread-box position-relative">
                                            <div className="thread-img ">
                                                <img src="img/thread-1.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                            </div>
                                            <div className="thread-content">
                                                <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                    JUMPERS</h3>
                                            </div>
                                            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* thread-box-5 */}
                                    <div className="col-lg-4 col-12 col-md-6 mx-2">
                                        <div className="thread-box position-relative">
                                            <div className="thread-img ">
                                                <img src="img/thread-2.webp" alt="just-dropped-1" className="img-fluid rounded-3" />
                                            </div>
                                            <div className="thread-content">
                                                <h3 className="text-white  position-absolute fst-italic" style={{ bottom: '10%', left: '10%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                    JUMPERS</h3>
                                            </div>
                                            <div className="thread-icon py-2 px-3 rounded-circle position-absolute bg-white text-secondary fs-6 mb-1" style={{ bottom: '20%', left: '10%', fontWeight: 700 }}>&gt;</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{ transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none' }}>
                                    <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
      (() => {
              var scr2 = document.getElementById('scr2');
              scr2.scrollLeft -=200;
      })()
      ">
                                        <i className="bi bi-arrow-left text-black fw-bold fs-5" />
                                    </button>
                                    <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
              (() => {
                      var scr2 = document.getElementById('scr2');
                      scr2.scrollLeft +=200;
              })()
          ">
                                        <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ACCESSORIES  */}
            <section className="py-100 py-99">
                <div className="accessory">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 mb-5 d-flex flex-wrap justify-content-between ">
                                <div className="accessory-title  col-md-6 col-12">
                                    <h3 className=" display-6 text-dark fst-italic " style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>ACCESSORIES</h3>
                                </div>
                                <div className="vieww d-flex col-md-6 col-12 justify-content-md-end fs-8 align-items-center">
                                    <p className="fs-6 text-dark me-2">View all</p>
                                    <button className=" hovvv border-0 d-flex justify-content-center align-items-center rounded-circle" style={{ width: 30, height: 30, backgroundColor: '#F2F2F2' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <svg role="presentation" focusable="false" width={8} height={6} className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
                                            <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 maingrid">
                                <div className="b1">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img">
                                            <img src="img/accessory-1.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                JUMPERS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="b2">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img ">
                                            <img src="img/accessory-2.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                PINS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="b3">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img ">
                                            <img src="img/accessory-2.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                SOCKS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="b4">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img ">
                                            <img src="img/accessory-4.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                MUGS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="b5">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img ">
                                            <img src="img/accessory-5.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                RUGS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="b6">
                                    <div className="accessory-box position-relative rounded-3">
                                        <div className="accessory-img ">
                                            <img src="img/accessory-6.webp" alt="just-dropped-1" className="img-fluid" />
                                        </div>
                                        <div className="accessory-content">
                                            <h3 className="text-white  position-absolute fst-italic ki" style={{ bottom: '5%', left: '7%', fontWeight: 900, letterSpacing: '-0.02rem' }}>
                                                JUMPERS</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* POPULAR THEME  */}
            <section className="py-100 py-99">
                <div className="popular-theme pt-5 pt-md-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="theme-title">
                                    <h3 className=" display-6 text-dark fst-italic" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>POPULER THEME</h3>
                                </div>
                            </div>
                            <div className="position-relative hide1">
                                <div className=" col-12 d-flex  " id="scr3" style={{ overflow: 'scroll!important' }}>
                                    {/* theme-box-1  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 pe-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-1.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className=" fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Funny</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme-box-2  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-2.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Film &amp; tv</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme-box 3  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-3.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Alternative</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme-box 4  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-4.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Retro</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme box-5  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-5.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Cats</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme -box 6  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-6.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Parody</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme box-5  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-5.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Cats</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    {/* theme box-5  */}
                                    <div className="col-xl-2 col-5 col-sm-4 px-lg-2 px-1 col-md-3">
                                        <div className="theme-box position-relative rounded-3">
                                            <div className="theme-img ">
                                                <img src="img/theme-5.webp" alt="just-dropped-1" className="img-fluid" />
                                            </div>
                                            <div className="theme-content">
                                                <h3 className="fs-6 text-white fw-bold position-absolute" style={{ bottom: '10%', left: '10%' }}>Cats</h3>
                                            </div>
                                            <div className="thread-icon py-0 px-2 rounded-circle position-absolute bg-white text-secondary fs-6" style={{ bottom: '10%', right: '10%' }}>&gt;</div>
                                        </div>
                                    </div>
                                    <div className="position-absolute col-12  px-5 mx-auto justify-content-between top-50 show1" style={{ transform: 'translateY(-50%)', transition: 'all 0.5s', display: 'none' }}>
                                        <button type="button" className="btn btn-light rounded-circle  text-center" onclick="
      (() => {
              var scr3 = document.getElementById('scr3');
              scr3.scrollLeft -=200;
      })()
      ">
                                            <i className="bi bi-arrow-left text-black fw-bold fs-5" />
                                        </button>
                                        <button type="button" className="btn btn-light rounded-circle  text-center " onclick="
              (() => {
                      var scr3 = document.getElementById('scr3');
                      scr3.scrollLeft +=200;
              })()
          ">
                                            <i className="bi bi-arrow-right text-black fw-bold fs-5" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>
            {/* join threads  */}
            <section className="py-100 py-99">
                <div className="join-threads">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="join-title pb-4 pt-lg-5 pt-3">
                                    <h3 className="display-6 text-dark fst-italic  text-center" style={{ fontWeight: 900, letterSpacing: '-0.02rem' }}>JOIN 215K THREADHEADS</h3>
                                    <p className="fs-8 text-body-secondary fw-semibold text-center">And counting... follow<a href="#" className="border-bottom border-dark">@threadheads</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Home