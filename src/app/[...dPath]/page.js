import React from 'react';
import { login } from '../(store)/siteKey';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

import notFoundImage from '../../../public/images/app/notfound.svg';

export async function generateStaticParams() {
    return [
        { dPath: ['project'] },
        { dPath: ['project', 'web-design-and-development'] },
        { dPath: ['web-design-and-development'] }
    ];
}

export async function generateMetadata({ params }) {
    let data = null;
    let slug = params.dPath?.[0];

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/${slug}`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        data = response.data;

        return {
            title: data.payload.meta_title || '404 Page Not Found',
            description: data.payload.meta_description || '',
            keywords: data.payload.keywords || '',
        };

    } catch (error) {
        console.error(error);
        return {
            title: "Error",
            description: "Failed to fetch metadata.",
        };
    }
}

export default async function PageFound({ params }) {
    let slug = params.dPath?.[0];
    console.log(slug);
    if (slug == 'web-design-and-development' || slug == 'project') {
        slug = 'web-design-and-development';
    }

    let categoryDataRe = null;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/categories/get/${slug}`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        categoryDataRe = response.data;

    } catch (err) {
        console.error(err);
    }

    let categoryData = categoryDataRe;

    if (categoryDataRe.status === false) {
        return (
            <div>
                <div className="container-fluid my-5 pb-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                                <h5 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                    404 Page Not Found
                                </h5>
                                <p className="font-18 lh-base text-dark text-lg-start text-center">
                                    The page you are looking for could not be found.
                                </p>
                                <Link href="/" className="btn btn-cus-gradient rounded-pill text-white font-14 fw-bold">
                                    Back to Home
                                </Link>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <Image src={notFoundImage} alt="Page Not Found" width={456} height={389} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                            <h5 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                {categoryData.name}
                            </h5>
                            <p className="font-18 lh-base text-dark text-lg-start text-center">
                                {categoryData.short_description}
                            </p>
                            <Link href="/" className="btn btn-cus-gradient rounded-pill text-white font-14 fw-bold">
                                Back to Home
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            {/* <Image src={categoryData.images?.[0]} alt={categoryData.name} width={456} height={389} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

