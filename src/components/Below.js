// contact us
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
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const TABLE_HEAD20 = ["Sno", "Name of website", "Helpline Number","Email","URL"];
const TABLE_ROWS20 = [
    {
      Sno: "1",
      Nameofwebsite: "Next Generation E Ticketing",
      HelplineNumber: "14646 or 0755-6610661, 0755-4090600 (Language: Hindi and English)",
      Email: "I-tickets/e-tickets :care@irctc.co.in For Cancellation E-tickets : etickets@irctc.co.in",
      URL:<a href="https://www.irctc.co.in/nget/train-search">View website</a>
    },
    {
      Sno: "2",
      Nameofwebsite: "E-catering",
      HelplineNumber: "1323(Care number)",
      Email: "",
      URL:<a href="https://www.ecatering.irctc.co.in/">View website</a>
    },
    {
      Sno: "3",
      Nameofwebsite: "Air Ticketing",
      HelplineNumber: "1800 110 139 / 0755 - 6698100 / 4090400",
      Email: "flights@irctc.co.in",
      URL:<a href="https://www.air.irctc.co.in/">View website</a>
    },
    {
      Sno: "4",
      Nameofwebsite: "Tourism",
      HelplineNumber: "1800 110 139 / 0755 - 6698100 / 4090400",
      Email: "tourism@irctc.com",
      URL:<a href="https://www.irctctourism.com/">View website</a>
    },
    {
      Sno: "5",
      Nameofwebsite: "Maharajas' Express",
      HelplineNumber: "+91 9717635915",
      Email: "maharajas@irctc.com",
      URL:<a href="https://www.the-maharajas.com/">View website</a>
    },
    {
      Sno: "6",
      Nameofwebsite: "Buddhist train",
      HelplineNumber: "+91 9717648718",
      Email: "buddhisttrain@irctc.com",
      URL:<a href="https://www.irctcbuddhisttrain.com/">View website</a>
    },




  ];
 
export default function mybelow() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
  <>
  <div class="relative">
        <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/qwiwerdaqk9wxnhax57e"
            alt="nature image" />
        </div>
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
            Helpline Number & Email
            </Typography>
          </div>
         
        </div>
        <div>
            <Typography variant="h6" color="blue-gray">
            Railway
            </Typography>
          </div>
          <br></br>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
   <Typography>
   NTES (NATIONAL TRAIN ENQUIRY SYSTEM)
   <br></br>
Visit Website
   </Typography>
      </div>
      <div class="space-y-4">
     <Typography>
     RAIL MADAD HELPLINE
     <br></br>
