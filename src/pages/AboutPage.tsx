import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt odit
        esse aliquam placeat? Id eligendi iure facilis quisquam fuga!
      </p>
      <button onClick={() => history.push('/')} className='btn'>
        На главную
      </button>
    </>
  );
};
