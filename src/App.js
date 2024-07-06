import React,{useState} from 'react';
import './App.css';
import Coding from "./Assests/Coding.jpeg"
import Dashboard from "./Assests/Dashboard-.jpg"
import Uiux from "./Assests/Uiux.jpeg"
import Web from "./Assests/Web.png"
import Dash from "./Assests/Dash.png"
import Art from"./Assests/Art.png"
import Girl from"./Assests/Girl.png"


function App() {
 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is where you would typically handle form submission
    // For example, you can send the data to a server or API
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    setEmail('');
    setMessage('');
  };
  
 

  const handleImageMouseOver = () => {
    // Add logic for image mouseover here
    console.log('Image Mouse Over');
  };
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const projects = [
    {
      image: Dash,
      title: 'DASHBOARD',
      description: 'Created a dynamic dashboard on the topic Covid-19, helped analyze the number of Covid cases all over the world with the help of Tableau.',
    },
    {
      image: Girl,
      title: 'WEB DESIGN',
      description: 'With the concepts of Front-end web development, created a stunning portfolio website using HTML & CSS.',
    },
    {
      image: Art,
      title: 'REAL TIME PROJECT',
      description: 'Created a modal component for the Art of Living website with the concepts of Tailwind, React.js, TypeScript & HTML. Got exposure to a real-time project.',
    },
  ];
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
 
  return (
    
  <div class="h-screen top-0 bg-gradient-to-b from-purple-200 to 400 shadow-inner dark:bg-gray-500 ">
       <div className="hidden lg:flex space-x-4 ml-[550px]">
       <a
        href="#"
        className={`text-black font-semibold text-2xl ${activeLink === 'Home' ? 'hover:text-purple-300 hover:border-white-300 border-b-2' : ''} `}
        onClick={() => handleLinkClick('Home')}
      >
        Home
      </a>
      <a
        href="#about "
        className={`text-black font-semibold  text-2xl ${activeLink === 'About ' ? 'hover:text-purple-300 hover:border-white-300 border-b-2' : ''}`}
        onClick={() => handleLinkClick('About ')}
      >
        About 
      </a>
      <a
        href="#skills"
        className={`text-black  font-semibold text-2xl ${activeLink === 'Skills' ? 'hover:text-purple-300 hover:border-white-300 border-b-2' : ''}`}
        onClick={() => handleLinkClick('Skills')}
      >
        Skills
      </a>
      <a
        href="#projects"
        className={`text-black font-semibold text-2xl ${activeLink === 'Projects' ? 'hover:text-purple-300 hover:border-white-300 border-b-2' : ''}`}
        onClick={() => handleLinkClick('Projects')}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`text-black font-semibold text-2xl ${activeLink === 'Contact' ? 'hover:text-purple-300 hover:border-white-300 border-b-2' : ''}`}
        onClick={() => handleLinkClick('Contact')}
      >
        Contact
      </a>
      
          </div>
      <div id="home">
  <div class="bg-white p-6 rounded-lg shadow-md mt-[80px] w-[80%] h-[600px] ml-[150px] mr-[300px]">
  <h1 class="text-3xl font-bold font-sans ">HI,
    I AM DEEPIKA
</h1>
<h4 class="font-bold ml-[420px] mt-[100px]">COMPUTER SCIENCE & DESIGN STUDENT</h4>
<p class="ml-[350px] mt-[10px] text-xl font-normal font-sans">A passionate computer science engineer  with a keen<br></br> eye for Web development, machine learning algorithms..<br></br> Welcome to my online portfolio, where creativity meets<br></br> functionality.</p>
<button className='text-black border-2 rounded-xl px-6 py-3 my-2 ml-[500px] flex items-center hover:bg-purple-200 hover: border-purple-100'>Download CV
      </button>
