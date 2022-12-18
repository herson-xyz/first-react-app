// What is this doing? 
// https://notes.herson.xyz/3+-+Studio+Notes/12/Documentation+-+First+React+App+-+1

import { createRoot } from 'react-dom/client';
import App from './App.js';
import './style.css'

const root = createRoot(document.querySelector('#root'));

root.render(
    <div>
        <App></App>
    </div>
)