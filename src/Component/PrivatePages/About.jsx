import React from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";

export default function About() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to <span className="font-semibold">BADGLEY MISCHKA</span>! At{" "}
          <span className="font-semibold">Old Money</span>, we're passionate
          about bringing you the best shopping experience possible. From our
          carefully curated product collections to our commitment to exceptional
          customer service, everything we do revolves around making your life
          easier, stylish, and more enjoyable.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is simple: to provide high-quality products that meet your
          needs and exceed your expectations. Whether you're looking for the
          latest trends, timeless classics, or everyday essentials, we're here
          to ensure you find exactly what you're searching for.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-3">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Wide Selection:</strong> Our catalog is packed with a
            diverse range of products to cater to your unique tastes and
            preferences.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> Your happiness is our top
            priority. We go the extra mile to make sure you're satisfied with
            every purchase.
          </li>
          <li>
            <strong>Secure Shopping:</strong> With state-of-the-art encryption
            and secure payment gateways, you can shop with confidence.
          </li>
          <li>
            <strong>Fast Shipping:</strong> Enjoy swift and reliable delivery to
            get your products in no time.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Story</h2>
        <p className="text-gray-700 mb-6">
          Founded in <span className="font-semibold">2023</span>,{" "}
          <span className="font-semibold">Old Money</span> started as a small
          idea fueled by a passion for Garments. Over the years, we've grown
          into a trusted destination for thousands of shoppers, thanks to our
          dedication to quality and our loyal customers who inspire us every
          day.
        </p>

        <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <strong>Integrity:</strong> Honesty and transparency guide
            everything we do.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace change and are always
            looking for new ways to serve you better.
          </li>
          <li>
            <strong>Community:</strong> We believe in giving back and building
            meaningful connections with our customers.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-600 mb-3">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello, our team is here to assist.
        </p>
        <ul className="text-gray-700">
          <li>
            <strong>Email:</strong> khubaibsyed820@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 03162126865
          </li>
          <li>
            <strong>Social Media:</strong> Follow us on{" "}
            <a
              href="https://linkedin.com/in/khubaib-baacha-30a5132b0"
              className="hover:text-blue-600 font-semibold text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill className="inline-block  mr-2 text-2xl" />
            </a>
            <a
              href="https://facebook.com/khubaib2004.1978"
              className="hover:text-blue-600 font-semibold text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleFill className="inline-block text-2xl mr-2" />
            </a>
            <a
              href="https://github.com/Khubaib-shah"
              className="hover:text-opacity-60 font-semibold text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill className="inline-block text-2xl mr-2" />
            </a>
            <a
              href="https://twitter.com/khubaib_baacha"
              className="hover:text-blue-600 font-semibold text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine className="inline-block text-2xl" />
            </a>
          </li>
        </ul>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Thank You!</h3>
          <p className="text-gray-700">
            Thank you for choosing{" "}
            <span className="font-semibold">Old Money</span>! We’re excited to
            have you as part of our community and can’t wait to continue serving
            you.
          </p>
        </div>
      </div>
    </div>
  );
}
