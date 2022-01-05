import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VCards from './cards';

function HTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects</Tab>
      <Tab >Skills</Tab>
      <Tab >Resume</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
    <div>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </TabPanel>
    <TabPanel>
      <VCards />
    </TabPanel>
    <TabPanel>
      <div>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </TabPanel>
    <TabPanel>
    <div class="contact2" style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)" id="contact">
  <div class="container">
    <div class="row contact-container">
      <div class="col-lg-12">
        <div class="card card-shadow border-0 mb-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-box p-4">
                <h4 class="title">Contact Us</h4>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="name">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="email">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="phone">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="location">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="message">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i class="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 bg-image" style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)">
              <div class="detail-box p-4">
                <h5 class="text-white font-weight-light mb-3">ADDRESS</h5>
                <p class="text-white op-7">601 Sherwood Ave.
                  <br> San Bernandino</p>
                <h5 class="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p class="text-white op-7">251 546 9442
                  <br> 630 446 8851</p>
                <div class="round-social light">
                  <a href="#" class="ml-0 text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-facebook"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-twitter"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </TabPanel>
  </Tabs></div>

}

export default HTabs;