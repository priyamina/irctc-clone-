
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


const TABLE_HEAD2 = ["Sno", "Location/Plant Name", "Production Capacity(Bottles per day)", "Status"];
const TABLE_ROWS2 = [
    {
      Sno: "1",
      LocationPlantName: "Bhusawal (MH)",
      ProductionCapacity: "72,000",
      Status: "Under Construction",
    },
    {
      Sno: "2",
      LocationPlantName: "Mallavalli (Vijayawada)",
      ProductionCapacity: "72,000",
      Status: "Under Construction",
    },
    {
      Sno: "3",
      LocationPlantName: "Bhubaneswar",
      ProductionCapacity: "72,000",
      Status: "Under Construction",
    },
    {
      Sno: "4",
      LocationPlantName: "Vishakhapattanam",
      ProductionCapacity: "72,000",
      Status: "Under Construction",
    },
    {
      Sno: "5.",
      LocationPlantName: "Kota",
      ProductionCapacity: "72,000",
      Status: "Under tendering process",
    },
  ];
  const TABLE_ROWS_2 = [
    {
      name: "Address",
      job: "Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)",
    },
    {
      name: "Contact No.-",
      job: "9004080007",
    },
    {
      name: "E-mail id",
      job: "rnpsanand@irctc.com",
    },
  ];
  
  const TABLE_ROWS_3 = [
      {
        name: "Address",
        job: "Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)",
      },
      {
        name: "Contact No.-",
        job: "9004080007",
      },
      {
        name: "E-mail id",
        job: "rnpsanand@irctc.com",
      },
    ];
  
    const TABLE_ROWS_4 = [
      {
        name: "Address",
        job: "GIP Dam, Near additional MIDC, Post Anand Nagar, Ambernath (East), Dist. Thane, Maharashtra-421506",
      },
      {
        name: "Contact No.-",
        job: "9004082752",
      },
      {
        name: "E-mail id",
        job: "ambernath.rnp@irctc.com",
      },
    ];
  
    const TABLE_ROWS_5 = [
      {
        name: "Address",
        job: "Plot No. F-20, Bhusawal Industrial Area, Bhusawal, Dist.� Jalgaon (Maharastra)",
      },
      {
        name: "Status",
        job: "Under Construction",
      },
    ];
  
    const TABLE_ROWS_6 = [
      {
          name: "Address",
          job: "Plot No. 11, Sec- E, IGC Maneri Dist. Mandla (Jabalpur)",
        },
        {
          name: "Contact No.-",
          job: "9831042147",
        },
        {
          name: "E-mail id",
          job: "rnpmaneri@irctc.com",
        },
    ];
  
    const TABLE_ROWS_7 = [
      {
          name: "Address",
          job: "FP3/8, Food Park, Phase-III, Sankrail",
        },
        {
          name: "Contact No.-",
          job: "9831042147",
        },
        {
          name: "E-mail id",
          job: "rnpsankrail@irctc.com",
        },
    ];
  
    const TABLE_ROWS_8 = [
      {
          name: "Address",
          job: "Village Borkhal under Uttar khola Mouza, Amlighat, Dist.Morigaon,Guwahati (Assam)",
        },
        {
          name: "Contact No.-",
          job: "9435060250",
        },
        {
          name: "E-mail id",
          job: "rnpjagiroad@irctc.com",
        },
    ];
  
    const TABLE_ROWS_9 = [
      {
          name: "Address",
          job: "Loco Colony, South R.P.F. Barracks, Khagul, Danapur-801105 (Bihar)",
        },
        {
          name: "Contact No.-",
          job: "0612-3295150",
        },
        {
          name: "E-mail id",
          job: "railneerdanapur@irctc.com",
        },
    ];
  
    const TABLE_ROWS_10 = [
      {
          name: "Address",
          job: "Northern Railway�s Wireless Station Area, Opp. Nangloi Bus Depot, Rohtak Road, Nangloi, Delhi-110041",
        },
        {
          name: "Contact No.-",
          job: "011-25949774-75",
        },
        {
          name: "E-mail id",
          job: "railneernangloi@irctc.com",
        },
    ];
  
    const TABLE_ROWS_11 = [
      {
          name: "Address",
          job: "I-2, Phase-III, Industrial Area, Massori Gulavathi Road, Hapur (U.P.)",
        },
        {
          name: "Contact No.-",
          job: "9717640700",
        },
        {
          name: "E-mail id",
          job: "rnphapur@irctc.com",
        },
    ];
  
    const TABLE_ROWS_12 = [
      {
          name: "Address",
          job: "Plot no. - 5A(1), Industrial Area Mehatpur, Dist. - Una",
        },
        {
          name: "Contact No.-",
          job: "9717640700",
        },
        {
          name: "E-mail id",
          job: "rnpuna@irctc.com",
        },
    ];
  
    const TABLE_ROWS_13 = [
      {
          name: "Address",
          job: "Plot No. C11 & 12, UPSIDC Industrial Area, Takaria Gauriganj, Distt. Amethi",
        },
        {
          name: "Contact No.-",
          job: "9839358105",
        },
        {
          name: "E-mail id",
          job: "railneerplantamethi@irctc.com",
        },
    ];
  
    const TABLE_ROWS_14 = [
      {
          name: "Address",
          job: "Plot No. 22/23, Sector-B, Sirigitti Industrial Area, Dist. Bilaspur, (CG)- 495004",
        },
        {
          name: "Contact No.-",
          job: "97176492215",
        },
        {
          name: "E-mail id",
          job: "railneerbilaspur@irctc.com",
        },
    ];
  
    const TABLE_ROWS_15 = [
      {
          name: "Address",
          job: "Super Thermal Power Station premises located at Simhadri, Dist. Visakhapatnam, Andhra Pradesh - 531020",
        },
        {
          name: "Status",
          job: "Under Construction",
        },
    ];
  
    const TABLE_ROWS_16 = [
      {
          name: "Address",
          job: "Plot No.- 13(P) & 14 (P), Chhatabar Industrial Area, Bhubaneswar- 752054",
        },
        {
          name: "Status",
          job: "Under Construction",
        },
    ];
  
    const TABLE_ROWS_17 = [
      {
          name: "Address",
          job: "Station, Taluk - Chenagalpattu, Distt. Kanchipuram, Tamilnadu",
        },
        {
          name: "Contact No.-",
          job: "044-27437007",
        },
        {
          name: "E-mail id",
          job: "railneerpalur@irctc.com",
        },
    ];
  
    const TABLE_ROWS_18 = [
      {
          name: "Address",
          job: "Railway Yard, Near Parassala Railway Station, Kerala-695502",
        },
        {
          name: "Contact No.-",
          job: "0471-2203355",
        },
        {
          name: "E-mail id",
          job: "railneerplantparassala@irctc.com",
        },
    ];
  
    const TABLE_ROWS_19 = [
      {
          name: "Address",
          job: "Plot no-9/21, Model Industrial Park, Dist. Krishan,Mallavali ,Vijaywada(AP).",
        },
        {
          name: "Status",
          job: "Under Construction",
        },
    ];
       
