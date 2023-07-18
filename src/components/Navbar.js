
import React from "react";
import {
  Router,
  Routes,
  Route,
Navbar,
 Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  List,
  ListItem,
  Typography,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import {
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="text-black flex item-center">   
                <li variant="small" color="blue-gray" className="p-3 font-normal">  
                <Link to="/">Home</Link>  
              </li>  
              <li variant="small" color="blue-gray" className="p-3 font-normal">  
                <Link to="/aboutus">About Us</Link>  
              </li>  
              <li variant="small" color="blue-gray" className="p-3 font-normal">  
                <Link to="/ourbusiness">Our Business</Link>  
              </li> 
              <li variant="small" color="blue-gray" className="p-3 font-normal">  
                <Link to="/contactus">Contact Us</Link>  
              </li>  
            </ul>  

            
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-slate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img
        className="h-18 w-25"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/chyzna4hwso5bpxcei4b"
        alt="nature image"
          />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>


    </>
  );
}