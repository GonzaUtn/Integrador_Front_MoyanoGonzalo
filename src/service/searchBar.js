import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName =() =>{
    const inputHeader = document.getElementById("inputSearch");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el)=> el.nombre.
    toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
};