const currentYear = new Date().getFullYear();
export default function myexample() {
  return (
  // our buisness
 <>
      <div class="relative">
        <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/ctbgsnxs485mi0o6xv80"
            alt="nature image" />
          <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue">
            Rail Neer Plants
            </Typography>
          </div>
        </div>
        </div>
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          INTRODUCTION
        </Typography>
        <p class="text-left ...">To enhance passenger amenities, the IRCTC launched Rail Neer, a branded packaged drinking water for the rail commuters. Rail Neer is processed, purified and bottled at state-of-art plants. Completely automatic plant and no manual handling of product water at any stage. IRCTC stands for quality and has a key role in ensuring service and product of the highest quality for the rail passenger as well as visitor to any railway premises. High quality product can only be ensured when production is in-house under full control and supervision of IRCTC.
At present, IRCTC has fourteen operational Rail Neer Plants at Nangloi, Danapur, Palur, Ambernath, Amethi, Parassala, Bilaspur, Sanand, Hapur, Mandideep, Nagpur, Jagiroad, Maneri and Sankrail out of which, Rail Neer Plants at Amethi, Parassala, Nagpur, Sanand, Hapur, Mandideep, Jagiroad, Maneri and Sankrail are under PPP mode, further six more plants are being set up under PPP mode with capital support from IRCTC. Cumulative production capacity of above fourteen Rail Neer Plants is 18.40 lakh bottles per day which will likely be increased to 18.40 lakh bottles per day in FY 2021-22 by setting up six more plants</p>
      </CardBody>
      
    </Card>
    <Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
          Nangloi (Delhi)
        </Typography>
        <Typography>
        This is the first plant set up by IRCTC in 2003. This is located in West Delhi. The purpose was to supply safe drinking water to important trains originating from New Delhi and Nizammudin. Plant is provided with solar evaporation pond.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        May 2003
        </Typography>
        <Typography>
        7000 sq mtr
        </Typography>
        <Typography>
        120000 bottles/day
        </Typography>
        <Typography>
            Northern Railway's Wireless Station Area Opp. Nangloi Bus Depot, Nangoli, Delhi-110041,
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/yjoos1zowkriet6pbyyc"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
         Danapur (Patna)
        </Typography>
        <Typography>
        This is the second plant set up by IRCTC in 2004. This is located near Patna in Bihar. The purpose was to supply safe drinking water to trains and stations in state of Bihar and Howrah and Sealdah stations in West Bengal.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        March 2004
        </Typography>
        <Typography>
        10000 sq mtr
        </Typography>
        <Typography>
        102000 bottles/day
        </Typography>
        <Typography>
        Rail Neer Plant, Loco Colony, South of RPF Barracks Khagaul, Danapur, Patna – 801105 ,Ph- 06115-232557, Fax- 06115-232557
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/m8ibmmx6qapxn2tyuyc6"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Palur (Chennai)
        </Typography>
        <Typography>
        This is the third plant set up by IRCTC in 2010. This is located near Chennai in Tamil Nadu. The purpose is to supply safe drinking water to trains and stations in the state of Tamilnadu and Karnatka.

The plant has been setup on area of 4500 sq mtrs. The building is constructed in such a manner that there is no need of artificial lighting during day time.

The waste water discharge from Water treatment plant has been reduced to 10%. This is achieved by incorporating concepts of Secondary RO in the Water treatment scheme.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July,2010
        </Typography>
        <Typography>
        9000 sq mtr
        </Typography>
        <Typography>
      
180000 bottles/day
        </Typography>
        <Typography>
        Rail Neer Plant, Palur Railway Station, Chengalpattu – Kanchipuram Main Road, Palur Village, Chengalpattu Taluk, Kanchipuram District, Pin - 603 101, Ph-044-28363725
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rnppyezs1yn4mxucatrj"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Ambernath (Maharashtra)

        </Typography>
        <Typography>
        This is the fourth plant set up by IRCTC in 2014. This is located near Mumbai in Maharashtra. The purpose is to supply safe drinking water to trains and stations in state of Maharashtra.


        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        October, 2014
        </Typography>
        <Typography>
        20,000 sq mtr
        </Typography>
        <Typography>
        2,00,000 bottles/day
        </Typography>
        <Typography>
        GIP Dam, Near Additional MIDC, Post- Anand Nagar, Ambarnath, Distt.- Thane (M.H.)- 421506.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/p1uwd2exxrsnrga2m1vu"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Amethi (Uttar Pradesh)

        </Typography>
        <Typography>
        This is the fifth plant (first plant under PPP) set up by IRCTC in 2015. This is located near Gauriganj in Uttar Pradesh. The purpose is to supply safe drinking water to trains and stations in state of Uttar Pradesh.

        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        March, 2015
        </Typography>
        <Typography>
        8,221 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        C-11 & C-12, Industrial Area, Tikaria, Gaurigam, Amethi (U.P.)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/lbzoicqcgmut7sg4jk7t"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Parassalla (Kerala)

        </Typography>
        <Typography>
        This is the Sixth plant (second plant under PPP) set up by IRCTC in 2016. This is located near Parassala in Trivandrum. The purpose is to supply safe drinking water to trains and stations in state of Kerala.

        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        June, 2015
        </Typography>
        <Typography>
        4,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Survey No. 561/1, in block No. 50 of Parasalla Village.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/dyqsdoc3ver7smrs2wef"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Bilaspur (Chhattisgarh)

        </Typography>
        <Typography>
        This is the seventh plant set up by IRCTC in 2017. This is located near Bilaspur in Chhattisgarh. The purpose is to supply safe drinking water to trains and stations in state of Chhattisgarh and Orrisa..
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        June, 2017
        </Typography>
        <Typography>
        8,129 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 22 & 23, Sec.-B, Sirgitti Industrial Area, Bilaspur, Dist.- Bilaspur (C.G.)-495004
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/q50xwbtvfdhctdymv1tp"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Hapur (Uttar Pradesh)

        </Typography>
        <Typography>
        This is the eighth plant set up by IRCTC in 2019. This is located near Masuri Gulawati Road (NCR) at Hapur in Uttar Pradesh. The purpose is to supply safe drinking water to trains and stations in NCR, Western U.P., Haryana, Uttarakhand and Rajasthan
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        April, 2019
        </Typography>
        <Typography>
        6,000 sq mtr
        </Typography>
        <Typography>
        1,00000 bottles/day
        </Typography>
        <Typography>
        I-2, Phase-III, Industrial Area, Massori- Gulawati Road, Hapur (U.P.).
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rcka0dv30eoo3rmm8rrv"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Sanand (Ahemdabad)

        </Typography>
        <Typography>
          
This is the Ninth plant set up by IRCTC in 2019. This is located near Sanand in Ahmadabad. The purpose is to supply safe drinking water to trains and stations in state of Gujarat.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        April, 2019
        </Typography>
        <Typography>
        5,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 668, Sanand-II, Industrial Estate, Ahmadabad.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/pdiy2klw0wjdjiqqo6co"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Mandideep (Bhopal)

        </Typography>
        <Typography>
        This is the Tenth plant set up by IRCTC in 2019. This is located near Mandideep in Bhopal. The purpose is to supply safe drinking water to trains and stations in state of Madhya Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July, 2019
        </Typography>
        <Typography>
        5,189.6 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot no. 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/gq4nchyyykakrezj2ws2"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Nagpur (Maharashtra)

        </Typography>
        <Typography>
        This is the Eleventh plant set up by IRCTC in 2019. This is located at Industrial Area Butibori near Nagpur in Maharashtra. The purpose is to supply safe drinking water to trains and stations in state of Maharashtra.


        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        August, 2019
        </Typography>
        <Typography>
        6,000 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
          
Plot No.- 01, Warehousing Complex, Industrial Area, Manideep, Phase-II, Dist. Raisen (MP)
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/youpfpjr84djjcyv2v5i"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Jagiroad, Guwahati (Assam)

        </Typography>
        <Typography>
        This is the twelfth Rail Neer Plant set up by IRCTC in 2019. This is located at Amlighat, Dist. - Morigaon, Guwahati in Assam. The purpose is to supply safe drinking water to trains and stations in the state of Assam.

        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        November, 2019
        </Typography>
        <Typography>
        6,720 sq mtr
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Village Borkhal under Uttar khola Mouza, Amlighat, Dist.Morigaon, Guwahati (Assam) � 782410.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/ulwpzykk6tng0wqkakwj"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Sankrail (Howrah)

        </Typography>
        <Typography>
        This is the thirteen Rail Neer Plant set up by IRCTC in 2020. This is located at Food Park, Phase-III, Sankrail in Howrah (West Bengal). The purpose is to supply safe drinking water to trains and stations in the state of West Bengal..
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        January, 2020
        </Typography>
        <Typography>
        8,094 sq. mtr.
        </Typography>
        <Typography>
        1,00,000 bottles/day
        </Typography>
        <Typography>
        FP3/8, Food Park, Phase-III, Sankrail, Howrah (West Bengal) - 711302
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/bp75z8wuftcl6q9xkh3h"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Maneri (Jabalpur)

        </Typography>
        <Typography>
          
This is the fourteenth Rail Neer Plant set up by IRCTC in 2020. This is located at Maneri Dist. Mandla (near Jabalpur) in Madhya Pradesh. The purpose is to supply safe drinking water to trains and stations in the state of Madhya Pradesh.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        February, 2020
        </Typography>
        <Typography>
        14,500 sq. mtr.
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. - 11, Sec - E, IGC Maneri Dist. Mandla (Jabalpur), Madhya Pradesh � 481885
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/jxv82d1mdzx7z4vkbtvt"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Una (HP)

        </Typography>
        <Typography>
        This is the fourteenth Rail Neer Plant set up by IRCTC in 2021. This is located at Industrial Area Mehatpur Tehsil, Dist. - Una in Himachal Pradesh. The purpose is to supply safe drinking water to trains and stations in the state of Himachal Pradesh..
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        Establishment:
        </Typography>
        <Typography>
        Factory area:
        </Typography>
        <Typography>
        Production Capacity:
        </Typography>
        <Typography>
        Address:
        </Typography>
      </div>
    <div class="space-y-4">
        <Typography>
        July, 2021
        </Typography>
        <Typography>
        6,188 sq. mtr.
        </Typography>
        <Typography>
        72,000 bottles/day
        </Typography>
        <Typography>
        Plot No. 5-A (1) at Industrial Area Mehatpur Tehsil, Dist.- Una (H.P.) � 174315.
        </Typography>
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/jirnjnwwuqt8rhdyxspo"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Manufacturing Process

        </Typography>
        <Typography>
        Water drawn from bore wells is stored in an underground reservoir and pumped to the state of the art water treatment plant.
        </Typography>
        <Typography>
        The plant technology employs eight stages purification processes capable of yielding water quality conforming to BIS standard IS 14543-2004.
        </Typography>
        <div class="grid grid-cols-3 gap-8">
    <div class="space-y-4">
        <Typography>
        1. Activated Carbon Filter; Stage 1 & 2 – Stage 1 removes dust, dead microbes, odour/colour and stage 2 is for removing pesticides.
        </Typography>
        <Typography>
        2. Auto Softener Unit (ASF) - Hardness of water is removed by ion exchange.
        </Typography>
        <Typography>
        3. Ultra Filtration Unit (0.001 micron membrane)–Colloidal, suspended particles and pyrogenic species are filtered out through Ultra Filtration membranes.
        </Typography>
        <Typography>
        4. Reverse Osmosis (membrane 0.0001 micron) –All dissolved impurities are removed. Anti scaling agent not used. (All competitors use it to enhances membrane life)
        </Typography>
        <Typography>
        5. Marble chip filter- To boost "pH". Exclusive process adopted by Rail Neer.
        </Typography>
        <Typography>
        6. Two stage Micron Filters (first membrane 1 micron followed by 0.2 micron)- Impurities with size more than 0.2 micron are filtered out.
        </Typography>
        <Typography>
        7. Ultra Violet Sterilizer Unit- UV-light causes change in the genetic material of micro organisms and thus prevents them from reproducing.
        </Typography>
        <Typography>
        8. Ozonising Unit- Water comes in contact with ozone gas for final disinfection from the micro organisms. The nascent oxygen is powerful oxidising agent and kills the microbes.
        </Typography>
      </div>
  
    <div>
    <img
        className="h-full w-140"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/t8ncypxuboluxvv6vmy3"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Automatic Bottle Blowing Machine

        </Typography>
        <Typography>
        Rail Neer bottles are manufactured with automatic blowing machine (Make –M/s Sidel India Ltd) at plant with high grade
        <br></br> resin performs. Preforms are made only with Husky/Kraussmaffei/ASB machine.
        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
      
      </div>
    <div class="space-y-4">
        
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/vcwo3cljkrpd2xhjjcr7"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
    <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    Automatic Rinsing Filling & Capping Machine

        </Typography>
        <Typography>
        Bottle blown at blowing machine travels through air conveyer to automatic Rinsing Filling & Capping machine where bottles are rinsed in inverted position by very high pressure jet and water is completely drained out as bottle is inverted then it get filled with the help of nozzle and passed to capper where the same get capped. The temperature of filling area is kept at 20 degree centigrade and this area is completely enclosed and restricted area and no one except filling operator is allowed to enter the area.
        </Typography>
        <br>
        </br>
        <Typography>
        Rail Neer plants at Danapur, Nangloi, Palur and Ambernath are accredited with ISO: 9001- 2008 quality management system certification. Rail Neer Plant at Ambernath is accredited with 22000:2015 certifications. Rail Neer Packaged Drinking Water has been ranked as top performer by "Consumer Voice" Magazine in 2017


        </Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
      
      </div>
    <div class="space-y-4">
        
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/kxpbdnepnr12w5joglxu"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
   
Upcoming Rail Neer Plants

        </Typography>
        <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD2.map((head) => (
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
            {TABLE_ROWS2.map(({ Sno, LocationPlantName, ProductionCapacity, Status}, index) => {
              const isLast = index === TABLE_ROWS2.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
               <tr key={LocationPlantName}>
                   <td className={classes}>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {Sno}
                        </Typography>
                        </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {LocationPlantName}
                        </Typography>
                        </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {ProductionCapacity}
                        </Typography>
                        </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {Status}
                        </Typography>
                        </div>
                    </div>
                  </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
     <hr></hr>
     <Typography variant="h5" color="blue-gray" className="mb-2 ">
     Rail Neer plants at Danapur, Nangloi, Palur and Ambernath are accredited with ISO: 9001- 2008 quality management system certification. Rail Neer Plant at Ambernath is also accredited with 22000:2015 certification. Rail Neer Packaged Drinking Water has been ranked as top performer by "Consumer Voice" Magazine in 2017.
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 p-4 bg-slate-200">
        Address and contact details of Rail Neer Plants:
        </Typography>
        <br></br>
        <Typography variant="h4" color="blue-gray" className="mb-2 p-4 bg-slate-200">
        West Zone:
        </Typography>
        <hr></hr>
        <br></br>
        <Typography variant="h5" color="blue-gray" className="mb-2 p-4 bg-slate-200">
        Rail Neer Plant Mandideep, Bhopal
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_2.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_2.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant Sanand, Ahmedabad
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_3.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_3.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Nagpur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_4.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_4.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Bhusawal
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_5.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_5.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Jabalpur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_6.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_6.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h1" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    East Zone:
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
        Rail Neer Plant, Sankrail
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_7.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_7.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Jagi Road (near Guwahati)
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_8.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_8.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Danapur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_9.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_9.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h1" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    North Zone:
        </Typography>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Nangloi
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_10.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_10.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Hapur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_11.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_11.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Mehatpur, Dist.-Una
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_12.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_12.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Amethi
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_13.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_13.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h1" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    South Central Zone:
        </Typography>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Bilaspur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_14.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_14.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h1" color="blue-gray" className="mb-2 p-4 bg-slate-200">
    South Zone:
        </Typography>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant,NTPC
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_15.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_15.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Bhubaneswar
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_16.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_16.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Palur
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_17.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_17.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Parassala
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_18.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_18.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <Typography variant="h3" color="blue-gray" className="mb-2 p-4">
    Rail Neer Plant, Vijayawada
        </Typography>
        <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          {TABLE_ROWS_19.map(({ name, job}, index) => {
            const isLast = index === TABLE_ROWS_19.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    <div class="grid grid-cols-2 gap-4 bg-slate-200">
    <div class="space-y-4">
        <Typography>
        Innovations & Initiatives 
        </Typography>
      </div>
    <div class="space-y-4">
    <div className="flex gap-4 float-right">
      <Button className="flex items-center gap-3 text-black">
        <ArrowDownTrayIcon strokeWidth={2} className="h-5 w-5" /> Download
      </Button>
    </div>
    </div>
</div>
<hr></hr>
<br></br>
<div class="relative">
        <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/dmnhhuwuohaff4zbrpfh"
            alt="nature image" />
        </div>
            <Typography variant="h5" color="blue-gray">
            HOSPITALITY AND CATERING BUSINESS OF IRCTC:
            </Typography>
            <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/hqzxkbtowk1dso0i51ae"
            alt="nature image" />
            <Typography variant="h4" color="blue-gray">
            IRCTC – A Leading Hospitality and Catering Company
            </Typography>
            <br></br>
            <Typography variant="h6" color="blue-gray">
            IRCTC is one of the largest hospitality and catering companies of the country with a vast gamut of businesses in hospitality and catering spread over passenger trains, railway stations, station premises and other ancillary business activities.
            </Typography>
            <br></br>
            <Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h4" color="blue-gray">
            Mobile Catering Business
</Typography>
        <div class="grid grid-cols-3 gap-4">
    <div class="space-y-4">
        <Typography>
        IRCTC manages the entire on-board catering services of Indian Railways in more than 460 passenger trains with pantry cars that includes Rajdhani trains, Shatabdi trains, Duronto Trains, Gatimaan Express and Mail/Express trains and also in newly introduced passenger trains such as Vande Bharat Express and Tejas Trains. In all the above mentioned trains, the on-board catering services is being provided from the pantry cars.
        </Typography>
       
      </div>
    <div class="space-y-4">
    </div>
    <div>
    <img
        className="h-full w-full"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/fap1zlqc2o2wxnugymja"
        alt="nature image"
      />
    </div>
</div>
</CardBody>
</Card>
<br></br>
<Typography variant="h5" color="blue">
Cooked food menu
            </Typography>
            <Typography variant="h5">
            For cooked food menu option please click the below mentioned link:-
            <br></br>
http://menurates.irctc.co.in/.
            </Typography>
            <br></br>
            <Typography variant="h5" color="blue">
            Train Side Vending (TSV)
            </Typography>
            <Typography variant="h6" color="blue-gray">
            IRCTC also manages Train side vending contracts on Mail/Express and Superfast trains which do not have pantry cars. In Train Side Vending, the on-board vendors take orders from the passengers from menu chart provided. In accordance with the specified order, the vendors collect the food at the nominated ‘meal pick up points’ and then supply it to the passengers.
            </Typography>
            <br></br>
            <Typography variant="h5" color="blue">
            Re-Designing and Development of Pantry Cars
            </Typography>
            <Typography variant="h6" color="blue-gray">
            IRCTC is in the process of re-designing the pantry cars of trains with modern equipments. The redesigned pantry cars of Rajdhani and Duronto Express will be fully air-conditioned LHB coaches equipped with all modern kitchen equipments such as Combi Ovens, Brat Pans, Deep fryers etc. and will have adequate storage facility for dry and perishable items, proper exhaust chimneys, appropriate garbage bins and will also have accommodation for kitchen staff.
            </Typography>
            <br></br>
            <Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Food Plaza
</Typography>
    <div class="space-y-4">
        <Typography>
        Food Plaza is a multi-cuisine plazas giving a variety of choice for eating. The quality and rates for items of food plazas are market-driven. Food Plazas normally provide multi-cuisine food under one roof, in a relaxed dine-in atmosphere with a good ambience and a common kitchen to provide a wide variety of food items. IRCTC is managing 144 Food Plaza on PAN India basis.
        </Typography>
        </div>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/dcc4pim8rfyvtupepshy"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/fwt2e4bzkl0aqvlt3ekk"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
          
Fast food unit
</Typography>
    <div class="space-y-4">
        <Typography>
        Fast Food Units are major units, where through self-service counters, fast food items are sold. In these outlets, packaged food is served to customers in take-away packets. The quality and rates for items in Fast Food Unit is also market-driven. IRCTC is managing 160 Fast Food Units on PAN India basis.
        </Typography>
        </div>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/csv487jux2dznqhpkc33"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/kscagpyhz0lrrx2piwam"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>

<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Refreshment Room
</Typography>
    <div class="space-y-4">
        <Typography>
          
As per Catering Policy-2017, IRCTC has been mandated for management of Refreshment Rooms at A1 & A Category Stations only. Refreshment Room serves snacks and a-la-carte items, standard breakfast, standard meals, Janta Khana as authorized by the Railways. In addition, these units also serve approved brands of packed items such as aerated drinks, Biscuits, Chips, Namkeens, Chocolates and Ready to Eat meals (RTE) and Railneer PDW etc. on MRP basis. IRCTC is managing about 180 Refreshment Rooms at A1 & A Category Stations on PAN India basis.
        </Typography>
        </div>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/t9bweihxpxew4snsuewt"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/jbif4sx6egmnbnu3bwmi"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/khbzeum71wdrnypsmrzt"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/e6nzftwygi5gvvd5ruud"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Jan Ahar
</Typography>
    <div class="space-y-4">
        <Typography>
        As per Catering Policy-2017, IRCTC has been mandated for management of Jan Ahaars at Railway Stations. Jan Ahaar serves Snacks and a-la-carte items, standard breakfast, standard meals, Janta Khana, as authorized by the Railways. In addition, Jan Ahaar also serve approved brands of packed items such as aerated drinks, Biscuits, Chips, Namkeens, Chocolates and Ready to Eat meals (RTE) and Railneer PDW etc. on MRP basis. Jan Ahaar meals comprise a variety of economical regional and local items. IRCTC is managing about 58 Jan Ahaars on PAN India basis.
        </Typography>
        </div>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/tkzq4b2vnpyjnwmrnlfc"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/wtklvdmmtyonq3aa6ss4"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/tgypguqlktjksbgzswzn"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/ysxm9hqpwca0ad3ndazg"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Jan Ahar
</Typography>
    <div class="space-y-4">
        <Typography>
        As per Catering Policy-2017, IRCTC has been mandated for management of Jan Ahaars at Railway Stations. Jan Ahaar serves Snacks and a-la-carte items, standard breakfast, standard meals, Janta Khana, as authorized by the Railways. In addition, Jan Ahaar also serve approved brands of packed items such as aerated drinks, Biscuits, Chips, Namkeens, Chocolates and Ready to Eat meals (RTE) and Railneer PDW etc. on MRP basis. Jan Ahaar meals comprise a variety of economical regional and local items. IRCTC is managing about 58 Jan Ahaars on PAN India basis.
        </Typography>
        </div>
        </CardBody>
        </Card>
        <Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Base Kitchens
</Typography>
    <div class="space-y-4">
        <Typography>
        Base Kitchen is a catering unit having large cooking and packing facility set up in the vicinity of Railway premises whether inside or outside Railway premises, from where food is prepared and supplied in trains or to the static units. There will be no sale of food directly to the passengers from Base kitchen. In order to provide quality meals to the passengers on trains, these kitchens are provided equipped with modern cooking equipments. These kitchens are also enabled with CCTV camera for monitoring. Further, QR code facilities on meal packets being supplied from Base Kitchens are also implemented progressively. Apart from of this, to ensure quality of food production in kitchens, these kitchens are being covered for quality, hygiene check and food sampling by deploying Food Safety Supervisors (FSS). Presently, there 11 Base Kitchens under IRCTC..
        </Typography>
        </div>
        <div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/o33achuwy6a7mhricq1k"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/fih5xugmmhmfhvhspvq4"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/totgudkpnjl0xbpx9pom"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/mv4dv63ysvqafv7ewkue"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            Rail Yatri Niwas/BNR Hotels:

</Typography>
    <div class="space-y-4">
        <Typography>
        IRCTC is presently operating two Rail Yatri Niwas at New Delhi and Howrah railway stations and two BNR Hotels at Puri and Ranchi.
        </Typography>
        </div>
        <div class="grid grid-cols-6 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/nrbobu4srdxipjbb5sng"
        alt="nature image"
      />
      </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/sdg4it2tekmsa0qxwwci"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/r3ynxottskg8p41xodkt"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/bofuslu4alchctbqvzu2"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/it13bd5nhexrhjzwuxk3"
        alt="nature image"
      />
    </div>
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/ycccnmbhmftqsqji7c5m"
        alt="nature image"
      />
    </div>
</div>

</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
            <Typography variant="h5" color="blue-gray">
            E-Catering Business
</Typography>
    <div class="space-y-4">
        <Typography>
        E-Catering is the latest addition to the catering and hospitality business of IRCTC through which the company has been able to amalgamate technology with food. This internet based service is an initiative of IRCTC that allows passengers to book food of their choice from partner restaurants and food outlets through a mobile application while travelling on train. Food is being delivered to the passengers on their respective seat/berth. Booking can be done in advance.
        <br></br>
1. The salient features of E-Catering are:
2. The service is available for passengers travelling on reserved tickets only.
3. Passengers can choose from a range of delicacies which are offered in the app on line.
4. The Menu is set by the service providing restaurants and often as per choice of passengers for bulk orders.
5. At present the e-catering service of IRCTC is available at approximately 300 stations and the company is booking approximately 20,000 meals in a day.
6. Passengers can make payment for the meals ordered by pay on delivery (POD) as well as on line (Prepaid).
7. Passengers can give feedback on e-catering website itself after delivery of order.
        </Typography>
        </div>
        <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/yc2rzjqqyhto0lp6lvet"
        alt="nature image"
      />
      </div>
      <div class="space-y-4">
    <img
        className="h-600 w-400 object-center m-auto"
        src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/kmhozaoqxmmhmyjh89gy"
        alt="nature image"
      />
      </div>
      
</div>

</CardBody>
</Card>
<hr>
</hr>
<Card className="mt-6 w-96">
      <CardBody>
<div class="relative">
        <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/nveo97xyffo7lrrtrqxf"
            alt="nature image" />
        </div>
        <Typography variant="h4" color="blue-gray">
        Tourism
</Typography>
<Typography>
Railway since time immemorial has been the kaleidoscope of tourist in the country. Considering the vast expanse of the country, Railways in India have been moving carrying domestic as well international visitors.
<br></br>
IRCTC, established in 1999, has been mandated by the Government of India to professionalize and upgrade rail based tourism in the country. Over the last twenty years, IRCTC has been a catalyst in the overall promotion and development of rail tourist across the country.
<br></br>
IRCTC is probably the only organization offering packages ranging from Rs. 900 per day to USD 900 per day.v
</Typography>
{/* <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className=" flex gap-3">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
          </a> */}
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Tourism Portal
</Typography>
<Typography>
To facilitate the public at large, IRCTC operates a website www.irctctourism.com has a plethora of offerings including Rail based Packages, Hotels, Railway Retiring Rooms to provide the users a One Stop Solution to all their travel needs.
<br></br>

Mobile App –IRCTC Tourism (Android & iOS )
</Typography>
<div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-2 flex gap-1">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-2 flex gap-1">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
      </div>
      
</div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Rail Based Tourism
</Typography>
<Typography>Rail Tour Packages - IRCTC organizes packages to various destinations for which Indian Railways earmarks seats/berths in trains for the to and fro journey. These packages originate from different parts of the country and offer tours to pilgrim destinations, leisure hubs etc. At present IRCTC operates more than 70 Rail Tour Packages.

Bookings of these packages are available on www.irctctourism.com

Special Tourist Trains – IRCTC organizes train tours for the budget travelers with fixed departure dates and itineraries. These trains are called Bharat Darshan Trains and Aastha Circuit Trains. In the year 2018-19, 99 trips of Bharat Darshan and Aastha Circuit Trains were operated with more than 50,000 tourists travelling on them.

Bookings of these trains are available on www.irctctourism.com

Special Interest Trains – IRCTC pioneered special interest tours by trains way back in 2007, with the launch of Buddhist Circuit Tourist Train.

Bookings of these trains are available on www.irctctourism.com

Buddhist Circuit Tourist Train - Launched in 2007, this train tour covers the important destinations linked to Buddha’s life. A new train with state of art features was inducted in 2018 to provide better facilities to guests. The 7 Nights/8 Days package includes Bodhgaya, Nalanda, Sarnath, Sravasti, Rajgir, Varanasi, Lumbini and Agra.
<br></br>
Visit Website : Buddhist Circuit Tourist Train
</Typography>
<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          <div class="space-y-4">
          <a href="https://twitter.com/buddhistrain">
        <Button size="lg" color="white" className="grid grid-cols-4flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/nh3fxho4jwx5hlatahxr" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          <div class="space-y-4">
          <a href="https://www.youtube.com/channel/UC20DGNXrDWsqZyJ4-xM2zRQ">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/itjjuuwa2jtdbwnnbkwy" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          
      </div>
      
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Air Packages
</Typography>
<Typography variant="h5" color="blue-gray">
1. Domestic Air Packages
</Typography>
<Typography>
IRCTC provides domestic tour packages by Air in 2015, which is inclusive of flight tickets, accommodation, all transfers & sightseeing, meals. These packages originate from different parts of the country and offer tours to various destinations.
<br></br>
Bookings of these trains are available on www.irctctourism.com
</Typography>

      
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
        2. International Packages
</Typography>
<Typography>
IRCTC has took a major step to conquer Outbound travel market by introducing popular travel destination with competitive price and un-beatable service. IRCTC Tour manager escorts the tour to ensure proper services reaches every passenger.
<br></br>
IRCTC has been offering popular foreign tour packages to destination like Dubai, Thailand, Singapore & Malaysia, Srilanka, Russia, Australia, USA, China, Europe, Hong Kong & Macau, Nepal, Dubai etc.
</Typography>

      
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray">
        3. Land Packages
</Typography>
<Typography>
IRCTC provides the Land Tour Packages or Holiday packages which is an unique product of IRCTC . Land Packages are designed, keeping in view of customers interest for sight seeing, to visit famous Temples for Darshan etc. It includes pick up and drop by AC/ Non AC road transport from station/ Airport , Travel Insurance , sight seeing, accommodation is also included.
<br></br>
Bookings of these trains are available on www.irctctourism.com
<br></br>
Mobile App –IRCTC Tourism (Android & iOS)
</Typography>

      
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Accommodation

</Typography>
<Typography>
IRCTC offers a wide range of accommodation options ranging from short layovers to long stays at a large number of locations.

IRCTC Hotels offers wide ranging hotel booking option to suit all budget needs.
<br></br>
Visit Website : IRCTC Hotels
<br></br>
Mobile App –IRCTC Tourism (Android & iOS)
</Typography>

<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          
      </div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Air Ticketing

</Typography>
<Typography>
IRCTC Ltd. a PSU under the aegis of Ministry of Railways, is an IATA qualified agency and has been into air ticketing business since 2010. Air tickets can be booked on IRCTC’s dedicated web portal www.air.irctc.co.in for Domestic and International tickets for almost all airlines from anywhere in the world. IRCTC charges only INR 100+GST- as convenience fee Issuing tickets from web portal which is not only the most economical and lowest in the industry but also ,this is the only portal that offers travel insurance worth upto 50 Lakh at zero cost on flight tickets booked through our website.
<br></br>
IRCTC Air Portal has multicity option for both domestic and International sectors. Booking through the portal is very easy and convenient with 50 + multiple payment gateway options to choose from. IRCTC boosts of speedy E-Commerce network that handles 15-18 million transactions per day. As a step towards promoting digitalization initiative of Government of India, IRCTC has introduced user friendly E- Mobile App - IRCTC Air for Android and IOS users.
<br></br>
IRCTC Ltd. has been nominated by Ministry of Finance, Government of India, to issue tickets in government account and has tied up with various PSUs, Ministries and Government departments for Corporate Travel requirements by taking care of their travel needs. IRCTC has been authorised by Ministry of Finance, to issue LTC by Air tickets for employees of Govt. of India and selected PSUs. IRCTC offers attractive fares for group bookings for 10+ passengers.
<br></br>
Visit Website : Air Ticketing Portal
</Typography>

<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          
      </div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Bus Ticketing
</Typography>
<Typography>
IRCTC provides Bus bookings for interstate travel within India. It is an intiative take to facilitate multi modal facility to the IRCTC customer with both private and state transport bus availability on the website and mobile apps. Thus IRCTCnow has all three modes of transport viz. Rail, Air and Bus on its online platform, making it a one stop solution for the customer’s travel needs.
<br></br>
Visit Website : Bus Ticketing Portal
<br></br>
Mobile App –IRCTC Tourism (Android & iOS )
</Typography>

<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          
      </div>
</CardBody>
</Card>
<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        Cruise Bookings
</Typography>
<Typography>
IRCTC has ventured into Domestic and International Cruise Business targeting Domestic market including potential Outbound guests. The products are designed with complete service, hospitality and maintaining the best quality in the tourism industry.
<br></br>
Visit Website : Cruise Bookings
<br></br>
Visit Website : Travel and Tourism
</Typography>

<div class="grid grid-cols-4 gap-4">
    <div class="space-y-4">
    <a href="https://www.facebook.com/IRCTCofficial/">
        <Button size="lg" color="white" className="  grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/qpmwgf4czt25dr1qoofp" alt="metamask" className="h-10 w-10" />
      </Button>
   </a>
      </div>
      <div class="space-y-4">
      <a href="https://www.instagram.com/irctc.official/">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/rv6jlj7nl9je1wnh07lb" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          <div class="space-y-4">
          <a href="https://twitter.com/buddhistrain">
        <Button size="lg" color="white" className="grid grid-cols-4flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/nh3fxho4jwx5hlatahxr" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
          <div class="space-y-4">
          <a href="https://www.youtube.com/channel/UC20DGNXrDWsqZyJ4-xM2zRQ">
        <Button size="lg" color="white" className="grid grid-cols-4 flex gap-4">
        <img src="https://res.cloudinary.com/dbmixotrs/image/upload/f_auto,q_auto/itjjuuwa2jtdbwnnbkwy" alt="metamask" className="h-10 w-10" />
      </Button>
          </a>
          </div>
      </div>
</CardBody>
</Card>
</>
  );
}