import { RenderCategories } from "./src/service/categories";
import { handleGetProductToStore } from "./src/views/store";

import "./style.css";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/service/searchBar";
import { handleSaveOrModify } from "./src/service/products";



// Aplicación



export let categoriaActiva = null;
export const setCategoriaActiva = (CategoriaIn) =>{
    categoriaActiva= CategoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (ProductoIn) =>{
    productoActivo= ProductoIn;
};



handleGetProductToStore();

RenderCategories();

// HEADER
const buttonAdd = document.getElementById("ButtonAdd");
buttonAdd.addEventListener('click', () => {
    openModal();
});

//Button Aceptar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModify();


});


//Button Search

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});