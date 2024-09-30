import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { login } from '@/app/(store)/siteKey';

export async function generateMetadata({ params }) {
  let data = null;
  let slug = params.slug;

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
      title: data.payload.meta_title || 'Software solutions | Web design service - GUI Solutions Sri Lanka',
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

export default async function CategoryComponent({ params }) {
  let categoryData = null;
  let loading = true;
  let error = null;
  let slug = params.slug;

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

    categoryData = response.data.payload;
    loading = false;

  } catch (err) {
    console.error(err);
    error = err.message;
    loading = false;
  }
  return (
    <div className="container-fluid my-5 pb-5">
      <div className="loader-mask" style={{ display: loading ? "block" : "none" }}>
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center">
            <h5 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
              {categoryData?.name}
            </h5>
            <p className="font-18 lh-base text-dark text-lg-start text-center">
              {categoryData?.short_description}
            </p>
            <Link
              href="/"
              className="px-5 btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding"
            >
              Back to Home
            </Link>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center">
            {categoryData?.images?.[0] && (
              <Image
                src={categoryData.images[0]}
                className="w-50 pt-3"
                alt={categoryData.name}
                width={318}
                height={250}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div
                className="font-18 text-black-cus text-center"
                dangerouslySetInnerHTML={{ __html: categoryData.description }}
              />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      {categoryData?.services?.length > 0 && (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="fw-bold text-blue pb-5 text-center font-36">
                Ma<span className="border-blue-cus border-bottom border-2">in Key Servic</span>es
              </h3>
              {categoryData.services.map((service) => (
                <div className="col-lg-4 col-sm-6 col-12 mb-4" key={service.id}>
                  <div className="card p-2 bg-white bg-opacity-50 border-0 min-h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title mb-2 mt-1 text-center text-uppercase fw-bold font-19 key-head-lh">
                        {service.title}
                      </h5>
                      <div className="card-text text-center" dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {categoryData?.projects?.length > 0 && (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="fw-bold text-blue pb-5 text-center font-36">
                Sh<span className="border-blue-cus border-bottom border-2">owcase of Excellen</span>ce
              </h3>
              {categoryData.projects.map((project) => (
                <div className="col-lg-4 col-sm-6 col-12" key={project.id}>
                  <div className="card p-2 bg-transparent border-0 card-min-height mb-4">
                    {project.project_url ? (
                      <Link href={project.project_url} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={project.image}
                          className="card-img-top rounded-3 shadow"
                          alt={project.project_name}
                          width={420}
                          height={210}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        className="card-img-top rounded-3 shadow"
                        alt={project.project_name}
                        width={420}
                        height={210}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title mb-2 mt-1 text-center text-uppercase fw-bold font-19">
                        {project.project_name}
                      </h5>
                      <p className="card-text text-center">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex align-items-center justify-content-center">
                <Link
                  href="https://web.guisrilanka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-16 fw-bold rounded-padding"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};