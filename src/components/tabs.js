import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VCards from './cards';

function HTabs() 
{ 
  return <div className="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects</Tab>
      <Tab >Skills</Tab>
      <Tab >Resume</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
    <div className="tab-content">
      <h3>About Me</h3>
      <p>I'm a passionate software developer with a strong foundation in full-stack development. 
      I enjoy creating innovative solutions and building applications that make a difference. 
      My journey in tech has been driven by curiosity and a constant desire to learn new technologies.</p>
      
      <p>When I'm not coding, I enjoy spending time with family, exploring new technologies, 
      and contributing to open-source projects. I believe in writing clean, maintainable code 
      and following best practices in software development.</p>
      
      <h4>What I Do</h4>
      <ul>
        <li>Full-Stack Web Development</li>
        <li>Frontend Development with React & JavaScript</li>
        <li>Backend Development with Node.js</li>
        <li>Database Design & Management</li>
        <li>API Development & Integration</li>
      </ul>
    </div>
    </TabPanel>
    <TabPanel>
      <VCards />
    </TabPanel>
    <TabPanel>
      <div className="tab-content">
        <h3>Technical Skills</h3>
        
        <div className="skills-section">
          <h4>Frontend Technologies</h4>
          <div className="skills-grid">
            <span className="skill-item">JavaScript (ES6+)</span>
            <span className="skill-item">React.js</span>
            <span className="skill-item">HTML5</span>
            <span className="skill-item">CSS3</span>
            <span className="skill-item">Bootstrap</span>
            <span className="skill-item">Responsive Design</span>
          </div>
        </div>
        
        <div className="skills-section">
          <h4>Backend Technologies</h4>
          <div className="skills-grid">
            <span className="skill-item">Node.js</span>
            <span className="skill-item">Express.js</span>
            <span className="skill-item">RESTful APIs</span>
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">MySQL</span>
            <span className="skill-item">Firebase</span>
          </div>
        </div>
        
        <div className="skills-section">
          <h4>Tools & Technologies</h4>
          <div className="skills-grid">
            <span className="skill-item">Git & GitHub</span>
            <span className="skill-item">VS Code</span>
            <span className="skill-item">npm/yarn</span>
            <span className="skill-item">Webpack</span>
            <span className="skill-item">Postman</span>
            <span className="skill-item">Chrome DevTools</span>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content">
        <h3>Resume</h3>
        
        <div className="resume-section">
          <h4>Professional Summary</h4>
          <p>Dedicated software developer with expertise in full-stack web development. 
          Experienced in building responsive web applications using modern JavaScript frameworks 
          and backend technologies. Strong problem-solving skills and passion for clean, 
          efficient code.</p>
        </div>
        
        <div className="resume-section">
          <h4>Education</h4>
          <div className="education-item">
            <h5>Computer Science / Software Development</h5>
            <p>Self-taught developer with continuous learning through online courses, 
            documentation, and hands-on projects.</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h4>Key Projects</h4>
          <ul>
            <li>React Portfolio Website - Personal portfolio showcasing projects and skills</li>
            <li>E-Commerce Platform - Full-stack application with payment integration</li>
            <li>Task Management App - Collaborative productivity tool</li>
            <li>Weather Dashboard - Interactive weather application with data visualization</li>
          </ul>
        </div>
        
        <div className="resume-section">
          <h4>Core Competencies</h4>
          <ul>
            <li>Full-Stack Web Development</li>
            <li>Frontend & Backend Architecture</li>
            <li>Database Design & Management</li>
            <li>API Development & Integration</li>
            <li>Version Control (Git)</li>
            <li>Agile Development Practices</li>
          </ul>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content">
        <h3>Get In Touch</h3>
        <p>I'm always interested in new opportunities and collaborations. 
        Feel free to reach out if you'd like to discuss a project or just connect!</p>
        
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project Inquiry" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or just say hello!"></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </div>
        
        <div className="contact-info">
          <h4>Connect with me:</h4>
          <p>📧 Email: jaren.cudilla@example.com</p>
          <p>🌐 GitHub: github.com/jarencudilla</p>
          <p>💼 LinkedIn: linkedin.com/in/jarencharlescudilla</p>
        </div>
      </div>
    </TabPanel>
  </Tabs></div>

}

export default HTabs;