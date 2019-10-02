import React, { Component } from 'react';

import Menu from './Menu.js';
import Home from './Home.js';
import About from './About.js';

import './Page.css';

class Page extends Component {
  render() {

    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

     if (content) {
        return (
            <div>
    	        <Menu data={content.page.menu} switchLanguage={switchLanguage}/>
    	            <div className="container">
    	                <div className="row">
    	                    <div className="col-md-10 col-md-offset-1">
    	                      <Home data={content.page.home}/>
    	                      <About data={content.page.about}/>
                        	</div>
                      	</div>
                    </div>
            </div>
        );
      }
      else {
        return null;
      }
  }
}

export default Page;