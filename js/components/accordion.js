export const createAccordionFn = () => {
    const accordionNode = document.querySelectorAll(".accordion");

    if(!accordionNode) return;

    accordionNode.forEach(accordion=> {
        const topNode = accordion?.querySelector(".accordion__top");

        topNode.addEventListener("click", ()=> {
            accordion.classList.toggle("is-open");
        });
    });
}