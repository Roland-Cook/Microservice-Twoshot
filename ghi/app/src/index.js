import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



async function loadClothes() {
  const response = await fetch('http://localhost:8080/api/shoes/');
  const response2 = await fetch('http://localhost:8090/api/hats/');

  if (response.ok && response2) {
    const data = await response.json();
    const data2 = await response2.json();

        root.render(
      <React.StrictMode>
        <App shoes={data.shoes} hats={data2.hats} />
      </React.StrictMode>
    );

  } else {
    console.error(response);
  }
}



loadClothes();