Visit Website
     </Typography>
          </div>
           <div class="space-y-4">
     <Typography>
     INTEGRATED RAILWAYS HELPLINE & ENQUIRY SYSTEM(IRHES)
     <br></br>
 139
     </Typography>
          </div>
      </div>

    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
         IRCTC
        </AccordionHeader>
        <AccordionBody>
          <Card>
        <CardBody className="overflow-scroll px-0">
          <Typography>
          Business Related Helpline number and IRCTC websites
          </Typography>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD20.map((head) => (
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
            {TABLE_ROWS20.map(({ Sno, Nameofwebsite, HelplineNumber, Email,URL}, index) => {
              const isLast = index === TABLE_ROWS20.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
               <tr key={Nameofwebsite}>
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
                          {Nameofwebsite}
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
                          {HelplineNumber}
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
                          {URL}
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
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Corporate Office
        </AccordionHeader>

          
        <AccordionBody>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Registered Office / Corporate Office
        </Typography>
        <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
        Indian Railway Catering and Tourism Corporation Ltd.
        </Typography>
        <Typography>
        B 148, 11th Floor, Statesman House, Barakhamba Road, New Delhi-110001
        </Typography>
        <Typography>
        Tourism Office M 13, Punj House,New Delhi 110001
        </Typography>
        <Typography>
        Tel.No. 011-23311263/64, 23314752 , 23314784 ( For Empanelment only)
        </Typography>
        <Typography>
        For Railway tickets booked & Refund related Queries through IRCTC Delhi Customer Care No. :14646 or 0755-4090600, 0755-6610661 (Language: Hindi and English)
        </Typography>
        <Typography>
        Fax No. 011-23311259
        </Typography>
        <Typography>
        Internet Ticketing Complaints Write to: <a href="https://www.care.irctc.co.in/" class="text-blue-600">https://www.care.irctc.co.in/</a>
        </Typography>
        <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
        Internet Ticketing Services/Indian Railway Conference Association Building
        </Typography>
        <Typography>
        Internet Ticketing, State Entry Road, Indian Railway Conference Association Building, New Delhi-110055
        </Typography>
        <Typography>
        Email Id: <a href="ggmit@irctc.com" class="text-blue-600">ggmit@irctc.com</a>
        </Typography>
        <Typography>
        I-tickets/e-tickets : <a href="care@irctc.co.in" class="text-blue-600">care@irctc.co.in</a>
        </Typography>
        <Typography>
        For Cancellation E-tickets : <a href="etickets@irctc.co.in" class="text-blue-600">etickets@irctc.co.in</a>
        </Typography>
        <Typography className="mb-2 p-4 flex text-black">     
        Original GC/TTE certificate sent to :
        </Typography>
        <Typography>
        GGM/IT
        </Typography>
        <Typography>
        Indian Railway Catering and Tourism Corporation Ltd.,
        </Typography>
        <Typography>
        Internet Ticketing Centre
        </Typography>
        <Typography>
        IRCA Building
        </Typography>
        <Typography>
        State Entry Road
        </Typography>
        <Typography>
        New Delhi 110055
        </Typography>
        <Typography class="p-4">
        For IRCTC iMudra Prepaid Wallet & Card : <a href="imudracare@irctc.co.in" class="text-blue-600">imudracare@irctc.co.in</a>
        </Typography>
        <Typography>
        For IRCTC SBI Card users who do not receive the card within 01 month from the date of application kindly call on the Railway SBI Card Helpline nos. at 0124-39021212 or 18001801295 (if calling from BSNL/MTNL line) or send email to <a href="customercare@sbicard.com" class="text-blue-600">customercare@sbicard.com</a>. For other queries on your IRCTC SBI card account, kindly email at <a href="loyaltyprogram@irctc.co.in" class="text-blue-600">loyaltyprogram@irctc.co.in</a>
        </Typography>
      </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Central Control Number (Catering Services)
        </Typography>
        <Typography>
        Mobile : 9717639006
        </Typography>
        <Typography>
        Phone No: 011-23345300, 23745950
        </Typography>
        <Typography>
        Fax No.: 011-23345400
        </Typography>
    </div>
</div>

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         East Zone
        </AccordionHeader>
        <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    East Zone I & II:
        </Typography>
        <Typography >     
        Old Koilaghat Building,Ground Floor,3,Koilaghat Street, Kolkata 700001
        </Typography>
        <Typography>
        Tel.No. 033-22439045, 22133207 Fax No. 033-22439046
        </Typography>
        <Typography>
        Email Id: ggmkolkatta@irctc.com
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant Nangloi
        </Typography>
        <Typography>
        Rail Neer Plant, Northan Railways Wireless Station Area, Opposite Nangloi Bus Depot, Nangloi -110041
        </Typography>
        <Typography>
        Tel.No. 011-65152575,25949774
        </Typography>
        <Typography>
        Fax No. 011-25949773
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Lucknow
        </Typography>
        <Typography>
        Paryatan Bhawan, 2nd Floor, C-13, Vipin Khand, Gomti Nagar, Lucknow -226010
        </Typography>
        <Typography>
        Tel.No. 0522-2305522
        </Typography>
        <Typography>
        Fax No. 0522-2305533
        </Typography>
    </div>
</div>
<br></br>
<div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant Danapur:
        </Typography>
        <Typography>
        Loco Colony, South R.P.F. Barracks, Khagul, Danapur-801105 (Bihar)
        </Typography>
        <Typography>
        Tel.No. 0612-3295150
        </Typography>
        <Typography>
        Fax No. 06115-232557
        </Typography>
        <Typography>
        Email Id: railneerdanapur@irctc.com
        </Typography>
    </div>
        </AccordionBody>
      </Accordion>
     
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         North Zone
        </AccordionHeader>
        <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    North Zone
        </Typography>
        <Typography >     
        Rail Yatri Niwas Building, New Delhi Railway Station Complex, Ajmeri Gate Side, New Delhi - 110002
        </Typography>
        <Typography>
        Zonal Office Tel.No.: - 011-23234763, 23221146 , Fax: - 011-23210321
        </Typography>
        <Typography>
        North Zone Control Tele No. / Fax No.: 011-23221147 Mobile:9717640700
        </Typography>
        <Typography>
        Email Id: ggmdelhi@irctc.com

        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Patna
        </Typography>
        <Typography>
        Biscomaun Tower,4th Floor, West Gandhi Maidan, Patna - 800001
        </Typography>
        <Typography>
        Tel.No. 0612-2205801,2213993
        </Typography>
        <Typography>
        Fax No. 0612-2213993
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office -Guwahati
        </Typography>
        <Typography>
        4D, Mandvi Aptts., In Front of Ranvirra Bhawan, GNB Road, Ambari, Guwahati, Assam- 781001
        </Typography>
        <Typography>
        Tel.No. 0361-2737123
        </Typography>
        <Typography>
        Fax No. 0361-2367122
        </Typography>
    </div>
</div>
<br></br>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Jaipur
        </Typography>
        <Typography >     
        708, 7th Floor, Crystal Mall , Sawai Jai Singh Highway,Banipark, Jaipur- 302016
        </Typography>
        <Typography>
        Tel.No. 0141-4020194, 4020198
        </Typography>
        <Typography>
        Fax No. 0141-4020193
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Chandigarh
        </Typography>
        <Typography>
        SCO-80-81-8, Sector -34A, Chandigarh -160034
        </Typography>
        <Typography>
        Tel.No. 0172-4645795, 6572156
        </Typography>
        <Typography>
        Fax No. 0172-4645795
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Nangloi
        </Typography>
        <Typography>
        Northern Railway’s Wireless Station Area, Opp. Nangloi Bus Depot, Rohtak Road, Nangloi, Delhi-110041
        </Typography>
        <Typography>
        Tel.No. 011-25949774-75
        </Typography>
        <Typography>
        Email Id: railneernangloi@irctc.com
        </Typography>
    </div>
</div>
<br></br>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Hapur
        </Typography>
        <Typography >     
        I-2, Phase-III, Industrial Area, Massori Gulavathi Road, Hapur (U.P.)
        </Typography>
        <Typography>
        Tel.No. 9717648888
        </Typography>
        <Typography>
        Email Id: rnphapur@irctc.com
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Amethi
        </Typography>
        <Typography>
        Plot No. C11 & 12, UPSIDC Industrial Area, Takaria Gauriganj, Distt. Amethi
        </Typography>
        <Typography>
        Tel.No. 9839358105
        </Typography>
        <Typography>
         Email Id: railneerplantamethi@irctc.com
        </Typography>
    </div>
    </div>
        </AccordionBody>
      </Accordion>
 
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         South Zone
        </AccordionHeader>
      <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    South Zone
        </Typography>
        <Typography >     
        Rail Yatri Niwas Building, New Delhi Railway Station Complex, Ajmeri Gate Side, New Delhi - 110002
        </Typography>
        <Typography>
        Zonal Office Tel.No.: - 011-23234763, 23221146 , Fax: - 011-23210321
        </Typography>
        <Typography>
        North Zone Control Tele No. / Fax No.: 011-23221147 Mobile:9717640700
        </Typography>
        <Typography>
        Email Id: ggmdelhi@irctc.com

        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional office - Bangalore
        </Typography>
        <Typography>
        Biscomaun Tower,4th Floor, West Gandhi Maidan, Patna - 800001
        </Typography>
        <Typography>
        Tel.No. 0612-2205801,2213993
        </Typography>
        <Typography>
        Fax No. 0612-2213993
        </Typography>
    </div>
  
</div>
<br></br>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Jaipur
        </Typography>
        <Typography >     
        708, 7th Floor, Crystal Mall , Sawai Jai Singh Highway,Banipark, Jaipur- 302016
        </Typography>
        <Typography>
        Tel.No. 0141-4020194, 4020198
        </Typography>
        <Typography>
        Fax No. 0141-4020193
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Chandigarh
        </Typography>
        <Typography>
        SCO-80-81-8, Sector -34A, Chandigarh -160034
        </Typography>
        <Typography>
        Tel.No. 0172-4645795, 6572156
        </Typography>
        <Typography>
        Fax No. 0172-4645795
        </Typography>
    </div>
    </div>
    <br></br>
    <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Jaipur
        </Typography>
        <Typography >     
        708, 7th Floor, Crystal Mall , Sawai Jai Singh Highway,Banipark, Jaipur- 302016
        </Typography>
        <Typography>
        Tel.No. 0141-4020194, 4020198
        </Typography>
        <Typography>
        Fax No. 0141-4020193
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Chandigarh
        </Typography>
        <Typography>
        SCO-80-81-8, Sector -34A, Chandigarh -160034
        </Typography>
        <Typography>
        Tel.No. 0172-4645795, 6572156
        </Typography>
        <Typography>
        Fax No. 0172-4645795
        </Typography>
    </div>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        South Central Zone
        </AccordionHeader>
        <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    South Central Zone
        </Typography>
        <Typography >     
        Old Koilaghat Building,Ground Floor,3,Koilaghat Street, Kolkata 700001
        </Typography>
        <Typography>
        Tel.No. 033-22439045, 22133207 Fax No. 033-22439046
        </Typography>
        <Typography>
        Email Id: ggmkolkatta@irctc.com
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant Nangloi
        </Typography>
        <Typography>
        Rail Neer Plant, Northan Railways Wireless Station Area, Opposite Nangloi Bus Depot, Nangloi -110041
        </Typography>
        <Typography>
        Tel.No. 011-65152575,25949774
        </Typography>
        <Typography>
        Fax No. 011-25949773
        </Typography>
    </div>
</div>
<br></br>
<div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant Danapur:
        </Typography>
        <Typography>
        Loco Colony, South R.P.F. Barracks, Khagul, Danapur-801105 (Bihar)
        </Typography>
        <Typography>
        Tel.No. 0612-3295150
        </Typography>
        <Typography>
        Fax No. 06115-232557
        </Typography>
        <Typography>
        Email Id: railneerdanapur@irctc.com
        </Typography>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         Central Control
        </AccordionHeader>
        <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Contact Number
        </Typography>
        <Typography >     
        Rail Yatri Niwas Building, New Delhi Railway Station Complex, Ajmeri Gate Side, New Delhi - 110002
        </Typography>
        <Typography>
        Zonal Office Tel.No.: - 011-23234763, 23221146 , Fax: - 011-23210321
        </Typography>
        <Typography>
        North Zone Control Tele No. / Fax No.: 011-23221147 Mobile:9717640700
        </Typography>
        <Typography>
        Email Id: ggmdelhi@irctc.com

        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Patna
        </Typography>
        <Typography>
        Biscomaun Tower,4th Floor, West Gandhi Maidan, Patna - 800001
        </Typography>
        <Typography>
        Tel.No. 0612-2205801,2213993
        </Typography>
        <Typography>
        Fax No. 0612-2213993
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office -Guwahati
        </Typography>
        <Typography>
        4D, Mandvi Aptts., In Front of Ranvirra Bhawan, GNB Road, Ambari, Guwahati, Assam- 781001
        </Typography>
        <Typography>
        Tel.No. 0361-2737123
        </Typography>
        <Typography>
        Fax No. 0361-2367122
        </Typography>
    </div>
</div>
<br></br>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Jaipur
        </Typography>
        <Typography >     
        708, 7th Floor, Crystal Mall , Sawai Jai Singh Highway,Banipark, Jaipur- 302016
        </Typography>
        <Typography>
        Tel.No. 0141-4020194, 4020198
        </Typography>
        <Typography>
        Fax No. 0141-4020193
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Chandigarh
        </Typography>
        <Typography>
        SCO-80-81-8, Sector -34A, Chandigarh -160034
        </Typography>
        <Typography>
        Tel.No. 0172-4645795, 6572156
        </Typography>
        <Typography>
        Fax No. 0172-4645795
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Nangloi
        </Typography>
        <Typography>
        Northern Railway’s Wireless Station Area, Opp. Nangloi Bus Depot, Rohtak Road, Nangloi, Delhi-110041
        </Typography>
        <Typography>
        Tel.No. 011-25949774-75
        </Typography>
        <Typography>
        Email Id: railneernangloi@irctc.com
        </Typography>
    </div>
</div>
<br></br>
<div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Hapur
        </Typography>
        <Typography >     
        I-2, Phase-III, Industrial Area, Massori Gulavathi Road, Hapur (U.P.)
        </Typography>
        <Typography>
        Tel.No. 9717648888
        </Typography>
        <Typography>
        Email Id: rnphapur@irctc.com
        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Rail Neer Plant, Amethi
        </Typography>
        <Typography>
        Plot No. C11 & 12, UPSIDC Industrial Area, Takaria Gauriganj, Distt. Amethi
        </Typography>
        <Typography>
        Tel.No. 9839358105
        </Typography>
        <Typography>
         Email Id: railneerplantamethi@irctc.com
        </Typography>
    </div>
    </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         West Zone
        </AccordionHeader>
        <AccordionBody>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    West Zone Office
        </Typography>
        <Typography >     
        Rail Yatri Niwas Building, New Delhi Railway Station Complex, Ajmeri Gate Side, New Delhi - 110002
        </Typography>
        <Typography>
        Zonal Office Tel.No.: - 011-23234763, 23221146 , Fax: - 011-23210321
        </Typography>
        <Typography>
        North Zone Control Tele No. / Fax No.: 011-23221147 Mobile:9717640700
        </Typography>
        <Typography>
        Email Id: ggmdelhi@irctc.com

        </Typography>
        </div>
        <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office - Patna
        </Typography>
        <Typography>
        Biscomaun Tower,4th Floor, West Gandhi Maidan, Patna - 800001
        </Typography>
        <Typography>
        Tel.No. 0612-2205801,2213993
        </Typography>
        <Typography>
        Fax No. 0612-2213993
        </Typography>
    </div>
    <div class="space-y-4">
    <Typography className="mb-2 p-4 flex text-black" strokeWidth={2}>     
    Regional Office -Guwahati
        </Typography>
        <Typography>
        4D, Mandvi Aptts., In Front of Ranvirra Bhawan, GNB Road, Ambari, Guwahati, Assam- 781001
        </Typography>
        <Typography>
        Tel.No. 0361-2737123
        </Typography>
        <Typography>
        Fax No. 0361-2367122
        </Typography>
    </div>
</div>

        </AccordionBody>
      </Accordion>
    </Fragment>
  </>
  );
}