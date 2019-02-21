import React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
  width: 100%;
  height: 450px;
`;

const GoogleMap = props => {
  return (
    <div style={{marginBottom: "-6px"}}>
      <Frame
        src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=%20212%20Collier%20Dr%20suite%20h3%20Sevierville%20Tn+Shear%20Madness%20Salon&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="Google Map of Shear Madness Beauty Salon location"
      >
        <a href="https://www.maps.ie/map-my-route/">Map a route</a>
      </Frame>
    </div>
  )
}

export default GoogleMap;
