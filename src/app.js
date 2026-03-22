


import createItems from "./js/createItem"; 
import flowers from "./flowers.json";

const flowersRef = document.querySelector(".list");


document.querySelector(".list").innerHTML = createItems(flowers);