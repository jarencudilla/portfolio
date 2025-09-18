import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/tabs.css';

function vCards() 
{ 
        return <div className="projects-container">
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>React Portfolio Website</h2></Card.Title>
            <Card.Text>
              <h6>A responsive portfolio website built with React.js featuring modern design, 
              interactive components, and smooth animations. Showcases projects, skills, and experience 
              with a clean, professional interface.</h6>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>E-Commerce Platform</h2></Card.Title>
            <Card.Text>
              <h6>Full-stack e-commerce solution with user authentication, product management, 
              shopping cart functionality, and payment integration. Built with modern web technologies 
              for optimal performance and user experience.</h6>
              <div className="tech-stack">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>Task Management App</h2></Card.Title>
            <Card.Text>
              <h6>A collaborative task management application with real-time updates, 
              drag-and-drop functionality, team collaboration features, and progress tracking. 
              Designed for productivity and team coordination.</h6>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Material-UI</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>Weather Dashboard</h2></Card.Title>
            <Card.Text>
              <h6>Interactive weather application with location-based forecasts, 
              historical data visualization, and responsive design. Features real-time weather updates 
              and intuitive user interface for weather tracking.</h6>
              <div className="tech-stack">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">API Integration</span>
                <span className="tech-tag">Chart.js</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
} 

export default vCards;