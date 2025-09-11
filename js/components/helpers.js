export const setMaxValue = () =>{
    const counters = document.querySelectorAll(".card__counts");
        if(!document.querySelector(".basket__form-price-count") || !counters) return;
        let val = 0;
        const nodePrice = document.querySelector(".basket__form-price-count");
        
        counters.forEach(el=>{
            val+= Number(el.getAttribute("data-price-new").trim());
        });

        nodePrice.innerHTML = `${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <span>₽</span>`;
}