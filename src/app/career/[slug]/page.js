import Link from 'next/link';
import Image from 'next/image';
import axios from "axios";
import { login } from '@/app/(store)/siteKey';

import careersImg from '../../(assets)/about/careers.svg';
import CareerForm from '@/app/(components)/CareerForm';

export async function generateMetadata({ params }) {
    let data = null;
    let slug = params.slug;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/careers/get/${slug}`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        data = response.data;

        return {
            title: data.payload.meta_title || data.payload.name,
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

export default async function CareerDetails({ params }) {
    let data = null;
    let loading = true;
    let error = null;
    let slug = params.slug;

    try {
        const loginData = await login();

        if (!loginData) {
            throw new Error("No authentication token found. Please login first.");
        }

        const response = await axios.get(
            `https://admin.guisrilanka.com/api/careers/get/${slug}`,
            {
                headers: {
                    Authorization: `Bearer ${loginData}`,
                },
            }
        );

        data = response.data.payload;
        console.log(careerData);

    } catch (err) {
        console.error(err);
        error = err.message;
    } finally {
        loading = false;
    }

    const careerData = data || {};
    console.log(careerData);

    return (
        <div className="container-fluid my-5 pb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="me-lg-auto text-blue text-lg-start text-center font-48 fw-bold mb-1">
                            {careerData.name}
                        </h1>
                        <Link href="/career" className="me-lg-auto btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding">
                            Back to Careers
                        </Link>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <Image
                            src={careersImg}
                            className="w-75 pt-3"
                            alt="GUI Solutions Lanka"
                            width={477}
                            height={287}
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-cus-m mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-sm-12">
                            <Image
                                src={careerData.image}
                                className="d-block w-100 mx-auto"
                                alt="guisrilanka"
                                width={526}
                                height={297}
                            />
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="module py-5 px-3 second-bg-cus">
                                <h5 className="text-blue fw-bold font-20 border-bottom border-2 mb-4">
                                    Job Overview
                                </h5>
                                <p className="font-16 text-blue lh-base mb-3">
                                    {careerData.job_overView}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="p-4 second-bg-cus">
                        <div className="module mb-5">
                            <h5 className="text-blue fw-bold font-20 border-bottom border-2 mb-4">
                                Job Responsibilities and Duties
                            </h5>
                            <p className="text-blue font-16 fw-600 ls-lg mb-3">
                                {careerData.description}
                            </p>
                        </div>
                        <div className="module">
                            <h5 className="text-blue fw-bold font-20 border-bottom border-2 mb-4">
                                Job Requirements
                            </h5>
                            <p className="text-blue font-16 fw-600 ls-lg mb-3">
                                {careerData.requirements}
                            </p>
                        </div>
                    </div>

                    <div className="container-fluid my-4">
                        <div className="container">
                            <h2 className="font-20 text-blue fw-bold mb-3 text-start">
                                If you are interested, please send your resume
                            </h2>

                            <CareerForm careerData={careerData} slug={slug} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
