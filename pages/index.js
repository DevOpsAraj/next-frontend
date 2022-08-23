import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";

import Script from "next/script";
import { Profiler, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home({ blogs, profile }) {
  const client = createClient({
    projectId: "dr3p23ul",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>{profile.title} - Developer | Coder | Software Geek</title>

          <meta property="og:title" content="Homepage | Atom Template" />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//" />

          <meta property="og:url" content="//" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#5540af" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

          <link
            crossorigin="crossorigin"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link
            crossorigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>
        </Head>
        <NavBar profile={profile} />

        <div className="fixed inset-0 min-h-screen transition-opacity bg-black opacity-0 pointer-events-none z-70 bg-opacity-70 lg:hidden" />
        <div className="absolute right-0 hidden w-2/3 min-h-screen px-8 py-4 shadow bg-primary md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="/assets/img/icon-close.svg"
              className="w-auto h-10"
              alt=""
            />
          </button>

          <ul className="flex flex-col mt-8">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            {/* <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </li> */}

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </>
      <>
        <div>
          <div
            className="relative py-8 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
          >
            <div className="absolute inset-0 z-20 bg-center bg-no-repeat bg-cover bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="border-8 rounded-full shadow-xl border-primary">
                  <img
                    src={builder.image(profile.image).width(200).url()}
                    className="h-48 rounded-full sm:h-56"
                    alt="author"
                  />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className="text-4xl text-center text-white font-header sm:text-left sm:text-5xl md:text-6xl">
                    Hello I'm {profile.name}!
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="text-lg text-white uppercase font-body">
                        Let's connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="text-3xl bx bx-chevron-right text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      {/* <a href={profile.fbLink}>
                        <i className="text-2xl text-white bx bxl-facebook-square hover:text-yellow"></i>
                      </a> */}
                      <a href={profile.twitterLink} className="pl-4">
                        <i className="text-2xl text-white bx bxl-twitter hover:text-yellow"></i>
                      </a>
                      {/* <a href="/" className="pl-4">
                        <i className="text-2xl text-white bx bxl-dribbble hover:text-yellow"></i>
                      </a> */}
                      <a href="/" className="pl-4">
                        <i className="text-2xl text-white bx bxl-linkedin hover:text-yellow"></i>
                      </a>
                      <a href={profile.instagramLink} className="pl-4">
                        <i className="text-2xl text-white bx bxl-instagram hover:text-yellow"></i>
                      </a>
                    </div>
                  </div>
                  <Link href="https://www.awsinshort.com/">
                    <div className="text-center buttons md:text-left">
                      <button className="px-4 py-1 my-4 text-white bg-purple-600 border-2 rounded-2xl">
                        Blogs
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="text-4xl font-semibold uppercase font-header text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 text-xl font-medium text-black font-header sm:text-2xl lg:text-3xl">
                  I'm {profile.name}, a Software Developer & Web Designer
                </h4>
                <p className="pt-6 leading-relaxed font-body text-grey-20">
                  I am Computer Science Engineering Student. I pursuing my B.
                  TECH since july 2019 and I'm a final year student. I know C++
                  and Python programming. And I created project using these
                  programming languages. I know some web development
                  technologies like - HTML, CSS, JAVASCRIPT etc.
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="text-lg font-semibold uppercase font-body text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="text-2xl bx bx-chevron-right text-primary"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    {/* <a href="/">
                      <i className="text-2xl bx bxl-facebook-square text-primary hover:text-yellow"></i>
                    </a> */}
                    <a href="/" className="pl-4">
                      <i className="text-2xl bx bxl-twitter text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.linkedin} className="pl-4">
                      <i className="text-2xl bx bxl-linkedin text-primary hover:text-yellow"></i>
                    </a>
                    {/* <a href="/" className="pl-4">
                      <i className="text-2xl bx bxl-linkedin text-primary hover:text-yellow"></i>
                    </a> */}
                    <a href={profile.instagram} className="pl-4">
                      <i className="text-2xl bx bxl-instagram text-primary hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full pt-10 pl-0 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <div>
                  <div className="flex items-end justify-between">
                    <h4 className="font-semibold text-black uppercase font-body">
                      HTML & CSS
                    </h4>
                    <h3 className="text-3xl font-bold font-body text-primary">
                      70%
                    </h3>
                  </div>
                  <div className="w-full h-3 mt-2 rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-primary"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-semibold text-black uppercase font-body">
                      Python
                    </h4>
                    <h3 className="text-3xl font-bold font-body text-primary">
                      60%
                    </h3>
                  </div>
                  <div className="w-full h-3 mt-2 rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-primary"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-semibold text-black uppercase font-body">
                      Javascript
                    </h4>
                    <h3 className="text-3xl font-bold font-body text-primary">
                      50%
                    </h3>
                  </div>
                  <div className="w-full h-3 mt-2 rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-primary"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-semibold text-black uppercase font-body">
                      C++
                    </h4>
                    <h3 className="text-3xl font-bold font-body text-primary">
                      80%
                    </h3>
                  </div>
                  <div className="w-full h-3 mt-2 rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-primary"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
              Here's what I'm good at
            </h2>
            <h3 className="pt-6 text-xl font-medium text-center text-black font-header sm:text-2xl lg:text-3xl">
              These are my intrest, where am I good?
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              {/* SOFTWARE DEVELOPMENT */}
              <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-development-white.svg"
                      alt="development icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-development-black.svg"
                      alt="development icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    SOFTWARE DEVELOPMENT
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    I know programming language like C++ and Python for Software
                    Development.
                  </p>
                </div>
              </div>

              {/* MOBILE DEVELOPMENT */}
              {/* <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-mobile-white.svg"
                      alt="Mobile Application icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-mobile-black.svg"
                      alt="Mobile Application icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Mobile Development
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div> */}
              {/* EMAIL DEVELOPMENT */}
              {/* <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-email-white.svg"
                      alt="Email Marketing icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-email-black.svg"
                      alt="Email Marketing icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Email Development
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div> */}
              {/* GRAPHIC DESIGN */}
              {/* <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-design-white.svg"
                      alt="Theme Design icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-design-black.svg"
                      alt="Theme Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Graphic Design
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div> */}
              {/* Web Design */}
              <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-graphics-white.svg"
                      alt="Graphic Design icon"
                    />
                  </div>

                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-graphics-black.svg"
                      alt="Graphic Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Web Development
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    I know web development technologies like HTML, CSS, JS,
                    Node.JS and Python Django.
                  </p>
                </div>
              </div>

              {/* TECHNICAL WRITING*/}
              <div className="px-8 py-12 rounded shadow group hover:bg-primary">
                <div className="w-24 h-24 mx-auto text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                      src="/assets/img/icon-content-white.svg"
                      alt="content marketing icon"
                    />
                  </div>

                  <div className="block group-hover:hidden">
                    <img
                      src="/assets/img/icon-content-black.svg"
                      alt="content marketing icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Technical Writing
                  </h3>
                  <p className="pt-4 text-sm text-grey group-hover:text-white md:text-base">
                    I am intrested to writing a technical blogs an Cloud
                    Computing and Its various tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-xl font-medium text-center text-black font-header sm:text-2xl lg:text-3xl">
              Here's what I have done with the past
            </h3>

            <div className="grid w-full grid-cols-1 gap-8 pt-12 mx-auto sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              <a
                href="/"
                className="mx-auto transition-all transform hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/2.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="/"
                className="mx-auto transition-all transform hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/3.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="/"
                className="mx-auto transition-all transform hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/4.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="/"
                className="mx-auto transition-all transform hover:scale-105 md:mx-0"
              >
                <img
                  src="/assets/img/1.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
            </div>
          </div>

          {/* <div className="bg-grey-50" id="clients">
            <div className="container py-16 md:py-20">
              <div className="w-full mx-auto sm:w-3/4 lg:w-full">
                <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
                  My latest clients
                </h2>
                <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                  <span className="block m-8">
                    <img
                      src="/assets/img/logo-coca-cola.svg"
                      alt="client logo"
                      className="block w-auto h-12 mx-auto"
                    />
                  </span>
                  <span className="block m-8">
                    <img
                      src="/assets/img/logo-apple.svg"
                      alt="client logo"
                      className="block w-auto h-12 mx-auto"
                    />
                  </span>

                  <span className="block m-8">
                    <img
                      src="/assets/img/logo-netflix.svg"
                      alt="client logo"
                      className="block w-auto h-12 mx-auto"
                    />
                  </span>

                  <span className="block m-8">
                    <img
                      src="/assets/img/logo-amazon.svg"
                      alt="client logo"
                      className="block w-auto h-12 mx-auto"
                    />
                  </span>

                  <span className="block m-8">
                    <img
                      src="/assets/img/logo-stripe.svg"
                      alt="client logo"
                      className="block w-auto h-12 mx-auto"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="work">
            <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
              My work experience
            </h2>
            <h3 className="pt-6 text-xl font-medium text-center text-black font-header sm:text-2xl lg:text-3xl">
              Here's what I did before freelancing
            </h3>

            <div className="relative flex flex-col w-full mx-auto mt-12 lg:w-2/3">
              <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

              <div className="flex flex-col mt-8 text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-spotify.svg"
                        className="w-32 h-auto"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative hidden w-full ml-3 md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute hidden w-4 h-4 bg-white border-2 rounded-full left-8 top-1 border-grey-40 md:block"></span>

                    <div className="flex mt-1">
                      <i className="hidden bx bxs-right-arrow text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold font-body text-grey-40">
                          Apr 2015 - Mar 2018
                        </span>
                        <span className="block pt-2 text-xl font-bold uppercase font-header text-primary">
                          Frontend Developer
                        </span>
                        <div className="pt-2">
                          <span className="block text-black font-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8 text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-microsoft.svg"
                        className="w-32 h-auto"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative hidden w-full ml-3 md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute hidden w-4 h-4 bg-white border-2 rounded-full left-8 top-1 border-grey-40 md:block"></span>

                    <div className="flex mt-1">
                      <i className="hidden bx bxs-right-arrow text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold font-body text-grey-40">
                          Mar 2018 - September 2019
                        </span>
                        <span className="block pt-2 text-xl font-bold uppercase font-header text-primary">
                          Software Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block text-black font-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8 text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <img
                        src="/assets/img/logo-fedex.svg"
                        className="w-32 h-auto"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative hidden w-full ml-3 md:block">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span className="absolute hidden w-4 h-4 bg-white border-2 rounded-full left-8 top-1 border-grey-40 md:block"></span>

                    <div className="flex mt-1">
                      <i className="hidden bx bxs-right-arrow text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold font-body text-grey-40">
                          October 2019 - Feb 2021
                        </span>
                        <span className="block pt-2 text-xl font-bold uppercase font-header text-primary">
                          DevOps Engineer
                        </span>
                        <div className="pt-2">
                          <span className="block text-black font-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum mattis felis vitae risus pulvinar
                            tincidunt. Nam ac venenatis enim.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="pb-16 bg-top bg-no-repeat bg-cover md:py-16 lg:py-24"
            style={{
              backgroundImage: "url(/assets/img/experience-figure.png)",
            }}
            id="statistics"
          >
            <Link href="https://iamaraj-react.herokuapp.com/">
              <div className="flex justify-center text-center buttons md:text-left">
                <button className="px-4 py-1 my-4 text-white bg-red-600 border-2 rounded-2xl">
                  My Portfolio
                </button>
              </div>
            </Link>
            <div className="container">
              <div className="w-5/6 py-16 mx-auto bg-white shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/assets/img/icon-project.svg"
                        className="w-auto h-12 mx-auto md:h-20"
                        alt="icon project"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="text-2xl font-bold font-body text-primary md:text-4xl">
                        6
                      </h1>
                      <h4 className="text-base font-medium leading-loose text-grey-dark font-header md:text-xl">
                        Finished Projects
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <div>
                      <img
                        src="/assets/img/icon-award.svg"
                        className="w-auto h-12 mx-auto md:h-20"
                        alt="icon award"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="text-2xl font-bold font-body text-primary md:text-4xl">
                        0
                      </h1>
                      <h4 className="text-base font-medium leading-loose text-grey-dark font-header md:text-xl">
                        Awards Won
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/assets/img/icon-happy.svg"
                        className="w-auto h-12 mx-auto md:h-20"
                        alt="icon happy clients"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="text-2xl font-bold font-body text-primary md:text-4xl">
                        0
                      </h1>
                      <h4 className="text-base font-medium leading-loose text-grey-dark font-header md:text-xl">
                        Happy
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center mt-6 text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                    <div>
                      <img
                        src="/assets/img/icon-puzzle.svg"
                        className="w-auto h-12 mx-auto md:h-20"
                        alt="icon puzzle"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="text-2xl font-bold font-body text-primary md:text-4xl">
                        0
                      </h1>
                      <h4 className="text-base font-medium leading-loose text-grey-dark font-header md:text-xl">
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-xl font-medium text-center text-black font-header sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="grid w-full grid-cols-1 gap-6 pt-12 mx-auto sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {blogs.map((item) => {
                  return (
                    <Link
                      key={item.slug.current}
                      href={"/" + item.slug.current}
                      className="shadow"
                    >
                      <div>
                        <div
                          style={{
                            backgroundImage: `url(${
                              builder.image(item.blogimage).width(200).url() ||
                              "/assets/img/post-01.png"
                            })`,
                          }}
                          className="relative bg-center bg-no-repeat bg-cover group h-72 sm:h-84 lg:h-64 xl:h-72"
                        >
                          <span className="absolute inset-0 block transition-opacity bg-center bg-no-repeat bg-cover bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to opacity-10 group-hover:opacity-50"></span>
                          <span className="absolute bottom-0 right-0 block px-6 py-2 mb-4 mr-4 text-sm font-bold text-center text-white uppercase border-2 border-white rounded-full cursor-pointer font-body md:text-base">
                            Read More
                          </span>
                        </div>
                        <div className="px-5 py-6 bg-white xl:py-8">
                          <span className="block text-lg font-semibold text-black font-body">
                            {" "}
                            {item.title}
                          </span>
                          <span className="block pt-2 font-body text-grey-20">
                            {item.metadesc}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href={"/blogs"}>
              <div className="flex justify-center text-center buttons md:text-left">
                <button className="px-4 py-1 my-4 text-white bg-red-600 border-2 rounded-2xl">
                  All Blogs
                </button>
              </div>
            </Link>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-4xl font-semibold text-center uppercase font-header text-primary sm:text-5xl lg:text-6xl">
              Here's a contact form
            </h2>
            <h4 className="pt-6 text-xl font-medium text-center text-black font-header sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="w-full pt-5 mx-auto text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                You can ask me about related to my skills or preferred area.
              </p>
            </div>
            <form
              method="POST"
              action="https://getform.io/f/be6ddec9-3236-4e09-8b2d-82b27da63e7c"
              className="w-full pt-10 mx-auto sm:w-3/4"
            >
              <div className="flex flex-col md:flex-row">
                <input
                  className="w-full px-4 py-3 mr-3 text-black rounded border-grey-50 font-body md:w-1/2 lg:mr-5"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="w-full px-4 py-3 mt-6 text-black rounded border-grey-50 font-body md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <textarea
                className="w-full px-4 py-3 mt-6 text-black rounded border-grey-50 font-body md:mt-8"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="flex items-center justify-center px-8 py-3 mt-6 text-lg font-bold text-center text-white uppercase rounded bg-primary font-header hover:bg-grey-20">
                Let's Collaborate
              </button>
            </form>
            <div className="flex flex-col pt-16 lg:flex-row">
              <div className="w-full px-6 py-6 border-t-2 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3">
                <div className="flex items-center">
                  <i className="text-2xl bx bx-phone text-grey-40"></i>
                  <p className="pl-2 font-bold uppercase font-body text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                  (+91) 907XX7XX86
                </p>
              </div>
              <div className="w-full px-6 py-6 border-t-0 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="text-2xl bx bx-envelope text-grey-40"></i>
                  <p className="pl-2 font-bold uppercase font-body text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                  say@iamaraj.me
                </p>
              </div>
              <div className="w-full px-6 py-6 border-t-0 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="text-2xl bx bx-map text-grey-40"></i>
                  <p className="pl-2 font-bold uppercase font-body text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                  Vill and Post XXXXXXXXXX Street XXXXXXXXXXXXXX
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative py-16 bg-center bg-no-repeat bg-cover bg-primary bg-blend-multiply lg:py-24"
            style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
          >
            <div className="container relative z-30">
              <h3 className="text-3xl leading-tight tracking-wide text-center text-white uppercase font-header sm:text-4xl lg:text-5xl">
                Keep <span className="font-bold">up-to-date</span> <br />
                with what I'm up to
              </h3>
              <form className="flex flex-col justify-center mt-6 sm:flex-row">
                <input
                  className="w-full px-4 py-3 text-black rounded font-body sm:w-2/5 sm:py-4 lg:w-1/3"
                  type="text"
                  id="email"
                  placeholder="Give me your Email"
                />
                <button className="px-8 py-3 mt-2 text-base font-bold uppercase transition-colors rounded bg-yellow font-body text-primary hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
                  Join the club
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center text-white font-body md:text-left">
              © Copyright 2022. All right reserved, {profile.title}.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              {/* <a href="/">
                <i className="text-2xl text-white bx bxl-facebook-square hover:text-yellow"></i>
              </a> */}
              <a href={profile.twitter} className="pl-4">
                <i className="text-2xl text-white bx bxl-twitter hover:text-yellow"></i>
              </a>
              {/* <a href="/" className="pl-4">
                <i className="text-2xl text-white bx bxl-dribbble hover:text-yellow"></i>
              </a> */}
              <a href={profile.linkedin} className="pl-4">
                <i className="text-2xl text-white bx bxl-linkedin hover:text-yellow"></i>
              </a>
              <a href={profile.instagram} className="pl-4">
                <i className="text-2xl text-white bx bxl-instagram hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "dr3p23ul",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile,
    },
  };
}
