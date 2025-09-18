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
      <p>I'm the Head of QA at Proudcloud, where I lead quality assurance initiatives and drive 
      testing excellence across our products. Beyond my corporate role, I'm passionate about content 
      creation and manage 5 technology blogs along with a content syndication network.</p>
      
      <p>My expertise spans quality assurance, test automation, content strategy, and team leadership. 
      I believe in building robust testing frameworks, creating valuable content, and fostering 
      a culture of quality and continuous improvement.</p>
      
      <h4>What I Do</h4>
      <ul>
        <li>Quality Assurance Leadership</li>
        <li>Test Automation & Framework Development</li>
        <li>Content Creation & Blog Management</li>
        <li>Content Syndication Strategy</li>
        <li>Team Leadership & Process Improvement</li>
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
          <h4>Quality Assurance</h4>
          <div className="skills-grid">
            <span className="skill-item">Test Automation</span>
            <span className="skill-item">Selenium WebDriver</span>
            <span className="skill-item">Cypress</span>
            <span className="skill-item">API Testing</span>
            <span className="skill-item">Performance Testing</span>
            <span className="skill-item">Test Strategy</span>
          </div>
        </div>
        
        <div className="skills-section">
          <h4>Content & Syndication</h4>
          <div className="skills-grid">
            <span className="skill-item">WordPress</span>
            <span className="skill-item">Content Management</span>
            <span className="skill-item">SEO Optimization</span>
            <span className="skill-item">RSS Syndication</span>
            <span className="skill-item">Analytics & Reporting</span>
            <span className="skill-item">Editorial Strategy</span>
          </div>
        </div>
        
        <div className="skills-section">
          <h4>Leadership & Tools</h4>
          <div className="skills-grid">
            <span className="skill-item">Team Leadership</span>
            <span className="skill-item">Agile/Scrum</span>
            <span className="skill-item">JIRA</span>
            <span className="skill-item">Jenkins/CI-CD</span>
            <span className="skill-item">Power BI</span>
            <span className="skill-item">SQL</span>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content">
        <h3>Resume</h3>
        
        <div className="resume-section">
          <h4>Professional Summary</h4>
          <p>Experienced QA leader and content strategist with expertise in test automation, 
          quality assurance, and content syndication. Currently serving as Head of QA at Proudcloud 
          while managing a network of 5 technology blogs. Strong background in building testing 
          frameworks and driving quality initiatives.</p>
        </div>
        
        <div className="resume-section">
          <h4>Current Role</h4>
          <div className="education-item">
            <h5>Head of QA - Proudcloud</h5>
            <p>Leading quality assurance initiatives, test automation frameworks, and QA team management. 
            Responsible for ensuring product quality and implementing best practices across development lifecycle.</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h4>Content Creation</h4>
          <div className="education-item">
            <h5>Blog Network & Content Syndication</h5>
            <p>Managing 5 technology blogs with content syndication across multiple platforms. 
            Focus on quality content creation, SEO optimization, and audience engagement.</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h4>Key Projects</h4>
          <ul>
            <li>QA Automation Framework - Comprehensive testing solution reducing testing time by 70%</li>
            <li>Content Syndication Platform - Multi-blog management and distribution system</li>
            <li>Quality Metrics Dashboard - Real-time QA performance and metrics tracking</li>
            <li>Blog Network Management - Content strategy and SEO optimization across 5 blogs</li>
          </ul>
        </div>
        
        <div className="resume-section">
          <h4>Core Competencies</h4>
          <ul>
            <li>Quality Assurance Leadership</li>
            <li>Test Automation & Strategy</li>
            <li>Content Creation & Syndication</li>
            <li>Team Management & Process Improvement</li>
            <li>SEO & Digital Marketing</li>
            <li>Agile & DevOps Practices</li>
          </ul>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tab-content">
        <h3>Get In Touch</h3>
        <p>I'm always interested in discussing quality assurance, content strategy, or potential collaborations. 
        Feel free to reach out if you'd like to connect or explore opportunities!</p>
        
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
            <input type="text" id="subject" name="subject" placeholder="QA Consultation / Content Collaboration" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your QA needs, content ideas, or just say hello!"></textarea>
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