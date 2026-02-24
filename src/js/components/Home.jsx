import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Aquí irá el diseño oscuro
import SecondsCounter from './SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
setInterval(() => {
    root.render(<SecondsCounter seconds={counter} />);
    counter++;
}, 1000);
export default Home;