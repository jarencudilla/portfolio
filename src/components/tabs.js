import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import VCards from './cards';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


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
      <div>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </TabPanel>
    <TabPanel>
      <div> 
        Contact Form

        <label htmlFor="lat">Latitude</label>
        <input type="number" id="lat" name="lat" value={center.lat} onChange={(event) =>
    setCenter({ ...center, lat: Number(event.target.value) })}/>


        <label>Name</label>
        <label>Email</label>

        <label>Message</label>

        <button>Submit</button> 
      </div>
    </TabPanel>
  </Tabs></div>

}

export default HTabs;