import logo from "./logo.svg";
import arrow_icon from "./arrow_icon.svg";
import group_profile from "./group_profile.png";
import bgImage1 from "./bgImage1.png";
import bgImage2 from "./bgImage2.png";
import hero_img from "./hero_img.png";
import microsoft_logo from "./microsoft_logo.png";
import zoom_logo from "./zoom_logo.png";
import rakuten_logo from "./rakuten_logo.png";
import coinbase_logo from "./coinbase_logo.png";
import ads_icon from "./ads_icon.svg";
import content_icon from "./content_icon.svg";
import marketing_icon from "./marketing_icon.svg";
import social_icon from "./social_icon.svg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import work_mobile_app from "./work_mobile_app.png";
import work_fitness_app from "./work_fitness_app.png";
import work_dashboard_management from "./work_dashboard_management.png";
import email_icon from "./email_icon.svg";
import person_icon from "./person_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import linkedin_icon from "./linkedin_icon.svg";
import logo_dark from "./logo_dark.svg";
import airbnb_logo from "./airbnb_logo.svg";
import google_logo from "./google_logo.svg";
import menu_icon_dark from "./menu_icon_dark.svg";
import sun_icon from "./sun_icon.svg";
import moon_icon from "./moon_icon.svg";

// Array of Company Logos for Trusted section
export const company_logos = [
  { id: 1, logo: microsoft_logo },
  { id: 2, logo: zoom_logo },
  { id: 3, logo: rakuten_logo },
  { id: 4, logo: coinbase_logo },
  { id: 5, logo: airbnb_logo },
  { id: 6, logo: google_logo },
];

// Array of Service data for Service section
export const servicesData = [
  {
    id: 1,
    title: "Advertising",
    description:
      "We turn bold ideas into powerful digital solutions that connect & engage.",
    icon: ads_icon,
  },
  {
    id: 2,
    title: "Content Marketing",
    description: "We help you execute your plan and deliver results.",
    icon: marketing_icon,
  },
  {
    id: 3,
    title: "Content Writing",
    description: "We help you write good content that drives organic traffic.",
    icon: content_icon,
  },
  {
    id: 4,
    title: "Social Media",
    description:
      "We help you build a strong social media presence and engage with your audience.",
    icon: social_icon,
  },
];

// Array of Work data for Work section
export const workData = [
  {
    id: 1,
    title: "Mobile App Marketing",
    description:
      "We turn bold ideas into powerful digital solutions that connect and engage.",
    image: work_mobile_app,
  },
  {
    id: 2,
    title: "Dashboard Management",
    description: "We help you execute your plan and deliver results.",
    image: work_dashboard_management,
  },
  {
    id: 3,
    title: "Fitness App Promotion",
    description: "We help you create a marketing strategy that drives results.",
    image: work_fitness_app,
  },
];

// Array of Team data for Team section
export const teamData = [
  {
    id: 1,
    name: "Haley Carter",
    title: "CEO & founder",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    id: 2,
    name: "James Walker",
    title: "Ads manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    id: 3,
    name: "Jessica Morgan",
    title: "Vice president",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Ashley Bennett",
    title: "Marketing & sales",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 5,
    name: "Emily Parker",
    title: "Content marketer",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 6,
    name: "Ryan Mitchell",
    title: "Content writer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 7,
    name: "Megan Brooks",
    title: "Performance manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 8,
    name: "Amber Foster",
    title: "Senior writer",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

// For cleaner asset imports
const assets = {
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon,
};

export default assets;
