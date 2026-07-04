import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";


import { FaDiscord } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Email",
    value: "mmonirz.dev@gmail.com",
    href: "mailto:mmonirz.dev@gmail.com",
    icon: FiMail,
  },
  {
    title: "Phone",
    value: "+8801782421132",
    href: "https://wa.me/+8801782421132",
    icon: FiPhone,
  },
  {
    title: "Location",
    value: "Uttara, Dhaka, Bangladesh",
    href: null,
    icon: FiMapPin,
  },
];

export const socialLinks = [
  {
    icon: FiGithub,
    url: "https://github.com/monirzkhan",
  },
  {
    icon: FiLinkedin,
    url: "https://linkedin.com/in/monirzkhan-dev",
  },
  {
    icon: FaDiscord,
    url: "https://discord.com/users/monirzkhan_12009",
  },
];