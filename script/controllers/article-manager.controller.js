import { createActualItems } from "../products/products.js";
import { handleArticleDetails } from "../products/product-details.js"

if(window.location.pathname == "/article-add.html"){
    const formulario = document.querySelector("[data-article-manager-form]");

    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();
        const articleName = document.querySelector("#nombreArt").value;
        const articleDescription = document.querySelector("#descripcion").value;
        const articleImgURL = document.querySelector("#img-url").value;
        const articlePrice = document.querySelector("#precio").value;
        const articleCategoria = document.querySelector("#categoria").value;
        console.log(articleName + "----" + articleDescription + "----" + articleImgURL + "----" + articlePrice + "----" + articleCategoria)
        createNewItem(articleName,articleImgURL,articlePrice,articleCategoria,"#",articleDescription)
    }) 

}

const listaProductos = () => fetch("http://localhost:3000/producto").then((response) => response.json());  

const categorias = ["Agendas", "Decoracion", "Sublimacion", "Otros"];

listaProductos().then((data)=>{
    data.forEach(element => {
        createActualItems(element.name,element.imgURL,element.price,categorias.indexOf(element.section),element.link,element.description, element.id)
    });
    data.forEach(element => {
        handleArticleDetails(element.name,element.imgURL,element.price,element.description,element.id);
    })
    
}).catch(error => {
    alert("Ocurrió el siguiente error: " + error)
})

const createNewItem  = (name,imgURL,price,section,link,description) => {
    fetch("http://localhost:3000/producto",{
        method: "POST",
        headers: {
            "Content-Type" : "Application/json",
        },
        body: JSON.stringify({name,imgURL,price,section,link,description})
    });
};

