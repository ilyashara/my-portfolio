import React from "react";
import { LibraryIcon } from "@heroicons/react/solid";
import { formations } from "../data";

export default function Formations() {
  return (
    <section id="formations">
      <div className="container px-5 py-10 mx-auto text-center">
      <div className="text-center mb-20">
        <LibraryIcon className="w-10 inline-block mb-4 animate-bounce-slow" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Studies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I'm a proud "Wilder" and have a master's degree in auronautical engineering from Université Paul Sabatier.
          </p>
          </div>
        <div className="flex flex-wrap m-4">
          {formations.map((formation) => (
            <div className="p-4 md:w-1/2 w-full">
                <div className="inline-flex items-center">
                  <img
                    alt="formation"
                    src={formation}
                    className="w-60 flex-shrink-0 object-cover object-center"
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
