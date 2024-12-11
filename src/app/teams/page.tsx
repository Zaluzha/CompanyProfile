"use client";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

type Person = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
};

const PeopleTable: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setPeople(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <TitleBanner subtitle="Meet" title="THE TEAMS" />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          {/* ====================== Question 01 start here ======================== */}
          <div className="table w-full p-3 border-secondaryColor">
            <table className="w-full border border-secondaryColor">
              <thead className="bg-gray-1100 border-secondaryColor text-white">
                <tr className="text-secondaryColor border-b border-secondaryColor">
                  <th className="p-3">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, index) => (
                  <tr key={index} className="bg-gray-1000">
                    <td className="p-3 text-center">{index + 1}</td>
                    <td>{`${person.name.first} ${person.name.last}`}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ====================== Question 01 end here ========================== */}
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Contact Info
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Jakarta :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Rupnogor Abashik Area, <br />
                Mirpur-1, Dhaka.
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                zaluzha@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleTable;
