import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was founded with a passion for fashion, Forever Clothing
            Store is dedicated to delivering versatile pieces that suit every
            lifestyle.
          </p>
          <p>
            We pride ourselves on offering personalized customer service, so you
            can always find exactly what you're looking for. We believe that
            fashion is for everyone, and we work hard to make sure you leave our
            store feeling confident and ready to take on the world.
          </p>
          <p>
            Thank you for choosing Forever Clothing Store – where style is never
            out of season!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals through fashion that blends
            timeless style with exceptional quality. We are dedicated to
            offering a wide range of clothing that reflects personal expression
            and provides the utmost comfort.
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Our rigorous quality assurance process ensures that each item we
            offer is crafted with attention to detail, from the selection of
            fabrics to the final stitch.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We strive to make your shopping experience as convenient as
            possible, offering easy online browsing, secure checkout, and fast
            shipping. Whether shopping from the comfort of your home or on the
            go, we ensure that your experience is seamless and hassle-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team is dedicated to providing exceptional customer service,
            ensuring that your needs are met with a personalized touch. From
            product inquiries to after-purchase support, we're here to assist
            you every step of the way, making sure you feel valued and cared
            for.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
