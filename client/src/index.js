import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const reactRoot = createRoot(root);
reactRoot.render(createElement(App));
