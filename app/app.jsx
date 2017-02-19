import React from 'react';
import ReactDOM from 'react-dom';

import UsingStyleName from './components/UsingStyleName';
import UsingStylesProperty from './components/UsingStylesProperty';
import customStyle from './custom/UsingStyleName.css'

ReactDOM.render(
    <nav>
        <UsingStyleName />
        <UsingStyleName styles={customStyle} />
        <UsingStylesProperty  />
    </nav>
, document.getElementById('app'));