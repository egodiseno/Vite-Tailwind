import './styles.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'

document.getElementById('app').innerHTML = `
  <div class="container mx-auto">
    <div class="flex gap-x-2">
        <h1 class="text-4xl font-bold text-blue-600">Hello from Vanilla JS!</h1>
        <img src="${javascriptLogo}" alt="Logo JS"  class="inline"/>
    </div>
    <p class="mt-4">
        This is a simple setup using Vite
        <img src="${viteLogo}" alt="Logo Vite" class="inline" />, Tailwind CSS, and Vanilla JavaScript.
    </p>
  </div>
`;
