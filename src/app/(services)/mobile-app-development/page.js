import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import logo1 from '../../../../public/images/m-d-logo (1).png';
import logo2 from '../../../../public/images/m-d-logo (2).png';
import logo3 from '../../../../public/images/m-d-logo (3).png';
import logo4 from '../../../../public/images/m-d-logo (4).png';
import logo5 from '../../../../public/images/m-d-logo (5).png';
import logo6 from '../../../../public/images/m-d-logo (6).png';

import { login } from '@/app/(store)/siteKey';
import AppOurSolutions from '@/app/(components)/AppOurSolutions';

export async function generateMetadata() {
    let data = null;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/mobile-app-development`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        data = response.data;

        return {
            title: data.payload.meta_title,
            description: data.payload.meta_description,
            keywords: data.payload.keywords,
        };

    } catch (error) {
        console.error(error);
        return {
            title: "Error",
            description: "Failed to fetch metadata.",
        };
    }
}

export default async function MobileAppPage() {
    let categoryData = null;
    let loading = true;
    let error = null;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/mobile-app-development`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        categoryData = response.data.payload;
        loading = false;

    } catch (err) {
        console.error(err);
        error = err.message;
        loading = false;
    }

    const subCategories = categoryData?.subCategories || [];

    return (
        <div className="container-fluid pb-1" id="pageContainer">
            {loading && (
                <div className="loader-mask" id='loader-mask'>
                    <div className="loader">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Oops! Something went wrong: {error}. Please try again later!
                </div>
            )}

            {categoryData && (
                <>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1400"
                            >
                                <h1 className="me-lg-auto text-blue text-lg-start text-center font-48 fw-bold mb-1">{categoryData?.name}</h1>
                                <p className="font-18 lh-base text-dark text-lg-start text-center">{categoryData?.short_description}</p>
                                <Link href="/" className="me-lg-auto btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                                    Back to Home
                                </Link>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
                                <Image
                                    src={categoryData?.images[0]}
                                    className="w-lg-auto w-75 mt-3 mt-lg-0 services-main-img"
                                    alt="GUI Solutions Lanka (Pvt) Ltd"
                                    width={450}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid pb-5">
                        <div className="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic" data-aos-duration="1400">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="font-18 text-black-cus text-center" dangerouslySetInnerHTML={{ __html: categoryData?.description }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <AppOurSolutions subCategories={subCategories} />

                    <div className="container-fluid my-5" data-aos="fade-up" data-aos-duration="1400">
                        <div className="container">
                            <h5 className="font-24 fw-bold text-center text-blue mb-5 mb-4 d-lg-block d-none">
                                We <span className="border-blue-cus border-bottom border-2">
                                    develop programs for Windows, Web, and Mobile applications</span>
                            </h5>
                            <h5 className="font-24 fw-bold text-center text-blue mb-5 mb-4 d-lg-none d-block">
                                We develop programs for Windows, Web, and Mobile applications
                            </h5>

                            <div className="row">
                                <div className="col-12 programs-carousel owl-carousel d-flex flex-wrap justify-content-center">
                                    {[
                                        logo4,
                                        logo3,
                                        logo6,
                                        logo5,
                                        logo1,
                                        logo2
                                    ].map((logo, index) => (
                                        <div className="text-center" key={index}>
                                            <Image src={logo} className="d-block w-100" alt="GUI Solutions Lanka (Pvt) Ltd" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
