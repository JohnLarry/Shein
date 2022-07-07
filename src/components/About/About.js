import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="">
      <div className="">
        <header className=" bg-gray-900 navbar  max-w-[1080] mx-auto py-4">
          <div className="wrapper ">
            <div className="flex-1  ">
              <button className="lg:pl-5 md:pl-5  pl-1  btn btn-square btn-ghost text-3xl  font-bold">
                <a className="text-white" href="b">
                  <i className="fa-solid fa-angle-left"></i>
                </a>
              </button>
            </div>

            <div className="flex-none">
              <h1
                href
                className="lg:pr-5 md:pr-5   uppercase text-base md:text-2xl lg:text-3xl  font-bold text-white"
              >
                About SHEIN
              </h1>
            </div>
          </div>
        </header>

        <div className="pt-28  about-container banner-area text-center font-bold h-40 lg:h-96 md:h-96 ">
          {/* about-container */}
          <h2 className="text-5xl ">About SHEIN</h2>
        </div>

        <div className="bg-slate-800 content-area  p-5 ">
          {/*  mx-auto  */}
          <div className=" container mx-auto max-w-[1080] ">
            {/* ques 1 */}
            <section className="shadow-xl rounded-lg">
              <div className="card lg:card-side bg-base-100 my-8">
                <figure>
                  <img
                    className="rounded-lg md:ml-4 lg:ml-4 shadow-lg  md:my-5 lg:my-5 image"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-dark">
                    SHEIN is a multinational e-commerce company
                  </h2>

                  <p className="text-gray-500 text-justify mb-6">
                    SHEIN is a e-commerce company, SHEIN provides a complete set
                    of services for online retailers including marketing and
                    shop templates to simplify the process of opening an online
                    store for small businesses. Increase sales and increase
                    product popularity.
                  </p>
                  <p className="text-gray-500 text-justify mb-6">
                    SHEIN is an online marketplace created in November 2011 to
                    level the playing field for online retailers and provide
                    better e-commerce for everyone.
                  </p>
                  <p className="text-gray-500 text-justify mb-6">
                    SHEIN never holds any of its own retail inventory, and every
                    product on the site is listed by an independent business, so
                    anyone looking to sell on SHEIN will only be competing with
                    other sellers, not the platform itself.
                  </p>
                </div>
              </div>

              <div className=" card lg:card-side bg-base-100">
                <div className="card-body">
                  <p className="text-gray-500 text-justify mb-6">
                    SHEIN has grown over 24,000% since it's creation in 2011,
                    and now It's too big for any seller who hasn't registered to
                    ignore, especially given the continued globalization of
                    SHEIN, which will be in more than 140 countries around the
                    world by the end of 2023.
                  </p>
                  <p className="text-gray-500 text-justify mb-6">
                    One of SHEIN's greatest strengths as a marketplace is its
                    versatility. The site was created to provide a platform to
                    level the playing field for various retailers. This
                    philosophy still applies today- from small businesses to big
                    brands, every company selling on SHEIN has access to the
                    same tools, resources and support to grow their businesses.
                  </p>
                  <p className="text-gray-500 text-justify mb-6">
                    In this article, we'll explore the advantages of selling
                    tangible and virtual products, how to get set up quickly,
                    how SHEIN can enhance and simplify your offerings, and the
                    platform's overall growth trajectory around the world.
                  </p>
                </div>

                <figure>
                  <img
                    className="rounded-lg md:mr-4 lg:mr-4 shadow-lg md:my-5 lg:my-5 image"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                    alt="Album"
                  />
                </figure>
              </div>
            </section>

            <section className="shadow-xl rounded-lg">
              <div className="my-5 card lg:card-side bg-base-100 ">
                <figure>
                  <img
                    className=" image rounded-lg mx-4 lg:my-5 md:my-5 shadow-lg"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-dark">
                    What you need to know about seling on SHEIN
                  </h2>

                  <p className="text-gray-500 text-justify">
                    SHEIN was designed from the ground up to create success for
                    sellers. This means it's easy to grasp for those selling
                    online for the first time, as well as those who choose to
                    sell on SHEIN after experiencing other markets.
                  </p>

                  <br />

                  <h2 className="card-title font-bold text-dark">Service</h2>

                  <p className="text-gray-500 text-justify">
                    If you want to know more, please feel free to contact us.
                    You can learn about and contact us through the following
                    channels.
                  </p>
                </div>
              </div>
            </section>

            <section className="my-14">
              <div className="alert alert-warning shadow-lg py-3">
                <div>
                  <a href="r" className="link link-hover">
                    <i className="text-5xl mx-3  fa-solid fa-headset"></i>
                  </a>

                  <span className=" text-2xl font-bold">
                    <a href="r" className="link link-hover">
                      Online Customer Service
                    </a>
                  </span>
                </div>
              </div>
            </section>

            <section>
              <div className="card shadow-lg rounded-lg w-full my-14 bg-gray-900 text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title fw-bold text-2xl">
                    See More Instructions!
                  </h2>
                  <div className="flex flex-col w-full border-opacity-400 ">
                    <div className="divider shadow-lg"></div>
                  </div>
                  <a href="r" className="link link-primary">
                    Rule description
                  </a>
                  <a href="r" className="link link-secondary">
                    Promotion description
                  </a>
                  <a href="r" className="link link-primary">
                    Back to Homepage
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
