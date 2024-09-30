import Image from "next/image";
import Link from "next/link";

import mainGif from "../../public/images/app/gif.gif";
import AppSlider from "./(components)/AppSlider";
import ProjectSection from "./(components)/ProjectSection";
import HomePageForm from "./(components)/HomePageForm";

import { login, fetchAllData } from './(store)/siteKey';

export async function generateMetadata() {

  let data = null;
  let error = null;

  try {
    // Log in to get the token
    const loginData = await login();
    const token = loginData.token;

    // Fetch all data using the token
    data = await fetchAllData(token);

    return {
      title: "Software solutions | Web design service - GUI Solutions Sri Lanka",
      description: "GUI offers the high-quality software solutions especially focusing on our customers to take their businesses to the next level. We are proud to be leading hrm software solutions provider and best software development company in Sri Lanka entirely due to the dedication of our Software engineers and other staff.",
      keywords: "Software solutions | Web design service - GUI Solutions Sri Lanka",
      canonical: "https://guisrilanka.com/",
    };
  } catch (err) {
    error = err.message;
    return {
      title: "Error",
      description: "Failed to fetch metadata.",
    };
  }
}

export default async function Home() {
  let data = null;
  let error = null;

  try {
    // Log in to get the token
    const loginData = await login();
    const token = loginData.token;

    // Fetch all data using the token
    data = await fetchAllData(token);
  } catch (err) {
    error = err.message;
  }

  return (
    <>
      <AppSlider categoriesData={data.categories} />
      <div className="container-fluid pt-3 pb-5 service-section d-none d-lg-block" data-aos="fade-up" data-aos-duration="2000">
        <div className="container pt-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mb-3">
              <div className="row align-items-center">
                <div className="col-12 d-xl-block d-none">
                  <Image
                    className="w-100 rounded-15"
                    src={mainGif}
                    alt="GUI Solutions Lanka (Pvt) Ltd"
                    width={636}
                    height={358}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h3 className="font-36 mb-2 text-blue fw-bold">
                Who We Are
              </h3>
              <h1 className="font-20 lh-base text-blue fw-bold mb-1">Welcome to GUI Solutions Lanka!</h1>
              <p className="font-18 lh-base text-dark mb-3">GUI Solutions Lanka (Pvt) Ltd, a global software development
                company
                in
                Sri Lanka, has provided software solutions to enterprises worldwide since 2011. We build powerful
                corporations by anticipating industry changes and reacting quickly to achieve maximum benefits for
                every
                entity in the industry.</p>
              <Link href="/about-us"
                className="fw-bolder text-white btn border-0 font-16 py-lg-2 py-2 px-5 bg-blue1 text-center rounded-pill btn-cus-gradient hvr-shrink">
                Find More Out
              </Link>
            </div>
          </div>
        </div>
      </div >

      <div className="container-fluid pt-3 pb-5 service-section d-lg-none d-block" data-aos="fade-up" data-aos-duration="2000">
        <div className="container pt-lg-5">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6 col-12 mb-3">
              <h3 className="font-36 mb-2 text-blue fw-bold">
                Who We Are
              </h3>
              <p className="font-20 lh-base text-blue fw-bold mb-1">Welcome to GUI Solutions Lanka!</p>
              <p className="font-18 lh-base text-dark mb-3">GUI Solutions Lanka (Pvt) Ltd, a global software development
                company
                in
                Sri Lanka, has provided software solutions to enterprises worldwide since 2011. We build powerful
                corporations by anticipating industry changes and reacting quickly to achieve maximum benefits for
                every
                entity in the industry.</p>
              <Link href="/about-us"
                className="fw-bolder text-white btn border-0 font-16 py-lg-2 py-2 px-5 bg-blue1 text-center rounded-pill btn-cus-gradient hvr-shrink">
                Find Out More
              </Link>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row gap-3 align-items-center">
                <div className="col-12 d-xl-block d-none">
                  <Image
                    className="w-100 rounded-15"
                    src={mainGif}
                    alt="GUI Solutions Lanka (Pvt) Ltd"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <ProjectSection projectsData={data.projects} />

      {/* <!-- Form request --> */}
      <HomePageForm />
    </>
  );
}
