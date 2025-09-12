export const createAccordionFn = () => {
    const accordionNode = document.querySelectorAll(".accordion");
    const accordionHeader = document.querySelectorAll(".header-catalog__name-category");

    if(accordionNode){
            accordionNode.forEach(accordion=> {
        const topNode = accordion?.querySelector(".accordion__top");

        topNode.addEventListener("click", ()=> {
            accordion.classList.toggle("is-open");
        });
    });
    }

    if(accordionHeader) {
        const categoryList = document.querySelectorAll(".header-catalog__list");
        if(!categoryList) return;

        accordionHeader.forEach(accordion=>{
            accordion.addEventListener("click",()=>{

                accordionHeader.forEach(i=>i.classList.remove("is-active"));

                const attr = accordion.getAttribute("data-id")?.trim();
                
                categoryList.forEach(list=>{
                    const listAttr = list.getAttribute("data-body-id")?.trim();

                    if(listAttr === attr) {
                        accordion.classList.add("is-active");
                        list.classList.add("is-open")
                    } else {
                        list.classList.remove("is-open")
                    }
                })
            });
        })
    }

}