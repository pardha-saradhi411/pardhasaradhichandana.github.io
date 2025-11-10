/*
  DATA FILE — Edit this file to update content.
  - Facts: update numbers
  - Skills: add/remove skills and change level (0-100)
  - EXPERIENCE / EDUCATION: add entries
  - PROJECTS / CERTIFICATIONS: add entries and put images in assets/projects/ and assets/certifications/
  After editing, save and refresh the page (or push changes to GitHub).
*/

const SITE = {
  name: "Pardha Saradhi Chandana",
  title: "RAN Test Engineer | LTE/5G | ORAN | System Testing",
  email: "pardhasaradhi7477@gmail.com",
  linkedin: "https://www.linkedin.com/in/pardha-saradhi-chandana-ran-engineer/",
  resume: "assets/Pardha Saradhi Chandana resume.pdf" // ensure resume file exists here
};

const ABOUT = {
  intro: "Passionate RAN Test Engineer with 4+ years of experience in 5G NR and LTE testing, validation, and log analysis.",
  summary: "Skilled in ORAN integration, throughput optimization, and protocol debugging with tools like QXDM, Wireshark, and XCAL."
};

// FACTS: numbers shown in animated counters
const FACTS = [
  { label: "Internships", value: 2 },
  { label: "Certificates", value: 5 },
  { label: "Projects", value: 8 },
  { label: "Courses", value: 3 }
];

// SKILLS: adjust level 0-100
const SKILLS = [
  { name: "LTE/5G RAN Testing", level: 92, category: "Wireless" },
  { name: "QXDM / QCAT / Wireshark", level: 88, category: "Tools" },
  { name: "Python (Automation)", level: 78, category: "Automation" },
  { name: "Docker / Kubernetes", level: 70, category: "Automation" },
  { name: "Protocol Debugging (RRC/RLC/PDCP)", level: 90, category: "Protocols" }
];

const EXPERIENCE = [
  {
    role: "Member of Technical Staff - I",
    company: "Mavenir Systems",
    duration: "Feb 2023 – Present",
    desc: "4G/5G RAN feature validation, HO & CA testing, log analysis, and throughput optimization for DTAG and VMO2 clients."
  },
  {
    role: "Graduate Engineer",
    company: "Mavenir Systems",
    duration: "Feb 2022 – Jan 2023",
    desc: "Executed end-to-end 5G SA validation across ORAN architecture, automated testing pipelines using Docker and Kubernetes."
  }
];

const EDUCATION = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    inst: "CMR Institute of Technology (CMRIT)",
    period: "Aug 2017 – May 2021"
  }
];

// PROJECTS - include id and optional image filename stored in assets/projects/
const PROJECTS = [
  {
    id: "p1",
    title: "5G NSA-SA Coexistence Testing",
    image: "", // add image filename later (e.g., "p1.png")
    desc: "Validated coexistence scenarios and optimized slicing policies for DTAG, ensuring SLA compliance for eMBB and enterprise traffic.",
    details: "Executed measurement gap coordination, CA combos, and validated inter-node mobility in EN-DC setups.",
    link: ""
  },
  {
    id: "p2",
    title: "4G RAN Performance Optimization",
    image: "",
    desc: "Enhanced network stability by 10% via throughput tuning and feature validation (CMAS, ETWS, HO).",
    details: "Conducted sweep tests and counter tuning; improved throughput and reduced latency via emulator adjustments.",
    link: ""
  }
];

// CERTIFICATIONS - image filenames saved in assets/certifications/
const CERTIFICATIONS = [
  { id: "c1", title: "Python for Everybody (Udemy)", image: "" },
  { id: "c2", title: "Spotlight Award - Customer Focus (Mavenir Systems)", image: "" }
];

const CONTACT = {
  email: SITE.email,
  linkedin: SITE.linkedin
};
