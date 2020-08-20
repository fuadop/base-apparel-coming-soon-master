const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".email");



form.addEventListener("keyup",()=>{
    if(form.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        form.classList.remove("email-input-validated");
        form.classList.add("email-input");
        submitBtn.classList.remove("submit-btn-validated");
        submitBtn.classList.add("submit-btn");
    }else{
        form.classList.remove("email-input");
        form.classList.add("email-input-validated");
        submitBtn.classList.remove("submit-btn");
        submitBtn.classList.add("submit-btn-validated");
    }
})