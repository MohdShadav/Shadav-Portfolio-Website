
// Skills Section Logo's
// Frontend Logo
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import jqueryLogo  from './assets/tech_logo/jqueryLogo.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

// backend Logo
import springbootLogo from './assets/tech_logo/springboot.png';
import hibernateLogo  from './assets/tech_logo/hibernateLogo.png';
import JdbcLogo  from './assets/tech_logo/jdbcLogo.png';
import JSPandServlet  from './assets/tech_logo/JSPandServlet.png';
import JwtLogo  from './assets/tech_logo/jwtLogo.png';
import RestApiLogo  from './assets/tech_logo/RestApiLogo.png';
import SpringSecurityLogo  from './assets/tech_logo/SpringSecurityLogo.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

// languages Logo
import javascriptLogo from './assets/tech_logo/javascript.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

// Tools Logo
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import eclipseLogo from './assets/tech_logo/eclipseLogo.png';
import IntelliJIDEALogo from './assets/tech_logo/IntelliJIDEALogo.png';
import mavenLogo from './assets/tech_logo/mavenLogo.webp';



// Education Section Logo's
import AktuLogo from './assets/education_logo/AktuLogo.png';
import UpBoardLogo from './assets/education_logo/UpBoardLogo.png';
import UPBoardLogo1 from './assets/education_logo/UPBoardLogo1.png';

// Project Section Logo's
import GithubPic from './assets/work_logo/GithubPic.png';
import DeliveryFoodPic from './assets/work_logo/DeliveryFoodPic.png';
import AmazonClonePic from './assets/work_logo/AmazonClonePic.png';
import ImageSearchPic from './assets/work_logo/ImageSearchPic.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JQuery', logo: jqueryLogo},
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
       { name: 'Hibernate', logo: hibernateLogo},
      { name: 'JDBC', logo: JdbcLogo},
      { name: 'JWT', logo: JwtLogo},
      { name: 'REST APIs', logo: RestApiLogo},
      { name: 'Spring Security', logo: SpringSecurityLogo},
      { name: 'JSP & Servlet', logo: JSPandServlet},
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'eclipse', logo: eclipseLogo },
      { name: 'Maven', logo: mavenLogo },
      { name: 'IntelliJ IDEA', logo: IntelliJIDEALogo },
    ],
  },
];
  
  // Education Section

  export const education = [
    {
      id: 0,
      img: AktuLogo,
      school: "AKTU (Dr. A.P.J. Abdul Kalam Technical University), Lucknow",
      date: "June 2021 - August 2024",
      grade: "62.4%",
      desc: "I have completed my Bachelor’s degree (B.Tech) in Computer Science and Engineering (CSE) from Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow. During my time at AKTU, I developed a strong foundation in programming, software development, and computer science fundamentals. I studied core subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also participated in various technical workshops and coding events that enhanced my practical skills and problem-solving abilities. My experience at AKTU has played a vital role in shaping my technical expertise and professional growth.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    },
    {
      id: 1,
      img: UpBoardLogo,
      school: "Patel Inter College Dhaunra, Bareilly",
      date: "April 2018 - Aug 2019",
      grade: "70.4%",
      desc: "I have completed my Class 12 education from Patel Inter College, Dhaunra under the U.P. Board, with a focus on Physics, Chemistry, Mathematics (PCM).",
      degree: "U.P Board(XII) with PCM",
    },
    {
      id: 2,
      img: UPBoardLogo1,
      school: "ERA Public School Shahi, Bareilly",
      date: "April 2016 - March 2017",
      grade: "76.67%",
      desc: "I have completed my class 10 education from ERA Public School Shahi, under the U.P board,  with a focus on Science and Computer.",
      degree: "U.P Board(X) - Science with Computer Application",
    },
  ];

  // Project Section

  export const projects = [
    {
      id: 0,
      title: "Food Delivery App",
      description:
        "A modern Food Delivery App built entirely on the frontend using React (Vite) and Bootstrap. It focuses on UI/UX, responsive design, and smooth user interactions.",
      image: DeliveryFoodPic,
      tags: ["React JS", "Vite", "Bootstrap", "JavaScript (ES6+)", "CSS3"],
      github: "https://github.com/MohdShadav/Food-Delivery-App1",
      webapp: "https://food-delivery-app1-five.vercel.app",
    },
    {
      id: 1,
      title: "Amazon Clone Project",
      description:
        "Built a fully frontend-focused food delivery application showcasing responsive UI and interactive user flows.",
      image: AmazonClonePic,
      tags: ["React JS", "Bootstrap", "JavaScript (ES6+)", "CSS3", "Responsive Design"],
      github: "https://github.com/MohdShadav/Amazon-Clone-Project1",
      webapp: "https://rawcdn.githack.com/MohdShadav/Amazon-Clone-Project1/fa56e3d9259ba5508f6d8cd0609fe6807d5aa511/index.html",
    },
    {
      id: 2,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: GithubPic,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/MohdShadav/GitHub-Profile-Search-App",
      webapp: "https://git-hub-profile-search-app-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: ImageSearchPic,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/MohdShadav/Images-Search-App",
      webapp: "https://images-search-app-lac.vercel.app/",
    },
  ];  