</div>
</div>
<div id="about">
  <div class="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[50px] w-[80%] h-[600px] ml-[150px]  text-xl font-normal font-sans   "> 
  <p className='ml-[500px] font-bold text-[36px]'>About </p>
  <p className='ml-[250px] mt-[50px]'>I am a dedicated and creative computer science engineer with a passion<br></br> for technology and innovation. My journey in the world of programming<br></br> has been a thrilling exploration, leading me to develop a diverse skill set.<br></br> I specialize in web development, mastering languages such as HTML, CSS,<br></br> and JavaScript, along with popular frameworks like React and Node.js.
  <br></br>My enthusiasm for coding goes hand-in-hand <br></br>with my commitment to delivering impactful solutions. I take pride in my<br></br> ability to transform ideas into functional and visually appealing websites,<br></br> leveraging both front-end and back-end technologies.<br></br> Through continuous learning and hands-on experience, I have honed my <br></br>problem-solving skills and gained valuable insights into crafting efficient,<br></br> user-friendly applications.</p>
  </div>
  </div>
  <div id="skills">
  <div class="bg-white p-6 rounded-lg shadow-lg mt-[50px] w-[80%] h-[600px] ml-[150px]  text-xl font-normal font-sans"> 
  <p className='ml-[500px] font-bold text-[36px]'>Skills</p>
  <div className='flex flex-row '>
  <p className='ml-[50px] mt-[100px]'>In my journey as a skilled professional,<br></br> I have cultivated a diverse set of technical<br></br> and soft skills that collectively define my<br></br> capabilities.<br></br> Proficient in an array of programming languages,<br></br> I specialize in web development,  in HTML, CSS<br></br> and JavaScript, as well as popular frameworks <br></br>such as React and Node.js.</p>
  <div className=''>
  <div class="flex flex-row mt-[0px] ml-[100px]">
  <div class="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[20px] w-[212px] h-[176px] ml-[00px]  text-xl font-normal font-sans hover:bg-[white] transition-all duration-300 "> 
  <img src={Coding} alt="dashboard" className="w-[55px] h-[50px] ml-[50px]"></img>
  <p className="font-bold ml-[40px]">CODING</p>
 <p className='font-normal ml-[20px]'>C++,Python,R </p>
   </div>
   <div class="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[50px] w-[212px] h-[176px] ml-[10px]  text-xl font-normal font-sans  hover:bg-[white] transition-all duration-300"> <img src={Dashboard} alt="dashboard" className="w-[55px] h-[50px] ml-[50px]"></img>
  <p className="font-bold ml-[40px]"> Dashboard  </p>
  <p className="font-bold ml-[60px]"> Design </p>
  
  <p className='font-normal ml-[50px]'>Tableau </p>
   </div>
   </div>
   <div class="flex flex-row ml-[100px]">
   <div class="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[10px] w-[212px] h-[176px] ml-[00px]  text-xl font-normal font-sans  hover:bg-[white] transition-all duration-300"> <img src={Web} alt="dashboard" className="w-[55px] h-[50px] ml-[50px]"></img>
  <p className="font-bold ml-[40px]">Web Devlopment</p>
   </div>
   
  <div class="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[40px] w-[212px] h-[176px] ml-[10px]  text-xl font-normal font-sans  hover:bg-[white] transition-all duration-300"> <img src={Uiux} alt="dashboard" className="w-[55px] h-[50px] ml-[50px]"></img>
  <p className="font-bold ml-[40px]">Ui-UX Design</p>
  </div>
   </div>
   </div>
  </div>
  </div>
  </div>
  {/* Project */}
  <div id='projects' >
      <div className="bg-[#EDD8FF80] p-6 rounded-lg shadow-lg mt-[50px] w-[80%] h-[100%] ml-[150px] text-xl font-normal font-sans ">
        <p className='ml-[500px] font-bold text-[36px]'>PROJECTS</p>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-row' onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
            <img src={project.image} alt={project.title} className="w-[300px] h-[180px] ml-[50px] mt-[30px] shadow-md shadow-[#040c16] hover:scale-110 duration-500 " />
            <div className='flex flex-col'>
              <h4 className='font-bold mt-[30px] ml-[50px]'>{project.title}</h4>
              <p className={`ml-[50px] mt-[20px] ${hoveredItem === index ? 'font-bold' : ''}`}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     {/* contact */}
     <div id='contact'>
     <div class="bg-[white] p-6 rounded-lg shadow-lg mt-[50px] w-[80%] h-[80%] ml-[150px]  text-xl font-normal font-sans">
     <p className='ml-[500px] font-bold text-[36px]'>Contact</p>
     <p className='ml-[200px] mt-[50px]'>Please Contact me directly at{" "}
     <a className="underline" href="mailto:deepika212003@gmail.com">deepika212003@gmail.com</a> or through this form.</p>
     <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 ml-[300px] mt-[50px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 w-[500px] border rounded-md ml-[300px]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 ml-[300px]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            required
            className="mt-1 p-2 ml-[300px] w-[500px] border rounded-md"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ml-[300px]">
          Submit
        </button>
      </form>
    </div>
    </div>
     </div>

 
  
  );
}

export default App;
