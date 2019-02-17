import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import Navbar from '../imports/ui/navbar.js';

Meteor.startup(() => {
  render(<Navbar />, document.getElementById('navbar'));
});
