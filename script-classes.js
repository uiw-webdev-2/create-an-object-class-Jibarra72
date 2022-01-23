/**
 * Create a class for the Backpack object type.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
 import House from "./house.js";

 const Land = new House(
   "Red",
   15,
   26,
   "Wood"
 );
 
 const content = `
  <main>
    <article>
      <h1>House</h1>
      <ul>
        <li>Color:${Land.color}</li>
        <li>Height:${Land.height}</li>
        <li>Width:${Land.width}</li>
        <li>Material:${Land.material}</li>
      </ul>
    </article>
  </main>`;
 

 
 document.body.innerHTML = content;