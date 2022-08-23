

export const createActualItems = (nombre,imgUrl,price,categoria,link,description,id) => {
    const content = `<div class="listado-productos__item">
                        <img class="item__img" src=${imgUrl}>
                        <h6 class="item__title">${nombre}</h6>
                        <p class="item__price">${price}</p>
                        <p class="item__description">${description}</p>
                        <button class="item__button btn btn-primary" data-button-article>
                        <a href=${link} class="item__link" id=${id}>Ver Producto</a>
                        </button>
                    </div>
                    `;
                    if(window.location.pathname == "/index.html"){
                        const listadoItems = document.querySelectorAll("[data-categorias-productos]");
                        listadoItems[categoria].innerHTML= listadoItems[categoria].innerHTML + content;
                    }

    
}




export default createActualItems


