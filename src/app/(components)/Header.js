"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

function Header({ categoriesData = [] }) {
    const categories = categoriesData.payload || [];

    useEffect(() => {
        let header = null;
        if (typeof window !== "undefined") {
            header = document.getElementById('header');
        }

        const handleScroll = () => {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'white';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (typeof window !== "undefined") {
            const menuIcon = document.getElementById('menuIcon');
            menuIcon?.click();
        }
    };

    return (
        <div className="fixed-top" id="header">
            <div className="container-fluid header-section py-lg-2 border-color-cus">
                <div className="container pt-lg-2 py-2">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-7 col-8 webiiste-logo">
                            <Link href="/" title="GUI Solutions Lanka (Pvt) Ltd | Home page">
                                <Image
                                    className="d-block w-100 h-auto"
                                    src={logo}
                                    alt="GUI Solutions Lanka (Pvt) Ltd"
                                />
                            </Link>
                        </div>
                        <div className="col-lg-9 col-4">
                            <nav className="navbar navbar-expand-lg py-0 d-lg-block d-none">
                                <div className="collapse navbar-collapse justify-content-end pt-1 align-items-center" id="navbar-content">
                                    <ul className="navbar-nav nav-custom align-items-center">
                                        <li className="nav-item pe-lg-4">
                                            <Link href="/" className="nav-link font-15 fw-bolder text-blue text-uppercase">Home</Link>
                                        </li>
                                        <li className="nav-item pe-lg-4">
                                            <Link href="/about-us" className="nav-link font-15 fw-bolder text-blue text-uppercase">About Us</Link>
                                        </li>
                                        <li className="nav-item dropdown pe-lg-4">
                                            <div className="nav-link dropdown-toggle font-15 fw-bolder text-blue text-uppercase custom-dropdown-toggle" href="#" aria-expanded="false">Our Solutions</div>
                                            <ul className="dropdown-menu shadow no-arrow custom-dropdown-menu custom-dropdown-aling">
                                                {categories.length > 0 ? (
                                                    categories.map((category) => (
                                                        <li key={category.id} className="dropdown dropend custom-dropdown-item">
                                                            {category.subCategories.length > 0 ? (
                                                                <>
                                                                    <Link href={'/' + category.slug || ''} className="dropdown-item dropdown-toggle no-arrow custom-dropdown-toggle">
                                                                        {category.name}
                                                                    </Link>
                                                                    <ul className="dropdown-menu shadow no-arrow custom-dropdown-menu">
                                                                        {category.subCategories.map((subCategory) => (
                                                                            <li key={subCategory.id}>
                                                                                <Link href={'/solutions' + '/' + subCategory.slug} className="dropdown-item custom-dropdown-item">
                                                                                    {subCategory.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </>
                                                            ) : (
                                                                <Link href={'/' + category.slug} className="dropdown-item custom-dropdown-item">
                                                                    {category.name}
                                                                </Link>
                                                            )}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li className="dropdown-item">No categories available</li>
                                                )}
                                            </ul>
                                        </li>
                                        <li className="nav-item pe-2">
                                            <Link href="/contact-us" className="nav-link font-15 fw-bolder text-blue text-uppercase">Contact Us</Link>
                                        </li>
                                        <li className="nav-item ps-lg-5 text-lg-end text-center last-cus">
                                            <Link href="/request-call" className="hvr-wobble-horizontal font-15 fw-bolder text-blue rounded-pill px-4 py-2 border-blue text-uppercase custom-request-call">
                                                Request a Call
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            {/* Offcanvas Navbar Toggle Button */}
                            <button className="navbar-toggler d-lg-none d-block ms-auto" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                aria-label="Toggle navigation" id="menuIcon">
                                <i className="fas fa-bars text-black font-22 px-2 py-1 rounded border border-black border-2"></i>
                            </button>

                            {/* Offcanvas Navbar */}
                            <div className="offcanvas offcanvas-end bg-blue" tabIndex="-1" id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title d-none" id="offcanvasNavbarLabel">Menu</h5>
                                    <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <nav className="navbar-nav">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link href="/" className="nav-link text-white text-uppercase" onClick={handleClick}>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/about-us" className="nav-link text-white text-uppercase" onClick={handleClick}>About Us</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <p className="nav-link dropdown-toggle text-uppercase text-white mb-0" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">Our Solutions</p>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    {categories.length > 0 ? (
                                                        categories.map((category) => (
                                                            <li key={category.id} className="dropdown">
                                                                {category.subCategories.length > 0 ? (
                                                                    <>
                                                                        <Link href={'/' + category.slug} className="dropdown-item" onClick={handleClick}>
                                                                            {category.name}
                                                                        </Link>
                                                                        <ul className="dropdown-menu">
                                                                            {category.subCategories.map((subCategory) => (
                                                                                <li key={subCategory.id}>
                                                                                    <Link href={'/solutions' + '/' + subCategory.slug} className="dropdown-item" onClick={handleClick}>
                                                                                        {subCategory.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </>
                                                                ) : (
                                                                    <Link href={'/' + category.slug} className="dropdown-item" onClick={handleClick}>
                                                                        {category.name}
                                                                    </Link>
                                                                )}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="dropdown-item">No categories available</li>
                                                    )}
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/contact-us" className="nav-link text-white text-uppercase" onClick={handleClick}>Contact Us</Link>
                                            </li>
                                            <li className="nav-item text-center">
                                                <Link href="/request-call" className="nav-link text-blue btn bg-white rounded-pill px-4 py-2 text-uppercase fw-bold" onClick={handleClick}>
                                                    Request a Call
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
