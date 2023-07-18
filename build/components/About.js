
import React from "react";
import {
  Link,
  Router,
  Routes,
  Route,

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

const TABLE_HEAD = ["Sno", "name", "Designation", "ContactNumber","Email","Photograph"];
const TABLE_ROWS = [
    {
      Sno: "1",
      name: "Smt. Seema Kumar",
      Designation: "Chairman & Managing Director (Additional Charge)",
      ContactNumber: "011-23311261",
      Email: "cmd@irctc.com",
      Photograph: <img
                    className="h-40 w-25"
                    src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/xg8grlvv7to0gqzfqock"
                    alt="nature image" />
    },
    {
      Sno: "2",
      name: "Sh. K.K. Mishra",
      Designation: "Director (Tourism and Marketing)(Additional Charge)",
      ContactNumber: "011-23311258",
      Email: "dtm@irctc.com",
      Photograph: <img
                    className="h-40 w-25"
                    src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/ez1pjwqb83ldw41073xd"
                    alt="nature image" />
    },
      {
        Sno: "3",
        name: "Shri. Ajit Kumar",
        Designation: "Director (Finance)& CFO",
        ContactNumber: "011-23318273",
        Email: "df@irctc.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/cvazyoh1nyzmnp0dz5qn"
                      alt="nature image" />
      },
      {
        Sno: "4",
        name: "Dr. Lokiah RaviKumar",
        Designation: "Director (Catering and Services)",
        ContactNumber: "011-23311257",
        Email: "dcs@irctc.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/xcrsgiapmbyjnwpclooa"
                      alt="nature image" />
      },
      {
        Sno: "5",
        name: "Shri. Neeraj Sharma",
        Designation: "	Government Director",
        ContactNumber: "011-47845352",
        Email: "m.gangeya@gov.in",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/bwwlj0bpxscx6hvg1wbc"
                      alt="nature image" />
      },
      {
        Sno: "6",
        name: "	Shri Manoj Kumar Gangeya",
        Designation: "Director (Tourism and Marketing)(Additional Charge)",
        ContactNumber: "011-23311258",
        Email: "dtm@irctc.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qdg0yb8bdkbrhwjypgac"
                      alt="nature image" />
      },
      {
        Sno: "7",
        name: "Shri. Vinay Kumar Sharma",
        Designation: "	Independent Director",
        ContactNumber: "8370006170",
        Email: "id.sharmavinaykumar@gmail.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/fwl5tj0of731vmkdpl0u"
                      alt="nature image" />
      },
      {
        Sno: "8",
        name: "Shri. Namgyal Wangchuk",
        Designation: "Independent Director",
        ContactNumber: "9797345637",
        Email: "namgyalwangchuk04@gmail.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/t6xf8y5vkglfesc9hcul"
                      alt="nature image" />
      },
      {
        Sno: "9",
        name: "Shri. Devendra Pal Bharti",
        Designation: "Independent Director",
        ContactNumber: "	9412427391",
        Email: "dpbhartiadv@gmail.com",
        Photograph: <img
                      className="h-40 w-25"
                      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/n0epypcnuunvz2hvog8a"
                      alt="nature image" />
      },
  ];
  const TABLE_HEAD1 = ["Sno"," name", "Designation/Department", "Telephone", "EmailID"];
  const TABLE_ROWS1 = [
    {
      Sno: "1.",
      name: "Smt. Seema Kumar",
      DesignationDepartment: "Chairman & Managing Director (Additional Charge)",
      Telephone: "011-23311261",
      EmailID: "cmd@irctc.com",
    },
    {
      Sno: "2.",
      name: "Sh. Ajit Kumar",
      DesignationDepartment: "Director (Finance)",
      Telephone: "011-23318273",
      EmailID: "df@irctc.com",
    },
    {
      Sno: "3.",
      name: "Dr. Lokiah RaviKumar",
      DesignationDepartment: "Director (Catering Services)",
      Telephone: "011-23311257",
      EmailID: "dcs@irctc.com",
    },
    {
      Sno: "4.",
      name: "Sh. K. K. Mishra",
      DesignationDepartment: "Director (Tourism and Marketing)",
      Telephone: "011-23311258",
      EmailID: "dtm@irctc.com",
    },
    // {
    //   Sno: "",
    //   name: "",
    //   DesignationDepartment: "",
    //   Telephone: "",
    //   EmailID: "",
    // },
    {
        Sno: "5.",
        name: "Dr. Parag Agrawal",
        DesignationDepartment: "Chief Vigilance Officer",
        Telephone: "011-23318231",
        EmailID: "cvo@irctc.com",
      },
       {
      Sno: "6.",
      name: "Sh. Sunil Kumar",
      DesignationDepartment: "Group General Manager (Internet Ticketing)",
      Telephone: "011-23741116",
      EmailID: "ggmit@irctc.com",
    },

    {
      Sno: "7.",
      name: "Smt. Rashmi Gautam",
      DesignationDepartment: "Group General Manager (Mobile Catering Services)",
      Telephone: "011-",
      EmailID: "ggmmcs@irctc.com",
    },
    {
      Sno: "8.",
      name: "Sh. Tanweer Hasan",
      DesignationDepartment: "Group General Manager (Tourism)",
      Telephone: "011-",
      EmailID: "ggmtourism@irctc.com",
    },
    {
      Sno: "9.",
      name: "Sh. Awdesh Kumar",
      DesignationDepartment: "Group General Manager (Services)",
      Telephone: "011-47537247",
      EmailID: "ggmservices@irctc.com",
    },
    {
      Sno: "10.",
      name: "Sh. Gaisingam Kabui",
      DesignationDepartment: "Group General Manager (Finance)",
      Telephone: "011-23718729",
      EmailID: "ggmfin2@irctc.com",
    },
    {
      Sno: "11.",
      name: "Sh. Sandip Trivedi",
      DesignationDepartment: "Group General Manager (HRD)",
      Telephone: "011-23701238",
      EmailID: "ggmhrd@irctc.com",
    },
    {
      Sno: "12.",
      name: "Sh. Sudheesh V.C",
      DesignationDepartment: "Group General Manager (IT-2)",
      Telephone: "011-23741115",
      EmailID: "ggmit2@irctc.com",
    },
    {
      Sno: "13.",
      name: "Sh. Sanjay Priyadarshnam",
      DesignationDepartment: "Group General Manager (Railneer Projects)",
      Telephone: "011-",
      EmailID: "ggmrailneer@irctc.com",
    },
    {
      Sno: "14.",
      name: "Sh. Vinay Kumar Pathak",
      DesignationDepartment: "Group General Manager (Procurement & Tendering)",
      Telephone: "011-",
      EmailID: "ggmprocurement@irctc.com",
    },
    {
      Sno: "15.",
      name: "Sh. Vinay Kumar Pathak	",
      DesignationDepartment: "Group General Manager (Additional charge Infrastructure)",
      Telephone: "011-",
      EmailID: "",
    },
    {
      Sno: "16.",
      name: "Sh. Rajesh Rana ",
      DesignationDepartment: "General Manager (Mobile Catering Services)",
      Telephone: "011-23311264",
      EmailID: "rrana2473@irctc.com",
    },
    {
      Sno: "17.",
      name: "Sh. Sudhir Warrier",
      DesignationDepartment: "General Manager (Other Catering Services)",
      Telephone: "011-23318462",
      EmailID: "swarrier@irctc.com",
    },
    {
      Sno: "18.",
      name: "Smt. Suman Kalra",
      DesignationDepartment: "Company Secretary",
      Telephone: "	011-23327746",
      EmailID: "companysecretary@irctc.com",
    },
    {
      Sno: "19.",
      name: "Shri Pradeep Kumar Dhiman",
      DesignationDepartment: "General Manager (Tourism)",
      Telephone: "011-",
      EmailID: "pdhiman4802@irctc.com",
    },
  ];
 
export default function myabout() {
  return (
    <>
    <Card className="mt-6  w-93">
    <CardHeader color="blue-gray" className="relative h-56">
      <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/hm61inifnk4du3i1amux" alt="img-blur-shadow" layout="fill"  />
      <div class="centered">Centered</div>
    </CardHeader>

    <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2">
      ABOUT US | HOME
    </Typography>
    <Typography>
    Indian Railway Catering and Tourism Corporation Ltd.&quot; (IRCTC) is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of India.&quot; IRCTC was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade,&quot; professionalize and manage the catering and hospitality services at stations, &quot;on trains and other locations and to promote domestic and international tourism through development of budget hotels,&quot; special tour packages, information & commercial publicity and global reservation systems. &quot;The authorized capital of the company is 250 crores and paid up capital is 160 crores. &quot;It’s registered and Corporate Office is situated at New Delhi.
    </Typography>
  </CardBody>
  <Typography

    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal"
  >
    <a href="#" className="flex items-center">
      Read Below
    </a>
  </Typography>
</Card>
<Typography variant="h5" color="blue-gray" className="mb-2">
  The core activities of the Company are detailed below:
</Typography>
    <Card className="w-96">
    <List>
      <ListItem>1. Catering & Hospitality</ListItem>
      <ListItem>2. Internet Ticketing</ListItem>
      <ListItem>3. Travel &Tourism</ListItem>
      <ListItem>4. Packaged Drinking Water (Rail Neer)</ListItem>
    </List>
  </Card>
  <Typography variant="h5" color="blue-gray" className="mb-2">
    At present, the Company operates through:
  </Typography>
  <Card className="w-96">
    <List>
      <ListItem>1. Fourteen Rail Neer Plants at Nangloi-Delhi, Danapur-Bihar, Palur-Tamil Nadu, Ambernath-Maharashtra, Amethi (Uttar Pradesh), Parassala-, Tamil Nadu, Bilaspur (Chhatisgarh) Hapur (Uttar Pradedh), Sanand- Gujaratd, Mandideep-Madhya Pradesh, Jagiroad-Assam, Maneri-(Madhya Pradesh), Nagpur, (Maharashtra) and Sankrail-Kolkatta</ListItem>
      <ListItem>2. Eleven Base Kitchens at located at New Delhi, Howrah, Ahmedabad, Patna, Mumbai Central, Mumbai CST, Ballarshah, Nagpur, Balasore, Sealdah and Kharagpur Jn 5 Zonal Offices, namely, New Delhi, Mumbai, Kolkata, Chennai, Secundrabad</ListItem>
      <ListItem>3. Five Zonal Offices at New Delhi, Mumbai, Kolkata, Chennai & Secundrabad</ListItem>
      <ListItem>4. Ten Regional Offices at Lucknow, Chandigarh, Jaipur, Bhopal, Ahmadabad, Guwahati, Bhubaneswar, Patna, Ernakulam and Bangalore</ListItem>
      <ListItem>5. One Internet Ticketing Office at New Delhi</ListItem>
      <ListItem>6. One Tourism office at New Delhi.</ListItem>
    </List>
  </Card>
  <img
    src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/dllj5uy8variaa8odbtn"
    alt="image 1"
    className="h-30 w-96"
   />

  <Card className="h-full w-full">
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
          Board of Directors
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
      </div>
    </CardHeader>
    
    <CardBody className="overflow-scroll px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Sno, name, Designation, ContactNumber, Email,Photograph}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
             <tr key={name}>
                 <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Sno}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                 <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {ContactNumber}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Email}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Photograph}
                </Typography>
              </td>
               </tr>
            );
          })}
        </tbody>
      </table>
    </CardBody>
  </Card>
  <div class="relative">
      <img
          className="h-full w-full"
          src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/mubckizs4vlx38mupii1"
          alt="nature image" />
        <h2 class="absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Key Executives</h2>
      </div>

      <Card className="h-full w-full">
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
          Key Executives |  Home
          </Typography>
        </div>
      </div>
    </CardHeader>
    
    <CardBody className="overflow-scroll px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD1.map((head) => (
              <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS1.map(({ Sno, name, DesignationDepartment, Telephone, EmailID}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
             <tr key={name}>
                 <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Sno}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                 <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {DesignationDepartment}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Telephone}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                  {/* <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {Sno}
                    </Typography> */}
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {EmailID}
                      </Typography>
                      </div>
                      {/* <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Designation}
                      </Typography>
                      </div> */}
                    
                  </div>
                </td>
                <td className={classes}>

              </td>
               </tr>
            );
          })}
        </tbody>
      </table>
    </CardBody>
  </Card>
  <div class="relative">
      <img
          className="h-full w-full"
          src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/afzj7ms1o7dfapwwpn8n"
          alt="nature image" />
        <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
          Organization Structure |  Home
          </Typography>
        </div>
      </div>
      </div>
      <img
      src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/jtswppeprgewcp7cton4"
      alt="image 1"
      className="h-full w-full object-cover"
    />
      </>
  );
}