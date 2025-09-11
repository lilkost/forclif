import { setMaxValue } from "./helpers.js";

export const createCounterNodeFn = () =>{
    const counters = document.querySelectorAll(".card__counts");
    
    if(!counters) return;

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const setMaxValue = () =>{
        if(!document.querySelector(".basket__form-price-count")) return;
        let val = 0;
        const nodePrice = document.querySelector(".basket__form-price-count");
        
        counters.forEach(el=>{
            val+= Number(el.getAttribute("data-price-new").trim());
        });

        nodePrice.innerHTML = `${numberWithSpaces(val)} <span>₽</span>`;
    }

    const countPlus = (el, countNode, priceNode, btnMinus) =>{
        const countPrice = el.getAttribute("data-price");
        let count = Number(el.getAttribute("data-count"));
        count +=1;

        countNode.value = count;
        el.setAttribute("data-count", count);
        let newPrice = count * Number(el.getAttribute("data-price"))
        el.setAttribute("data-price-new", newPrice);

        if(priceNode) {
            priceNode.innerHTML = `
                ${numberWithSpaces(newPrice)} <span>₽</span>
            `
        }

        if(count <= 1) {
            btnMinus.disabled = true;
        }else {
            btnMinus.disabled = false;
        }

        setMaxValue();
    }

    const countMinus = (el, countNode, priceNode, btnMinus) =>{
        const countPrice = el.getAttribute("data-price");
        let count = Number(el.getAttribute("data-count"));
        count -=1;

        if(count <= 1) {
            btnMinus.disabled = true;
        }else {
            btnMinus.disabled = false;
        }

        if(count <= 0) return;
        
        countNode.value = count;
        el.setAttribute("data-count", count);
        let newPrice = count * Number(el.getAttribute("data-price"))
        el.setAttribute("data-price-new", newPrice);

        if(priceNode) {
            priceNode.innerHTML = `
                ${numberWithSpaces(newPrice)} <span>₽</span>
            `
        }
        setMaxValue();
    }

    const countInput = (el, countNode, priceNode, btnMinus) =>{
        const countPrice = el.getAttribute("data-price");
        let count = countNode.value;

        if(count <= 0) count = 1;

        countNode.value = count;
        el.setAttribute("data-count", count);
        let newPrice = count * Number(el.getAttribute("data-price"))
        el.setAttribute("data-price-new", newPrice);

        if(priceNode) {
            priceNode.innerHTML = `
                ${numberWithSpaces(newPrice)} <span>₽</span>
            `
        }

        if(count <= 1) {
            btnMinus.disabled = true;
        }else {
            btnMinus.disabled = false;
        }

        setMaxValue();
    }

    counters.forEach(el=> {
        const btnPlus = el.querySelector(".card__counts-btn_plus");
        const btnMinus = el.querySelector(".card__counts-btn_minus");
        const counterNode = el.querySelector(".count-num");
        const parent = el.closest(".counter-parent");
        const priceNode = parent?.querySelector(".count-price")
        
        btnPlus.addEventListener("click", ()=>countPlus(el, counterNode, priceNode, btnMinus));
        btnMinus.addEventListener("click", ()=>countMinus(el, counterNode, priceNode, btnMinus));
        counterNode.addEventListener("change", ()=>countInput(el, counterNode, priceNode, btnMinus));
    });
}