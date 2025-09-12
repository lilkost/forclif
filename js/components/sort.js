export const sortModal = () => {
    const sort = document.querySelector(".catalog__sort-name");
    const sortModal = document.querySelector(".catalog__sort-values");
    const sortItems = document.querySelectorAll(".catalog__sort-val");

    if(!sort) return;

    sort.addEventListener("click", ()=>{
        sortModal.classList.add("is-open");
    });

    window.addEventListener("click", (event)=>{
        if(!event?.target?.classList?.value.includes("sort")) sortModal.classList.remove("is-open");
    });

    sortItems.forEach(sortItem=>{
        sortItem.addEventListener("click", ()=>{
            sortItems.forEach(i=>i.classList.remove("is-active"));
            sortItem.classList.add("is-active")
            document.querySelector(".catalog__sort-name").textContent = sortItem.textContent;
            sortModal.classList.remove("is-open")
        });
    })

        window.addEventListener("keydown", (event)=> {
            if(event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                sortModal.classList.remove("is-open");
            }
        });
}