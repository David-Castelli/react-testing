import React from 'react';
import {render} from 'react-dom';

const Repo = ({repo, item}) =>
      <article>
      <h3>
      	{repo.name}
      </h3>
      <p>
      	{repo.description}
      </p>
      	{item}
      </article>

export default Repo;