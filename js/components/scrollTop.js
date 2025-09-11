export const scrollTopFn = () => {
    const scrollTopBtnNode = document.querySelector("#scrollTopBtn");

    if(!scrollTopBtnNode) return;

    const option = {
        top: 0,
        behavior: "smooth",
    }

    scrollTopBtnNode.addEventListener("click", ()=>{
        window.scrollTo(option);
    })
}