import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import dynamicImg from '../../../../public/images/dynamics.png';
import saperpImg from '../../../../public/images/saperp.png';
import axios from 'axios';
import { login } from '@/app/(store)/siteKey';

export async function generateMetadata() {
    let data = null;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/erp-solution-for-retail-business`,
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
            keywords: "error, metadata",
        };
    }
}

export default async function ErpPage() {
    let categoryData = null;
    let loading = true;
    let error = null;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/erp-solution-for-retail-business`,
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
    const services = categoryData.services;

    return (
        <>
            <div className="container-fluid pb-1" style={{ display: categoryData ? "block" : "none" }} id="pageContainer">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        Oops! Something went wrong: {error}. Please try again later!
                    </div>
                )}
                <div className="loader-mask" style={{ display: loading ? "block" : "none" }}>
                    <div className="loader">
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 d-flex flex-column align-items-center justify-content-center"
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
            </div>

            <div className="container-fluid pb-5">
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1400"
                >
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div
                                className="font-18 text-black-cus text-center"
                                dangerouslySetInnerHTML={{ __html: categoryData?.description }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <h3 className="fw-bold text-blue pb-5 text-center font-36">
                            Ma<span className="border-blue-cus border-bottom border-2">in Key Modul</span>es
                        </h3>
                        {services.length > 0 && services.map((serviceData, index) => (
                            <div className="col-lg-4 col-sm-6 col-12 mb-4" key={index}>
                                <div className="card p-2 bg-white bg-opacity-50 border-0 min-h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title mb-2 mt-1 text-center text-uppercase fw-bold font-19">
                                            {serviceData.title}
                                        </h5>
                                        <div className="card-text text-center" dangerouslySetInnerHTML={{ __html: serviceData.description }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-4 pb-5" data-aos="fade-up" data-aos-duration="1400">
                <div className="container">
                    <h5 className="fw-bold text-blue text-center font-36 mb-5">
                        Ou<span className="border-blue-cus border-bottom border-2">r Associated Servic</span>es
                    </h5>
                </div>
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1400"
                >
                    <div className="row d-flex justify-content-center gap-lg-5 gap-0">
                        <div className="col-lg-2 col-sm-4 col-4">
                            <Image src={dynamicImg} className="w-100" alt="GUI Solutions Lanka (Pvt) Ltd" />
                        </div>
                        <div className="col-lg-2 col-sm-4 col-4">
                            <Image src={saperpImg} className="w-100" alt="GUI Solutions Lanka (Pvt) Ltd" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
