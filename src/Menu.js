import React from "react";
import "./Menu.css";
import Data from './Data.json';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Pll from 'react-pll';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi I`m Armin</h1>
        <h2>Here`s my Resume</h2>

        <nav>
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Home">Home</a>
          <a href="#SocialMedias">Social Medias</a>
          <div class="animation start-home"></div>
        </nav>
        <div id="About" class="Section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit neque rem repellat dicta voluptatum sed, veniam tempore, dolorum harum nobis incidunt magni culpa consequatur repudiandae unde, obcaecati minus doloremque!</div>
        <div id="Skills" class="Section">
            <Pll alt="Html Logo" height={100} language="html"/>
            <Pll alt="Javascript Logo" height={100} language="javascript"/>
            <Pll alt="Python Logo" height={100} language="python"/>
            <Pll alt="C Logo" height={100} language="c"/>
            <Pll alt="Cpp Logo" height={100} language="cpp"/>
            <Pll alt="linux Logo" height={100} language="linux"/>
            
        </div>
        <div id="Home" class="Section">{Data.Home}</div>
        <div id="SocialMedias" class="Section"> 
            <SocialIcon url="https://www.linkedin.com" />
            <SocialIcon url="https://www.instagram.com" />
            <SocialIcon url="https://stackoverflow.com" />
            <SocialIcon url="https://github.com" />
        </div>
      </div>
    );
  }
}

export default Menu;
