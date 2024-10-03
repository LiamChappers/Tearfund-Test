const donate78Btn = document.getElementById("donate78Btn"),
      donate22Btn = document.getElementById("donate22Btn"),
      donate78Desc = document.getElementById("donate78Desc"),
      donate22Desc = document.getElementById("donate22Desc"),
      donateDetail = document.getElementById("donateDetail");


donate78Btn.addEventListener("click", (event) => {
    show78Details();
});

donate22Btn.addEventListener("click", (event) => {
    show22Details();
});

function show78Details() {
    donate78Desc.classList.add("show");
    donate22Desc.classList.remove("show");
    donateDetail.classList.remove("details-22");
}
    

function show22Details() {
    donate22Desc.classList.add("show");
    donate78Desc.classList.remove("show");
    donateDetail.classList.add("details-22");
};