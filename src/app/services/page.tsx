"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import ServicesDetails from "@/ui/ServicesDetails";

const servicesData = [
  {
    no: "01",
    title: "3D Character Design & Animation",
    startingAmt: "300.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Fast Response On Feedback",
    detailsThree: "Unlimited Feedback",
    detailsFour: "Fast Rendering",
    detailsFive: "On site during Presentation",
  },
  {
    no: "02",
    title: "Architectural Visualization",
    startingAmt: "500.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Fast Response On Feedback",
    detailsThree: "Unlimited Feedback",
    detailsFour: "Fast Rendering",
    detailsFive: "On site during Presentation",
  },
  {
    no: "03",
    title: "Product Animation & Visualization",
    startingAmt: "1500.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Fast Response On Feedback",
    detailsThree: "Unlimited Feedback",
    detailsFour: "Fast Rendering",
    detailsFive: "On site during Presentation",
  },
  {
    no: "04",
    title: "Visual Effects (VFX) & Motion Graphics",
    startingAmt: "2000.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Fast Response On Feedback",
    detailsThree: "Unlimited Feedback",
    detailsFour: "Fast Rendering",
    detailsFive: "On site during Presentation",
  },
];

const Services = () => {
  let [development, setDevelopment] = useState(true);
  let [design, setDesign] = useState(false);
  let [domain, setDomain] = useState(false);
  let [hosting, setHosting] = useState(false);
  return (
    <div>
      <TitleBanner subtitle="Explore the opportunities" title="Our Services" />

      {/* ===================== Development Start here ==================== */}
      {development && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Services;
