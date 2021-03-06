import React from 'react';
import PropTypes from 'prop-types'

import Hero from '../hero/HeroImage';
import FirstHeading from './FirstHeading'
import Portion1 from './Portion1'
import Portion2 from './Portion2'
import News from '../News/News'
import { achieversData } from './data'


class Achievers extends React.Component {
  constructor() {
    super();
  }
  renderArray() {

  }
  render() {

    return (
    <div>
        <Hero
          style={'header-image'}
        />
       
        
          
          <div className="achievers">
            <div className="content">
              <FirstHeading
                heading={achieversData.firstPart.heading}
                text={achieversData.firstPart.text}
              />
              <Portion1
                achieversData={achieversData}
              />
              <Portion2
                achieversData={achieversData}
              />
            </div>  
            <News/>
            <div className="clear"></div>
          </div>
      </div>
    )
  }
}

export default Achievers