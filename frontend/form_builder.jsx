import React from 'react';
import ReactDOM from 'react-dom';

import Index from './index';

const Root = () => {
  return (
    <main>
      <h1>Form Builder</h1>
      <Index />
    </main>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
