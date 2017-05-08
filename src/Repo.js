import React from 'react';
import {render} from 'react-dom';

const Repo = ({repo, item}) =>
      <article>
				{item}
				<a href={repo.url}>
		      <h3 className='title'>{repo.name}</h3>
				</a>
				<p className='description'>{repo.description}</p>
				<span className='created_at'>{repo.created_at}</span>
				<span className='updated_at'>{repo.updated_at}</span>
				<br/>
				<span className='open_issues'>{repo.open_issues}</span>
				<span className='watchers'>{repo.watchers}</span>
				<p className='language'>{repo.language}</p>
      </article>
export default Repo;
