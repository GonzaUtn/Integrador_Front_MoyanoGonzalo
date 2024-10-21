/* ------ POPUP --------*/

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../service/products";


const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    handleCancelButton();
});

const handleCancelButton = () => {
    closeModal();
};

const handleDeleteButton = ()=>{
    handleDeleteProduct();
};

const buttonDelete = document.getElementById("deleteButton");
buttonDelete.addEventListener('click', () => {
    handleDeleteButton();
});





//FUNCIONES PARA ABRIR Y CERRAR EL POP UP
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";

    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    } else{
        buttonDelete.style.display = "none";
    }


    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        img = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value= productoActivo.nombre;
        img.value= productoActivo.img;
        precio.value= productoActivo.precio;
        categoria.value= productoActivo.categoria;
    }


};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
   
};

const resetModal = () =>{
    const nombre = document.getElementById("nombre"),
        img = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value= "";
        img.value= "";
        precio.value= "";
        categoria.value= "Seleccione una Categoria";
};



