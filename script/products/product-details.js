export const handleArticleDetails = (nombre,imgUrl,price,description,id) => {
    const verMasButton = document.querySelectorAll("[data-button-article]");
    verMasButton.forEach((e)=> e.addEventListener("click",(event)=> {
        event.preventDefault();
        if (event.target.id == id){
            showDetails(nombre,imgUrl,price,description)
            body.classList.toggle("blurred")
            window.scrollTo(0,0)            
        } 
        }
    ));
}

const showDetails = (nombre,imgUrl,price,description) =>{
    const articleContainer = document.createElement("div");
    let content = `<div class="content__container">
                        <h4 class="content__title"> ${nombre} </h4>
                        <div class="content__info-container">
                            <img class="content__img" src="${imgUrl}">
                            <p class="content__price"> ${price} </p>
                            <p class="content__details"> ${description} </p>
                        <div>
                        <img class="content__close-button" src="../../img/cross.png">
                   </div>`
    articleContainer.innerHTML = content;
    body.appendChild(articleContainer)
    const closeArticleButton = document.querySelector(".content__close-button");
    closeArticleButton.addEventListener("click", ()=> closeDetails(articleContainer))
}
 const closeDetails = (articulo) => {
    body.removeChild(articulo);
    body.classList.remove("blurred");
    body.style.overflow = "scroll"
 }


export default handleArticleDetails

