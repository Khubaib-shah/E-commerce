import React from "react";

export default function LoadingSingleProduct() {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 bg-gray-300 animate-pulse rounded"></div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="w-24 h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
              <div className="w-48 h-8 bg-gray-300 animate-pulse mb-4 rounded"></div>
              <div className="w-full h-4 bg-gray-300 animate-pulse mb-4 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 animate-pulse mb-4 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-300 animate-pulse mb-6 rounded"></div>
              <div className="flex items-center mb-5">
                <div className="flex">
                  <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full mr-1"></div>
                  <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full mr-1"></div>
                  <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full mr-1"></div>
                </div>
                <div className="ml-6 w-16 h-6 bg-gray-300 animate-pulse rounded"></div>
              </div>
              <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
