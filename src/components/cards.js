import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/tabs.css';

function vCards() 
{ 
        return <div className="projects-container">
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>QA Automation Framework</h2></Card.Title>
            <Card.Text>
              <h6>Comprehensive test automation framework implemented at Proudcloud, featuring 
              end-to-end testing, API testing, and continuous integration. Reduced testing time 
              by 70% and improved release confidence.</h6>
              <div className="tech-stack">
                <span className="tech-tag">Selenium</span>
                <span className="tech-tag">Cypress</span>
                <span className="tech-tag">Jenkins</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>Content Syndication Platform</h2></Card.Title>
            <Card.Text>
              <h6>Multi-blog content management and syndication system that distributes content 
              across 5 different blogs. Features automated publishing, SEO optimization, 
              and analytics tracking for content performance.</h6>
              <div className="tech-stack">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">RSS</span>
                <span className="tech-tag">Analytics</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>Quality Metrics Dashboard</h2></Card.Title>
            <Card.Text>
              <h6>Real-time dashboard for tracking quality metrics, test coverage, 
              defect trends, and team performance. Provides actionable insights for 
              continuous improvement and stakeholder reporting.</h6>
              <div className="tech-stack">
                <span className="tech-tag">Power BI</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">APIs</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='card-border'>
          <Card.Body>
            <Card.Title><h2>Blog Network Management</h2></Card.Title>
            <Card.Text>
              <h6>Comprehensive management system for 5 technology blogs, featuring 
              content planning, editorial calendars, SEO optimization, and performance 
              analytics. Streamlined content creation and publication workflow.</h6>
              <div className="tech-stack">
                <span className="tech-tag">CMS</span>
                <span className="tech-tag">SEO Tools</span>
                <span className="tech-tag">Analytics</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
} 

export default vCards;