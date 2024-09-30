"use client";
import 'jquery';

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './maincss/bootstrap.min.css';
import './maincss/web-custom-C.css';
import './maincss/web-custom-N.css';
import './maincss/web-custom-responsive-N.css';
import './maincss/web-custome-p-responsive-p.css';
import './maincss/web-custome-p.css';
import './maincss/hover.css';

import Header from './(components)/Header';
import Footer from "./(components)/Footer";

import FontAwesome from "./fontawesome";
import ScrollToTop from "./(components)/ScrollToTop";
import WhatsAppButton from "./(components)/WhatsAppButton";
import { useEffect, useState } from 'react';
import { login, fetchAllData } from './(store)/siteKey';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const { token } = await login();
        const allData = await fetchAllData(token);
        setData(allData);
        hideLoader();
      } catch (err) {
        setError(err.message);
        hideLoader();
      }
    };

    fetchData();
  }, []);

  const hideLoader = () => {
    let loaderMask = null;
    if (typeof window !== "undefined") {
      loaderMask = document.querySelector('.loader-mask');
    }
    if (loaderMask) {
      loaderMask.style.display = 'none';
    }
  };

  return (
    <html lang="en">
      <head>
        <FontAwesome />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
      </head>
      <body className={inter.className}>
        <div className="loader-mask">
          <div className="loader">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="custom-background-gradient">
          <Header categoriesData={data ? data.categories : ''} />
          <main>
            <div className="footerbg-img">
              {children}
            </div>
          </main>
          <WhatsAppButton />
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
