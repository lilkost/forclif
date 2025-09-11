export const createPhoneMaskFn = () =>{
    const elements = document.querySelectorAll('.phone-input');
    
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    elements.forEach(el=>{
        const mask = IMask(el, maskOptions);
    })
}