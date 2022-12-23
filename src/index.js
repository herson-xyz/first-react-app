// Notes about createRoot -> https://notes.herson.xyz/3+-+Studio+Notes/12/ChatGPT+Documentation+-+First+React+App+-+1

import { createRoot } from 'react-dom/client';
import App from './App.js';
import './style.css'

const root = createRoot(document.querySelector('#root'));

root.render(
    <div>
        <App>
            <h1>My First React App</h1>
            <h2>And a fancy subtitle</h2>
        </App>
    </div>
)