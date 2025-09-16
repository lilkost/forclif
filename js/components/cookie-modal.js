export const cookieModalFn = () =>{
    const modal = document.querySelector(".coockie-modal");

if(modal){
    const modalCLose = modal.querySelector(".coockie-modal__btn");

    const setItemCoockie = () => {
        let date = new Date(Date.now() + 31536000000);
        date = date.toUTCString();

        document.cookie = "is_show_modal_coockie=Y;max-age=31536000000";

        modal.classList.add("is-hidden");
    }

    modalCLose.addEventListener("click", ()=>setItemCoockie());
}
}