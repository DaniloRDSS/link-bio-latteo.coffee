import { links } from './links.js';

const container = document.getElementById('links');

links.forEach(link => {
  const a = document.createElement('a');
  a.href = link.url;
  a.textContent = link.label;
  a.target = "_blank";

  container.appendChild(a);
});


// Ano automatico
const elementoAno = document.getElementById('ano-atual');
elementoAno.textContent = new Date().getFullYear();
    