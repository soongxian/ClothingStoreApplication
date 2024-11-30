import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            This is Forever Clothing Store, a trendy fashion destination
            offering a wide variety of stylish apparel for men and women. With a
            focus on quality and affordability, the store features everything
            from casual wear to chic, fashionable pieces that suit any occasion.
            We has something for every style. The store’s friendly atmosphere
            and excellent customer service make it a go-to place for fashion
            lovers.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+604 6462 470</li>
            <li>contact@foreverclothingstore.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ foreverclothingstore.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
