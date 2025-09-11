import { setMaxValue } from "./helpers.js";
export const deleteItemBasketFn = () => {
    const basketItems = document.querySelectorAll(".basket__item");

    if(!basketItems) return;

    basketItems.forEach(item=>{
        const btnDelete = item.querySelector(".basket__item-deleted");

        if(!btnDelete) return;

        btnDelete.addEventListener("click", ()=>{
            item.classList.add("is-deleted");

            setTimeout(()=>{
                item.remove();
                setMaxValue();
            }, 1000);
        });
        
    })
}