/* -Productos-*/

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import {  handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";


//Guardamos

//Funcion para guardar
export const handleSaveOrModify = () => {

    const nombre = document.getElementById("nombre").value,
        img = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;
        let object = null;
        if(productoActivo){
           object = {
               ...productoActivo,
                nombre,
                img,
                precio,
                categoria,
            };
        }else{
             object = {
                id: new Date().toISOString(),
                nombre,
                img,
                precio,
                categoria,
            };
        }
        Swal.fire({
            title: "Correcto!",
            text: "Producto guardado correctamente!",
            icon: "success"
          });
    
        setInLocalStorage(object);
        handleGetProductToStore();
        closeModal();
    /* Podríamos agregar un pop up de elemento agregado */
};




export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Deseas eliminar el elemento?",
        text: "Si lo eliminas, será permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);

            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });
};