import { setproductoActivo } from "../../main";


import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
   // Verificación de productos cargados
    handleRenderList(products);
};
export const handleRenderList = (productsIn) => {
    const burguers = productsIn.filter((el) => el.categoria === 'Hamburguesa');
    const papasFritas = productsIn.filter((el) => el.categoria === 'Papas frita');
    const gaseosas = productsIn.filter((el) => el.categoria === 'Gaseosa');

    const renderProductGroup = (productos, title) => {
       // Verificación de productos para renderizar
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                    <div class='containerTargetItem' id="product-${producto.categoria}-${index}">
                        <div> 
                            <img src="${producto.img}"/>
                            <div >
                                <h2>${producto.nombre}</h2>
                            </div>
                            <div class='targetProps'>
                                <p><b>Precio:</b> $ ${producto.precio}</p>
                                
                            </div>
                        </div>
                    </div>`;
            });
            return `
                <section class="sectionStore">
                    <div class='containerTittleSection'>
                    <h3>${title}</h3>
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section> 
            `;
        } else {
            return "";
        }
    };

    const appContainer = document.getElementById("StoreContainer");
    if (appContainer) {
        appContainer.innerHTML = `
            ${renderProductGroup(burguers, "Hamburguesa")}
            ${renderProductGroup(papasFritas, "Papas frita")}
            ${renderProductGroup(gaseosas, "Gaseosa")}
        `;

        const addEvent = (productsIn) => {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                if (productContainer) {
                    productContainer.addEventListener('click', () => {
                        setproductoActivo(element);
                        openModal();
                    });
                } else {
                    console.error(`Element with id 'product-${element.categoria}-${index}' not found`);
                }
            });
        };

        addEvent(burguers);
        addEvent(papasFritas);
        addEvent(gaseosas);
    } else {
        console.error("Element with id 'StoreContainer' not found");
    }
};