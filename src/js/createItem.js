export default function createItems (array) {
    const item = array.map(({name, image, bloom_time, fact})=>{
return `
      <li class="card">
        <img class="card-image" src="${image}" alt="${name}">
        <h2 class="card-title">${name}</h2>
        <p class="card-info">
          <strong>Цвіте:</strong> ${bloom_time}
        </p>
        <p class="card-fact">${fact}</p>
      </li>
    `;
  }).join("");
  return item
}
