import React from 'react';
import {render} from 'react-dom';

const Contact = ({contact, item}) =>
      <li>
      	{contact.name} {contact.phone} {item}
      </li>

export default Contact;
