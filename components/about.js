import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center p-32 mt-12">
      <Head>
        <title>About Us</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mt-12 font-light text-gray-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non
          consectetur a erat nam. At volutpat diam ut venenatis tellus in metus
          vulputate eu. Scelerisque purus semper eget duis at tellus at.
          Tincidunt augue interdum velit euismod in pellentesque. A diam
          sollicitudin tempor id eu nisl nunc. Facilisi morbi tempus iaculis
          urna id. Risus feugiat in ante metus dictum. Tempus iaculis urna id
          volutpat lacus laoreet non. Aliquet bibendum enim facilisis gravida
          neque convallis a. Pharetra diam sit amet nisl suscipit adipiscing
          bibendum est ultricies. Feugiat nisl pretium fusce id. Montes nascetur
          ridiculus mus mauris vitae ultricies leo integer malesuada. Bibendum
          ut tristique et egestas quis ipsum suspendisse. Mattis vulputate enim
          nulla aliquet porttitor lacus luctus accumsan. Convallis posuere morbi
          leo urna molestie at. Sagittis orci a scelerisque purus semper eget
          duis. Risus nullam eget felis eget nunc lobortis mattis aliquam. Id eu
          nisl nunc mi ipsum faucibus vitae aliquet nec. Habitant morbi
          tristique senectus et netus et.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
