import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 pb-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="relative w-40 h-40 flex mb-6" >
            <img className="rounded-full border border-gray-100 shadow-sm" src="./ilyas.jpg" alt="user" />
          </div>
          <div className="relative">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Ilyas.
              <br className="hidden lg:inline-block" />I'm an aeronautical design engineer,
              but I also design websites.
            </h1>
            <p className="mb-8 leading-relaxed">
              After the covid, I found myself unemployed so I decided to learn how to develop websites/apps. I followed a 5 months long bootcamp and this is my portfolio.
            </p>
            <div className="flex justify-center mb-8">
              <a
                href="https://www.instagram.com/ilyashara/"
                className="inline-flex items-center mr-8">
                  <img
                    alt="instagram"
                    src="./insta.png"
                    className="w-8 flex-shrink-0 object-cover object-center"
                  />
              </a>
              <a
                href="https://www.linkedin.com/in/ilyas-hara/"
                className="inline-flex items-center mr-8">
                 <img
                    alt="linkedin"
                    src="./linkedin.png"
                    className="w-8 flex-shrink-0 object-cover object-center"
                  />
              </a>
              <a
                href="https://github.com/ilyashara/"
                className="inline-flex items-center">
                 <img
                    alt="github"
                    src="./github.png"
                    className="w-8 flex-shrink-0 object-cover object-center"
                  />
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Say hi!
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded hover:transform translate-x-2 md:translate-x-8"
            alt="hero"
            src="./plane.png"
          />
        </div>
      </div>
    </section>
  );
}
