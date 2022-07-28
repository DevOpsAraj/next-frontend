import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import NavBar from "../components/NavBar";

const Blogs = ({ blogs, profile, author }) => {
  const client = createClient({
    projectId: "dr3p23ul",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    console.log("thsnks");
  }, []);
  return (
    <div>
      <NavBar profile={profile} />
      <div className="my-12 bg-grey-50" id="blog">
        <div className="container py-16 mx-auto md:py-20">
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
                  href={"/blog/" + item.slug.current}
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
                      <span className="absolute bottom-0 right-0 block px-6 py-2 mb-4 mr-4 text-sm font-bold text-center text-purple-200 uppercase bg-purple-700 border-2 border-purple-700 rounded-full cursor-pointer font-body md:text-base">
                        Read More
                      </span>
                    </div>
                    <div className="px-5 py-6 bg-white cursor-pointer xl:py-8">
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
      </div>
    </div>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "dr3p23ul",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  const autorQuery = `*[_type == "author"][0]`;
  const author = await client.fetch(autorQuery);
  return {
    props: {
      blogs,
      profile,
      author,
    },
  };
}
