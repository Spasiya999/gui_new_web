"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import blogImg from "../../../../public/images/about/blogs.svg"
import { fetchDataWithToken, login } from '@/app/(store)/siteKey';

function BlogDetail() {
    const [latestPosts, setLatestPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const token = await login();
                const getBlogs = await fetchDataWithToken('posts');

                setLatestPosts(getBlogs.payload.latest || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="container-fluid my-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex d-lg-block flex-column align-items-center justify-content-center">
                            <h5 className="text-blue text-lg-start text-center font-48 fw-bold mb-1">
                                {data.title}
                            </h5>
                            <Link href="/blogs"
                                    className="btn hvr-shrink btn-cus-gradient rounded-pill text-start mt-2 text-white font-14 fw-bold float-lg-start rounded-padding"
                                >
                                    Back to Blogs
                            </Link>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <Image
                                src={blogImg}
                                width={300}
                                height={300}
                                alt="GUI Solutions Lanka (Pvt) Ltd"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {data && (
                <div className="container-fluid py-5">
                    <div className="container">
                        <Link href="/blogs">
                            <a className="col-2 pt-4">
                                <p className="btn btn-outline-primary-cus px-5 fw-bold rounded-pill px-4">Back</p>
                            </a>
                        </Link>

                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="fw-bold font-30 text-blue lh-base pb-2">{data.title}</h2>
                                <Image
                                    src={data.images || '/placeholder.jpg'}
                                    width={500}
                                    height={300}
                                    className="d-block w-100 rounded-3"
                                    alt={data.title}
                                />
                                <div className="row my-2">
                                    <div className="col-lg-2">
                                        <p className="font-18 text-blue ps-2">
                                            <i className="fas fa-user"></i>
                                            <span className="fst-italic fw-bold text-black-cus">by admin</span>
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="font-18 text-blue ps-2">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span className="fst-italic fw-bold text-black-cus">
                                                {data.published_date}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="font-15 lh-base fw-500 text-dark mb-3">
                                    {data.short_description}
                                </p>
                                <p className="font-15 lh-base fw-500 text-dark">
                                    {data.description}
                                </p>
                            </div>
                            <div className="col-lg-4 pt-5">
                                <h2 className="font-20 text-blue fw-bold mb-3">
                                    Latest <span className="border-blue-cus border-bottom border-2">
                                        News&nbsp; &nbsp; &nbsp;
                                    </span>
                                </h2>

                                {latestBlogs.length > 0 ? (
                                    latestBlogs.map((latestBlog) => (
                                        <Link key={latestBlog.id} href={`/blog/${latestBlog.slug}`}>
                                            <a className="module mb-4">
                                                <Image
                                                    src={latestBlog.images || '/placeholder.jpg'}
                                                    width={200}
                                                    height={150}
                                                    className="d-block w-100 rounded-3 news-img"
                                                    alt={latestBlog.title}
                                                />
                                                <h5 className="fw-700 fst-italic text-dark my-3">
                                                    {latestBlog.title}
                                                </h5>
                                                <p className="font-13 line-height-p">
                                                    {latestBlog.short_description}
                                                </p>
                                            </a>
                                        </Link>
                                    ))
                                ) : (
                                    <p>No latest blogs available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;
