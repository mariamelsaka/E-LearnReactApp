// section 2 for home

import { IMAGES } from "../config/assets";
import { ISECTION2HOME,ISECTION3HOME,ISECTION4HOME,ISECTION6HOME,ISECTION3AboutUs} from "../interfaces";

export const Section2List: ISECTION2HOME[] = [
  {
    title: "Interaction Design",
    description:"Lessons on design that cover the most recent developments.",
    imageURL:IMAGES.frame390
  }, {
    title: "UX Design Course",
    description:"Classes in development that cover the most recent advancements in web.",
    imageURL:IMAGES.frame391
  },
  {
    title: "User Interface Design",
    description:"User Interface Design courses that cover the most recent trends",
    imageURL:IMAGES.frame3911
  }
];

export const Section3List: ISECTION3HOME[] = [
  {
    title: "Figma UI UX Design..",
    description:"Use Figma to get a job in UI Design, User Interface, User Experience design.",
    imageURL:IMAGES.image1Home,
    price:"$17.84",
    ImageLogo:IMAGES.avatarLabelGroup1
  }, 
  {
    title: "Learn With Shoaib",
    description:"Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
    imageURL:IMAGES.image1,
    price:"$8.99",
    ImageLogo:IMAGES.avatarLabelGroup
  },
  {
    title: "Building User Interface",
    description:"Learn how to apply User Experience (UX) principles to your website designs.",
    imageURL:IMAGES.image2,
    price:"$11.70",
    ImageLogo:IMAGES.avatarLabelGroup2
  }
];
export const Section4List: ISECTION4HOME[] = [
  {
    imageProfile:IMAGES.avatarSEC4,
    name: "Theresa Webb",
    position:"Application Support Analyst Lead",
    description:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  }, 
  {
    imageProfile:IMAGES.avatar1SEC4,
    name: "Courtney Henry",
    position:"Director, Undergraduate Analytics and Planning",
    description:"Lead engineering teams at Figma, Pitch, and Protocol Labs.",
   
  },
  {
    imageProfile:IMAGES.avatar2SEC4,
    name: "Albert Flores",
    position:"Career Educator",
    description:"Former PM for Linear, Lambda School, and On Deck.",
    
  },
  {
    imageProfile:IMAGES.avatar3SEC4,
    name: "Marvin McKinney",
    position:"Co-op & Internships Program & Operations Manager",
    description:"Former frontend dev for Linear, Coinbase, and Postscript.",
    
  }
];

export const Section6List: ISECTION6HOME[] = [
  {
    imageUrl: IMAGES.image3HOME,
    Date: "November 16, 2014",
    title: "Three Pillars of User Delight",
    description:
      "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is...",
    variant: "small",
  },
  {
    imageUrl: IMAGES.image4HOME,
    Date: "September 24, 2017",
    title: "UX Mapping Methods",
    description:
      "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
    variant: "small",
  },
  {
    imageUrl: IMAGES.image5HOME,
    Date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    description:
      "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.",
    variant: "large",
  },
];

export const Section3AboutUsList:ISECTION3AboutUs[]=[
  {
    number:"01",
    circleId:"one",
    title:"Standardization",
    description:" When working in a global workplace, it’s often difficult to gauge learners’ training experiences"
  },
  {
    number:"02",
    circleId:"two",
    title:"Reduced Costs",
    description:"With Weekend UX, there’s no cost to reproduce materials and,thanks to mobile learning and micro learning"
  },
  {
    number:"03",
    circleId:"three",
    title:"More Customization",
    description:"ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience."
  },
  {
    number:"04",
    circleId:"four",
    title:"Affordable Pricing",
    description:"With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and micro learning"
  },
  {
    number:"05",
    circleId:"five",
    title:"Learner Satisfaction",
    description:"If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates."
  },
  {
    number:"06",
    circleId:"six",
    title:"Multimedia Materials",
    description:"One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method"
  },
]