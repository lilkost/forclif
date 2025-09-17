export const filterCatalogFn = () =>{
    const parentFIlterNode = document.querySelector(".catalog__aside"),
        closeBtnNode = document.querySelector(".catalog__aside-close-btn"),
        btnOpenNode = document.querySelector(".catalog__btn-open");

    if(!btnOpenNode || !closeBtnNode || !parentFIlterNode) return;

    const stateFilterNode = (state) =>{
        if(state === "remove") {
            parentFIlterNode.classList.remove("is-open")
        } else {
            parentFIlterNode.classList.add("is-open");
        }
    }

    btnOpenNode.addEventListener("click",()=>stateFilterNode("open"));
    closeBtnNode.addEventListener("click",()=>stateFilterNode("remove"));
}