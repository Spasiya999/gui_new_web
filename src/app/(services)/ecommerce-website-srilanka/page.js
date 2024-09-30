import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import bestWeBImg from "../../../../public/images/bestweb.png";
import bestWeBImg2 from "../../../../public/images/Bronze-Best-Health-Wellness-Website-1.png";
import img1 from "../../../../public/images/icons/1.png";
import img2 from "../../../../public/images/icons/2.png";
import img3 from "../../../../public/images/icons/3.png";
import img4 from "../../../../public/images/icons/4.png";
import img6 from "../../../../public/images/icons/6.png";
import img8 from "../../../../public/images/icons/8.png";
import img9 from "../../../../public/images/icons/9.png";

import { login } from "../../(store)/siteKey";
import AppOurSolutions from "@/app/(components)/AppOurSolutions";

export async function generateMetadata() {
  let data = null;

  try {
    const loginData = await login();

    if (!loginData) {
      throw new Error("No authentication token found. Please login first.");
    }

    const response = await axios.get(
      `https://admin.guisrilanka.com/api/categories/get/ecommerce-website-srilanka`,
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

export default async function EcommercePage() {
  let categoryData = null;
  let loading = true;
  let error = null;

  try {
    const loginData = await login();

    if (!loginData) {
      throw new Error("No authentication token found. Please login first.");
    }

    const response = await axios.get(
      `https://admin.guisrilanka.com/api/categories/get/ecommerce-website-srilanka`,
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
    <>
      <div className="container-fluid pb-1" id="pageContainer">
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
        <div className="container" data-aos="fade-up">
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

      <div className="container-fluid py-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="font-36 fw-bold text-center text-blue mb-4">
                Aw<span className="border-blue-cus border-bottom border-2">ard Winni</span>ng
              </h5>
            </div>

            <div className="col-lg-12 col-sm-12">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-5 col-8 text-center d-flex flex-column align-items-center">
                  <Image src={bestWeBImg} alt="Merit Winner 2022" />
                  <p className="text-blue fw-bold font-15 mb-2">
                    Merit Winner 2022 Best <br /> Banking & Finance Website
                  </p>
                  <p className="fw-medium font-15">Sarvodaya Development Finance</p>
                </div>

                <div className="col-lg-3 col-sm-5 col-8 text-center d-flex flex-column align-items-center">
                  <Image src={bestWeBImg2} alt="Bronze Winner 2023" />
                  <p className="text-blue fw-bold font-15 mb-2">
                    Bronze Winner 2023 Best <br /> Health & Wellness Website
                  </p>
                  <p className="fw-medium font-15">Sri Lanka Ayurvedic Drugs Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppOurSolutions subCategories={subCategories} />

      <div className="container-fluid py-3 mb-3">
        <div className="container">
          <h5 className="font-36 fw-bold text-center text-blue mb-5 mb-4">
            Ou<span className="border-blue-cus border-bottom border-2">r Fundamenta</span>ls
          </h5>
          <div className="row">
            <div className="col-12 programs-carousel owl-carousel d-flex flex-wrap justify-content-center">
              <div className="text-center">
                <Image src={img9} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img8} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img6} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img4} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img3} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img2} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
              <div className="text-center">
                <Image src={img1} alt="Logo 9" className="d-block w-100 mx-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid second-bg-cus py-3 mb-3">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h5 className="font-24 text-blue fw-bold text-center mb-3">
            We <span className="border-blue-cus border-bottom border-2">Assure 24/7 Support and Maintenance for Websites</span>
          </h5>
          <p className="font-16 text-dark text-center w-75">
            Where web development makes a difference. We at GUI provide 24-hour service for every product you purchase from us. Our team is dedicated to supporting you at every step of your web journey.
          </p>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="container bg-transparent rounded shadow p-4">
          <h5 className="font-24 fw-bold text-blue my-3">
            Why we <span className="border-blue-cus border-bottom border-2">are special?&nbsp; &nbsp;</span>
          </h5>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <ul className="mt-4 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Our company is equipped with
                  well-qualified and fresh talent.</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">We are affordable and provide
                  excellent value for your investment.</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">We excel in web marketing and the
                  latest technologies.</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">We work with a worldwide client
                  base and have international experience</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Identify and understand your
                  requirements.</li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <ul className="mt-lg-3 erp-list" data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                ata-aos-easing="ease-out-cubic" data-aos-duration="1400">
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Analyze your objectives and goals
                </li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Conceptualize your design</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Present concept designs</li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">consulting for digital marketing.
                </li>
                <li className="font-16 fw-semibold line-height-p mb-3 erp-list-li">Weekly analytics reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
