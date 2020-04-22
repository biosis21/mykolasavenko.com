import { useEffect, useState } from "react";

const SKILLS = [
  {
    name: "JavaScript",
    from: 2011
  },
  {
    name: "TypeScript",
    from: 2016
  },
  {
    name: "React.js",
    from: 2016
  },
  {
    name: "Angular",
    from: 2014
  },
  {
    name: "Node.js",
    from: 2016
  },
  {
    name: "HTML",
    from: 2011
  },
  {
    name: "CSS",
    from: 2011
  },
];

const AWARDS = [
  {
    id: "3",
    title: "1st place at Web Challenge competition in Front End JavaScript Pro category (2018)",
    image: "/images/awards/ua-web-challenge-2018.jpeg",
  },
  {
    id: "2",
    title: "Nominated to be an employee of the quarter in Kantar Consulting Virtual Reality",
    image: "/images/awards/award-icon.jpg",
  },
  {
    id: "1",
    title: "3rd place at UA Web Challenge competition in Front End JavaScript Pro category (2015)",
    image: "/images/awards/ua-web-challenge-2015.jpeg",
  },
  {
    id: "0",
    title: "Nominated to be an employee of the month in Ciklum Interactive Solutions",
    image: "/images/awards/award-icon.jpg",
  }
];

const CERTIFICATIONS = [
  {
    id: "8",
    title: "Modern React with Redux [2019 Update]",
    link: "https://www.udemy.com/certificate/UC-9KFWN0GP/",
    image: "/images/certifications/UC-9KFWN0GP.jpg",
  },
  {
    id: "7",
    title: "Angular RxJs Reactive Programming & FREE Ebook",
    link: "https://www.udemy.com/certificate/UC-4J807GCX/",
    image: "/images/certifications/UC-4J807GCX.jpg",
  },
  {
    id: "6",
    title: "The Coding Interview Bootcamp: Algorithms + Data Structures",
    link: "https://www.udemy.com/certificate/UC-B3SGWLVO/",
    image: "/images/certifications/UC-B3SGWLVO.jpg",
  },
  {
    id: "5",
    title: "Scaled Agile Framework Agilist (SA) Certification Program",
    link: "https://www.slideshare.net/NikolaySavenko1/safecertificate-61925175?ref=https://www.linkedin.com/in/mykola-savenko/detail/treasury/position:793748061/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAAAuERisBq6NR8ZPJiCtBixmF39hC6sw5-i8%2C51158890)&section=position%3A793748061&treasuryCount=5",
    image: "/images/certifications/safe.jpg",
  },
  {
    id: "4",
    title: "M201: MongoDB Performance",
    link: "http://university.mongodb.com/course_completion/8d370546-fce1-4e0c-9b9d-7ac79995",
    image: "/images/certifications/M201.jpg",
  },
  {
    id: "3",
    title: "M312: Diagnostics and Debugging",
    link: "http://university.mongodb.com/course_completion/6ae2a5a0-a868-49d7-90cf-3d2d0508",
    image: "/images/certifications/M312.jpg",
  },
  {
    id: "2",
    title: "M102: MongoDB for DBAs",
    link: "http://university.mongodb.com/course_completion/15b93146c6e947c5983edbed03384b1e",
    image: "/images/certifications/M102.jpg",
  },
  {
    id: "1",
    title: "M101JS: MongoDB for Node.js Developers",
    link: "http://university.mongodb.com/course_completion/c25600fbac87459e85f7155cb52375e7",
    image: "/images/certifications/M101JS.jpg",
  }
];

