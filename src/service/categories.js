//Render de la vista categoria

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";



const handleFilterProductsByCategory = (categoriaIn) =>{
    const products = handleGetProductLocalStorage();

    switch(categoriaIn){
        
        case "Hamburguesa":
        case "Papas frita":
        case "Gaseosa":
            const result = products.filter((el) => el.categoria === categoriaIn);
            handleRenderList(result);
        
        break;
        case "Mayor precio":
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
        break;
        case "Menor precio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
        break;

        default:
            case categoriaActiva:
            handleRenderList(products);
            break;
       
    }
}; 



export const RenderCategories = () => {
    const ulList = document.getElementById("listFilter");

    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesa">Hamburguesas</li>
        <li id="Papas frita">Papas fritas</li>
        <li id="Gaseosa">Gaseosas</li>
        <li id="Mayor precio">Mayor precio</li>
        <li id="Menor precio">Menor precio</li>
    `;
    const liElements = ulList.querySelectorAll("li");

    liElements.forEach((liElement)=>{
        liElement.addEventListener('click', ()=>{
            handleClick(liElement);
            })
    })

    const handleClick = (elemento) =>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }else{
                if(elemento=== el ){
                    el.classList.add('liActive');

                }
            }
        }
        ));

    };

};
