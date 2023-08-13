/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Grigor Poghosyann",
  title: "Hi all, I'm Grigor",
  subTitle: emoji(
    "🚀Dynamic Software and DevOps Engineer with a proven track record in architecting and deploying secure cloud solutions. Expertise in cloud-native ecosystems, containerization, and automation, complemented by a suite of industry-recognized certifications. Adept at optimizing infrastructure for scalability and performance, with a passion for continuous learning and innovation, ready to drive the next wave of technical excellence💡"
  ),
  resumeLink:
    "https://docs.google.com/document/d/e/2PACX-1vRnLieiRHwU-9pw6CwP2JeKAbXYonOlwU7q2hG-I8Lbq8-f6oBI_RTHUZHzSoFgVjdVY_8_iSaDvLQg/pub", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/grig777",
  linkedin: "https://www.linkedin.com/in/grigor-poghosyan/",
  gmail: "grigor.poghosyan.gp@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DEVOPS MAESTRO EAGER TO CONQUER EVERY CLOUD IN THE SKY! ☁️🚀",
  skills: [
    emoji(
      "⚡ Cloud Solutions Architecting: Designing and deploying secure, scalable cloud infrastructures tailored to organizational needs"
    ),
    emoji(
      "⚡ Containerization & Orchestration: Proficient with Docker, Kubernetes, and related container technologies, ensuring streamlined application deployment and scaling"
    ),
    emoji(
      "⚡ Infrastructure Automation: Implementing Infrastructure as Code (IaC) using tools like Terraform, CDK, Crossplane and Packer."
    ),
    emoji(
      " Continuous Integration & Deployment: Streamlining development workflows with GitOps principles, using platforms like GitLab CI and ArgoCD."
    ),
    emoji(
      "⚡ Performance Optimization: Ensuring high availability, scalability, and optimal performance of cloud solutions."
    ),
    emoji(
      "⚡ Monitoring & Logging: Implementing real-time monitoring and logging solutions using tools like ELK Stack, Grafana, and Prometheus."
    ),
    emoji(
      "⚡ Continuous Learning, Innovation & Mentorship: Staying updated with the latest in tech, exploring new tools and methodologies, and sharing knowledge through training sessions and workshops"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Terraform",
      img: "./assets/images/skills/terraform.svg"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Polytechnic University of Armenia",
      logo: require("./assets/images/politec-logo.png"),
      subHeader: "Bachelor of Engineering and   Computer Science",
      duration: "September 2012 - May 2018",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineer", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps Engineer",
      progressPercentage: "100%"
    },
    {
      Stack: "Platform Engineer",
      progressPercentage: "100%"
    },
    {
      Stack: "SRE Engineer",
      progressPercentage: "100%"
    },
    {
      Stack: "Infra/Cloud Engineer",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior DevOps Engineer",
      color: "green",
      company: "Goya CJCS",
      date: "June 2019 – Present",
      descBullets: [
        "Architected and provisioned cloud solutions with a focus on scalability, security, and compliance.",
        "Optimized technical and business processes for improved productivity",
        "Supervised cloud architecture implementations ensuring service quality",
        "Developed platforms to enhance developer workflows"
      ]
    },
    {
      role: "Software & Devops Engineer",
      company: "Betconstruct",
      color: "#961963",
      date: "May 2017 – May 2018",
      descBullets: [
        "Designed robust system architectures and optimized software with asynchronous programming",
        "Managed database design and IaC for streamlined infrastructure",
        "Developed CI/CD pipelines and enhanced ELK Stack for insights",
        "Utilized GCP and AWS cloud services for infrastructure scalability"
      ]
    },
    {
      role: "Software Engineer",
      company: "STDev",
      color: "#009dde",
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Executed full-stack development using technologies like PHP, Python, NodeJS",
        "Spearheaded system design from conception to implementation",
        "Drove frontend development leveraging jQuery, UnderscoreJS, and Angular 1",
        "Optimized database schema for superior data management"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Aws Certified Advanced Networking Specialty",
      // subtitle: "",
      image: require("./assets/images/certeficates/aws-certified-advanced-networking-specialty.png"),
      imageAlt: "AWS Certified Advanced Networking",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8e156c68-7639-464a-b3ee-497b8f1723bc/public_url"
        }
      ]
    },
    {
      title: "CKS: Certified Kubernetes Security Specialist",
      // subtitle:"",
      image: require("./assets/images/certeficates/cks-certified-kubernetes-security-specialist.png"),
      imageAlt: "Certified Kubernetes Security Specialist",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "AWS Certified Security – Specialty",
      image: require("./assets/images/certeficates/aws-certified-security-specialty.png"),
      imageAlt: "AWS Certified Security – Specialty",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0c026d99-6ba6-4827-9ee5-22d924bc2b64/public_url"
        }
      ]
    },
    {
      title: "CKAD: Certified Kubernetes Application Developer",
      image: require("./assets/images/certeficates/ckad-certified-kubernetes-application-developer.png"),
      imageAlt: "CKAD: Certified Kubernetes Application Developer",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/1d25a02b-c929-40b6-8c89-49b1a786510e/public_url"
        }
      ]
    },
    {
      title: "CKA: Certified Kubernetes Administrator",
      image: require("./assets/images/certeficates/cka-certified-kubernetes-administrator.png"),
      imageAlt: "CKA: Certified Kubernetes Administrator",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fabbfeb9-4f72-409f-b5fe-a4701f6231fe/public_url"
        }
      ]
    },
    {
      title: "AWS Certified DevOps Engineer – Professional",
      image: require("./assets/images/certeficates/aws-certified-devops-engineer-professional.png"),
      imageAlt: "AWS Certified DevOps Engineer – Professional",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/64da8166-2e26-4a15-b320-62856e89a2a9/public_url"
        }
      ]
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      image: require("./assets/images/certeficates/hashicorp-certified-terraform-associate-002.png"),
      imageAlt: "HashiCorp Certified: Terraform Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/bd0b7d90-c0ca-4b6c-bcd8-6ef53c106e9f/public_url"
        }
      ]
    },
    {
      title: "AWS Certified SysOps Administrator – Associate",
      image: require("./assets/images/certeficates/aws-certified-sysops-administrator-associate.png"),
      imageAlt: "AWS Certified SysOps Administrator – Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/bf47867c-ee12-4589-9eb7-4715f80e83bd/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Developer – Associat",
      image: require("./assets/images/certeficates/aws-certified-developer-associate.png"),
      imageAlt: "AWS Certified Developer – Associat",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/59156afa-7fd1-4316-a6ff-34c5f03e6306/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      image: require("./assets/images/certeficates/aws-certified-solutions-architect-associate.png"),
      imageAlt: "AWS Certified Solutions Architect – Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/51c01b7e-7612-4852-ae22-8874411da043/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: emoji(
    "INTERESTED IN COLLABORATING OR JUST WANT TO SAY HELLO? MY INBOX IS ALWAYS OPEN! 💌"
  ),
  email_address: "grigor.poghosyan.gp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