const WORK_EXPERIENCE = [
  {
    id: "7",
    title: "Senior Full Stack Engineer",
    company: "Greenhouse",
    logo: "greenhouse.png",
    link: "https://www.greenhousegroup.com/",
    locations: [
      {
        city: "Eindhoven",
        country: "Netherlands"
      }
    ],
    from: "01/05/2019",
    to: "01/05/2020",
    descriptions: [
      "Created from scratch and led the development of the <a target='_blank' href='https://www.npmjs.com/package/@greenhousegroup/shared-ui'>JARVIS UI</a> shared components library based on React.js, Storybook, TypeScript",
      "Improved reliability and reduced number of incoming bugs by 15% by implementing TypeScript into existed React.js application on BaaS project",
      "Improved scalability by redesigning existed approach of handling the business logic by introducing the single responsibility principle and composable component approach on BaaS and Optiwiser AI projects"
    ]
  },
  {
    id: "6",
    title: "Senior Software Engineer",
    company: "WAES",
    logo: "waes.png",
    link: "https://www.wearewaes.com",
    locations: [
      {
        city: "Eindhoven",
        country: "Netherlands"
      }
    ],
    from: "30/10/2018",
    to: "31/03/2019",
    descriptions: [
      "Increased recruitment team daily productivity by implementing Recruitment Dashboard web application based on React.js ecosystem",
      "Explored and elaborated a new tool for managing personal development goals for the back-office staff",
    ]
  },
  {
    id: "5",
    title: "Lead Front End Engineer, Scrum Master",
    company: "Kantar Consulting Virtual Reality",
    logo: "kantar-consulting.png",
    link: "https://consulting.kantar.com",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      },
      {
        city: "Milton Keynes",
        country: "United Kingdom"
      }
    ],
    from: "01/12/2015",
    to: "01/07/2018",
    descriptions: [
      "Improved VRCloud application quality by increasing the number of unit tests coverage from 0 to 86 %",
      "Reduced the amount of technical debt from 109 story points to 8 in 1.5 year and bugs by establishing a new approach - SPP (Seek out – Prioritize - Plan)",
      "Provided migration plan and successfully upgraded the entire project from Angular 1.4 to 5.0 version in 6 months",
      "Developed a motivated, self-organized and client-oriented team; optimized team velocity per program increment by 30%",
      "Decreased onboarding time from 3 to 1 month by providing mentorship and creating guidelines to newcomers"
    ]
  },
  {
    id: "4",
    title: "Innovation Lead",
    company: "Kantar Consulting Virtual Reality",
    logo: "kantar-consulting.png",
    link: "https://consulting.kantar.com",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
    from: "01/09/2017",
    to: "01/07/2018",
    descriptions: [
      "Founded Innovation Engineering Group (IEG) to investigate, validate, create a technology roadmap and implement new business ideas",
      "Delivered more than six new PoCs implemented by IEG in the last six months; worked closely with stakeholders and risk management group to make all prototypes consistent with business objectives",
      "Designed and led cross-functional brainstorm sessions to solve technical critical problems during the delivery process",
      "Analyzed business strategy and identified new opportunities; aligned business direction with the team members’ personal goals to increase team motivation"
    ]
  },
  {
    id: "3",
    title: "Senior Front End Engineer",
    company: "Ciklum",
    logo: "ciklum.png",
    link: "https://www.ciklum.com",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
    from: "01/07/2015",
    to: "01/11/2015",
    descriptions: [
      "Created and maintained Front End development guidelines for AngularJS ecosystem",
      "Improved code quality by implemented Test Driven Development process",
      "Organized JavaScript Hackathons based on ReactJS and AngularJS frameworks",
      "Organized and led JavaScript meetups in Ciklum Interactive Solutions"
    ]
  },
  {
    id: "2",
    title: "Front End Engineer",
    company: "Ciklum",
    logo: "ciklum.png",
    link: "https://www.ciklum.com",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
    from: "08/04/2014",
    to: "01/07/2015",
    descriptions: [
      "Designed and implemented a new project architecture based on AngularJS ecosystem",
      "Increased code quality and maintainability by integrating unit test tools"
    ]
  },
  {
    id: "1",
    title: "Web Developer",
    company: "Lestro",
    logo: "lestro.png",
    link: "https://lestro.com",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
    from: "01/12/2011",
    to: "08/04/2015",
    descriptions: [
      "Wrote a cross-browser compatible code down to IE7",
      "Developed web applications using CodeIgniter, PHP, MySQL, JavaScript, HTML, CSS",
      "Provided high-level project estimation for pre-sale activity"
    ]
  },
  {
    id: "0",
    title: "Trainee Web Developer",
    company: "Taras Shevchenko National University of Kiev",
    logo: "knu.png",
    link: "http://univ.kiev.ua",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
    from: "01/10/2010",
    to: "01/04/2011",
    descriptions: []
  }
];

const EDUCATION = [
  {
    id: "2",
    name: "Taras Shevchenko National University of Kyiv",
    degree: "Master's degree",
    fieldOfStudy: "RadioPhysics and Electronics",
    logo: "knu.png",
    link: "http://univ.kiev.ua",
    from: "01/09/2012",
    to: "01/08/2014",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
  },
  {
    id: "1",
    name: "Taras Shevchenko National University of Kyiv",
    degree: "Bachelor’s Degree",
    fieldOfStudy: "RadioPhysics and Electronics",
    logo: "knu.png",
    link: "http://univ.kiev.ua",
    from: "01/09/2008",
    to: "01/08/2012",
    locations: [
      {
        city: "Kyiv",
        country: "Ukraine"
      }
    ],
  },
  {
    id: "0",
    name: "Zamhlai School",
    degree: "High School",
    fieldOfStudy: "Teaching English as a Second or Foreign Language",
    logo: "zamhlai.png",
    link: "http://univ.kiev.ua",
    from: "01/09/1997",
    to: "01/08/2008",
    locations: [
      {
        city: "Zamhlai village",
        country: "Ukraine"
      }
    ],
  }
];

const SOCIAL_MEDIA = [
  {
    title: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/mykolasavenko"
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mykola-savenko"
  },
  {
    title: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mykola.savenko/"
  },
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/biosis21"
  },
  {
    title: "GitHub",
    icon: "github",
    link: "https://github.com/biosis21"
  },
  {
    title: "Resume",
    icon: "file",
    link: "https://docs.google.com/document/d/18Dypy6l1Fd-1mhGr7xs5U1v_fRvmJsdWlfEm51EFWow/edit?usp=sharing"
  }
];

const CONTACTS = {
  email: "mykola.savenko21@gmail.com"
};

export const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(CERTIFICATIONS);
  }, []);

  return certifications;
};

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(WORK_EXPERIENCE);
  }, []);

  return jobs;
};

export const useEducationList = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setEducation(EDUCATION);
  }, []);

  return education;
};

export const useSocialMediaList = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);

  useEffect(() => {
    setSocialMediaList(SOCIAL_MEDIA);
  }, []);

  return socialMediaList;
};

export const useContacts = () => {
  const [contacts, setJobs] = useState([]);

  useEffect(() => {
    setJobs(CONTACTS);
  }, []);

  return contacts;
};

export const useAwards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    setAwards(AWARDS);
  }, []);

  return awards;
};

export const useSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(SKILLS);
  }, []);

  return skills;
};
