"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { fetchDataWithToken, login } from '@/app/(store)/siteKey';

function BlogLayout() {

    const [popularPosts, setPopularPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const token = await login();
                const getBlogs = await fetchDataWithToken('posts');

                setPopularPosts(getBlogs.payload.popular || []);
                setFeaturedPosts(getBlogs.payload.featured || []);
                setLatestPosts(getBlogs.payload.latest || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loader-mask">
        <h1 className="d-none">GUI Solutions Sri Lanka</h1>
        <div className="loader">
            <div></div>
            <div></div>
        </div>
    </div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        {popularPosts.length > 0 && (
                            <div className="col-12">
                                <h2 className="fw-bold font-24 text-blue border-blue1 pb-2">
                                    Popular News
                                </h2>
                            </div>
                        )}
                    </div>
                    <div className="row pt-lg-4">
                        <div className="col-lg-8">
                            <div className="row">
                                {popularPosts.slice(0, 2).map((popularPost) => (
                                    <div className="col-lg-6 col-sm-6 pb-3" key={popularPost.id}>
                                        <Link href={`/blog/${popularPost.slug}`} className="hvr-shrink">
                                            <div className="image-frame">
                                                <Image src={popularPost.images[0]} className="d-block rounded-3" alt={popularPost.title} width={500} height={300} />
                                            </div>
                                            <h4 className="fw-bold font-18 px-2 py-2 rounded-3 text-white blog-text lh-base">
                                                {popularPost.title}
                                            </h4>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {popularPosts.length === 0 && (
                                <div className="row">
                                    <div className="bg-blue py-3 px-2 rounded-15">
                                        <span className="text-white ms-3">Sorry! No Blog available for now</span>
                                    </div>
                                </div>
                            )}
                            <div className="row pt-5">
                                {popularPosts.slice(2).map((popularPost) => (
                                    <div className="col-lg-6 col-sm-6 col-12 pb-4" key={popularPost.id}>
                                        <Link href={`/blog/${popularPost.slug}`} className="hvr-shrink">
                                            <div className="row">
                                                <div className="col-5 pe-lg-0">
                                                    <Image src={popularPost.images[0]} className="d-block w-100 rounded-3" alt={popularPost.title} width={500} height={300} />
                                                </div>
                                                <div className="col-7">
                                                    <h5 className="lh-base fw-bold text-dark font-16 fst-italic py-1">{popularPost.title}</h5>
                                                    <p className="font-13 lh-base fw-500 text-dark">{popularPost.short_description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {featuredPosts.length > 0 && (
                                <div className="row pt-3">
                                    <div className="col-12 pb-4">
                                        <h2 className="fw-bold font-24 text-blue border-blue1 pb-2">
                                            Featured News
                                        </h2>
                                    </div>
                                    {featuredPosts.map((featuredBlog) => (
                                        <div className="col-lg-4 col-sm-4 col-6 pb-4" key={featuredBlog.id}>
                                            <Link href={`/blog/${featuredBlog.slug}`} className="hvr-shrink">
                                                <Image src={featuredBlog.images[0]} className="d-block w-100 rounded-3" alt={featuredBlog.title} width={500} height={300} />
                                                <h4 className="fw-bolder font-16 pt-3 pb-2 text-dark">{featuredBlog.title}</h4>
                                                <p className="font-13 lh-base fw-500 text-dark">{featuredBlog.short_description}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 pt-lg-0 pt-5">
                            <div className="rounded-3 bg-transparent shadow">
                                <h2 className="fw-bold font-24 text-white bg-blue px-3 py-2 rounded-top">Follow us</h2>
                                <div className="p-3">
                                    <p className="font-15 pb-2 fw-500 text-dark">Follow us on social media</p>
                                    <div className="d-flex gap-2 mb-3 pt-2 pb-3 border-bottom">
                                        <Link href="https://www.facebook.com/guisrilanka/" className="social d-flex justify-content-center align-items-center" role="button" aria-label="Visit Gui Solutions Lanka on Facebook" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook-f text-blue font-15 fw-500" aria-hidden="true"></i>
                                        </Link>
                                        <Link href="https://lk.linkedin.com/company/gui-solutions-lanka-pvt-ltd" className="social d-flex justify-content-center align-items-center" role="button" aria-label="Visit Gui Solutions Lanka on LinkedIn" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin-in text-blue font-15 fw-500" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                    <h5 className="font-18 text-dark fw-bolder">Get latest news delivered daily!</h5>
                                    <p className="font-13 pt-2 pb-4 fw-500 text-dark">Subscribe to our newsletter</p>
                                    <form className="row g-3 pb-3">
                                        <div className="col-8 pe-lg-0">
                                            <input type="text" className="form-control font-14 py-2 rounded-start rounded-0" name="email" placeholder="Your Email" required />
                                            <p className="invalid-feedback">Please enter a valid email address</p>
                                        </div>
                                        <div className="col-4 ps-lg-0">
                                            <button type="submit" className="btn fw-500 font-14 text-white bg-blue py-2 rounded-end rounded-0">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogLayout