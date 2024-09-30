"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchDataWithToken, login } from '@/app/(store)/siteKey';

function CareerLayout() {

    const [careersData, setCareersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const token = await login();
                const getCareersData = await fetchDataWithToken('careers');
                console.log(getCareersData);
                setCareersData(getCareersData.payload || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="loader-mask" style={{ display: loading ? "flex" : "none" }}>
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="container-fluid py-lg-5 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row pt-lg-4">
                                {careersData.length > 0 ? (
                                    careersData.map((career) => (
                                        <div className="col-lg-4 col-sm-6 pb-3" key={career.id}>
                                            <div className="module rounded-3 bg-white p-3 shadow" data-aos="fade-up" data-aos-duration="3000">
                                                <Image
                                                    src={career.image}
                                                    className="d-block text-center mx-auto career-img pe-2"
                                                    alt="guisrilanka"
                                                    width={384}
                                                    height={200}
                                                />
                                                <div className="ps-lg-0 ps-sm-0">
                                                    <h3 className="text-blue font-20 fw-bold pt-1 border-blue-cus border-bottom border-2">
                                                        {career.name}
                                                    </h3>
                                                </div>
                                                <p className="text-dark fw-500 font-14 lh-base pt-2">
                                                    {career.job_overView}
                                                </p>
                                                <Link href={`/career/${career.slug}`} className="col-12 px-lg-3 pt-4 d-grid gap-2 col-6 mx-auto">
                                                    <p className="btn-outline-primary-cus fw-bold rounded-pill px-4 py-2 text-center">
                                                        More Info
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="row pt-4">
                                        <div className="bg-blue py-3 px-2 rounded-15">
                                            <span className="text-white ms-3">Sorry! No vacancies available for now</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerLayout