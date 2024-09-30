"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Swal from "sweetalert2";
import axios from "axios";

function Footer() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            Swal.fire({
                icon: "error",
                title: "Invalid Form",
                text: errors.email,
            });
            return;
        }

        setLoading(true);

        // Show SweetAlert2 loader
        Swal.fire({
            title: "Submitting...",
            text: "Please wait while we submit your request.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await axios.post(
                "https://admin.guisrilanka.com/api/subscription",
                formData
            );

            if (response.data.status === true) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Thank you for your interest. We will get back to you shortly.",
                });
            } else {
                console.error(response.data);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    html: `There was an error submitting your request. Please try again later.`,
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error submitting your request. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container-fluid py-3 footer-section">
                <video autoPlay muted loop id="footer-video">
                    <source src="/images/footer.webm" type="video/mp4" />
                </video>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 ps-lg-5">
                            <div className="row">
                                <div className="col-lg-10 col-sm-10 col-10">
                                    <Link href="/" title="GUI Solutions Lanka (Pvt) Ltd | Home page">
                                        <p>
                                            <Image
                                                className="d-block w-100 mb-4"
                                                src={logo}
                                                alt="GUI Solutions Lanka (Pvt) Ltd"
                                            />
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <p className="text-blue font-14 mb-3">
                                <span className="fw-bold">GUI Solutions Lanka (Pvt) Ltd</span> is a
                                global leader in software development, delivering innovative
                                solutions since 2011. We empower enterprises worldwide with
                                custom-built, cutting-edge software platforms.
                            </p>
                            <p className="text-blue font-14 mb-3 fw-bolder d-none d-xl-block">
                                Copyright @ All rights reserved
                            </p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <p className="mb-lg-3 mb-2 text-dark font-20 text-uppercase text-blue pt-3 fw-500">
                                CONTACT
                            </p>
                            <ul className="ul-space-remove mt-4">
                                <li className="pb-lg-4 pb-0">
                                    <div className="d-flex align-items-center">
                                        <p className="social d-flex justify-content-center align-items-center text-blue font-15 fw-500 me-2 px-2">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </p>
                                        <span className="font-15 fw-bold text-dark">
                                            No. 5E/67, Level-4, Kandy Road, Kadawatha, Sri Lanka
                                        </span>
                                    </div>
                                </li>
                                <li className="pb-lg-4 pb-0">
                                    <div className="d-flex align-items-center">
                                        <p className="social d-flex justify-content-center p-lg-0 p-2 align-items-center text-blue font-15 fw-500 me-2">
                                            <i className="fas fa-phone-alt"></i>
                                        </p>
                                        <span className="font-15 fw-bold text-dark">
                                            <Link href="tel:+94112922420" target="_blank" className="text-black-cus">
                                                +94 112922420
                                            </Link>
                                            <br />
                                            <Link href="tel:+94767079290" target="_blank" className="text-black-cus">
                                                +94 767079290 (Hotline)
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li className="pb-lg-4 pb-0">
                                    <div className="d-flex align-items-center">
                                        <p className="social d-flex justify-content-center align-items-center text-blue font-15 fw-500 me-2">
                                            <i className="fas fa-envelope"></i>
                                        </p>
                                        <span className="font-15 fw-bold text-dark">info@guisrilanka.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <p className="mb-lg-3 mb-2 text-dark font-20 text-uppercase text-blue pt-3 fw-500">
                                QUICK LINKS
                            </p>
                            <ul className="ul-space-remove mt-4">
                                <li className="pb-lg-2 pb-1">
                                    <Link href="/blogs" className="font-14 text-dark hvr-forward fw-bold">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="pb-lg-2 pb-1">
                                    <Link href="/partners" className="font-14 text-dark hvr-forward fw-bold">
                                        Become a Partner
                                    </Link>
                                </li>
                                <li className="pb-lg-2 pb-1">
                                    <Link href="/career" className="font-14 text-dark hvr-forward fw-bold">
                                        Careers
                                    </Link>
                                </li>
                                <li className="pb-lg-2 pb-1">
                                    <Link href="/privacy-policy" className="font-14 text-dark hvr-forward fw-bold">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <p className="mb-lg-3 mb-2 text-dark font-20 text-uppercase text-blue pt-3 fw-500">
                                KEEP IN TOUCH
                            </p>
                            <ul className="ul-space-remove mt-4">
                                <li className="pb-3">
                                    <p className="font-14 text-dark fw-bold mb-1">Get latest news delivered daily!</p>
                                    <p className="font-14 text-dark">Subscribe to our newsletter</p>
                                </li>
                                <li className="pb-0">
                                    <div className="custom-input-group">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email address"
                                                name="email"
                                                onChange={handleChange}
                                            />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit" aria-label="Submit Form">
                                                    <i className="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex gap-2 mb-4 justify-content-center justify-content-lg-start">
                                <Link
                                    href="https://www.facebook.com/guisrilanka/"
                                    className="social d-flex justify-content-center align-items-center"
                                    role="button"
                                    aria-label="Visit Gui Solutions Lanka on Facebook"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-facebook-f text-blue font-15 fw-500" aria-hidden="true"></i>
                                </Link>
                                <Link
                                    href="https://lk.linkedin.com/company/gui-solutions-lanka-pvt-ltd"
                                    className="social d-flex justify-content-center align-items-center"
                                    role="button"
                                    aria-label="Visit Gui Solutions Lanka on LinkedIn"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin-in text-blue font-15 fw-500" aria-hidden="true"></i>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/gui_solutions_lanka/"
                                    className="social d-flex justify-content-center align-items-center"
                                    role="button"
                                    aria-label="Visit Gui Solutions Lanka on Instagram"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-instagram text-blue font-15 fw-500" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <p className="text-blue font-14 mb-3 fw-bolder d-xl-none d-block">Copyright @ All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
