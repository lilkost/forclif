export const headerFn = () =>{
    const headerCatalogOpenNode = document.querySelector(".header__catalog-btn");
    const catalog = document.querySelector(".header-catalog");

    const header = document.querySelector(".header");

    if(headerCatalogOpenNode && catalog) {
        headerCatalogOpenNode.addEventListener("click",()=>{
            headerCatalogOpenNode.classList.toggle("is-active");
            catalog.classList.toggle("is-open");
        })

        window.addEventListener("keydown", (event)=> {
            if(event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                headerCatalogOpenNode.classList.remove("is-active");
                catalog.classList.remove("is-open");
            }
        });

        window.addEventListener("click", (event)=> {
            if (event?.target?.classList?.value?.includes('header-catalog__inner') && catalog){
                headerCatalogOpenNode.classList.toggle("is-active");
                catalog.classList.toggle("is-open");
            }
        });
    }
    
    if(header){
        const headerRow = header.querySelectorAll(".header__row")[0];
        let headerRowSize = headerRow.clientHeight;
        let headerSize = header.clientHeight;
        catalog.style.top

        if(window.scrollY > 100) {
            header.style.top = `-${headerRowSize}px`;
            catalog.style = `--top: ${headerSize - headerRowSize}px;`
        }else {
            header.style.top = `-${0}px`;
            catalog.style = `--top: ${headerSize}px;`
        }

        document.addEventListener('scroll', function(event) {
                headerRowSize = headerRow.clientHeight;
                headerSize = header.clientHeight;
            
            if(window.scrollY > 100) {
                header.style.top = `-${headerRowSize}px`;
                catalog.style = `--top: ${headerSize - headerRowSize}px;`
            }else {
                header.style.top = `-${0}px`;
                catalog.style = `--top: ${headerSize}px;`
            }

        });
    }
}