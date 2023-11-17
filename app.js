let shuffle = document.querySelectorAll(".shuffle span");
let categorie = document.querySelectorAll("#categorie > div");

shuffle.forEach((span) => {
    span.addEventListener("click", function () {
        shuffle.forEach((e) => {
            e.classList.remove("active");
        });

        span.classList.add("active");
        filterImages(span.classList[0])
    });
});
//manage images 

function filterImages(cat){
    categorie.forEach((e)=>{
        if(cat == "all"){
            e.style.display = "block"
        }
        else if(e.dataset.cat == cat){
            e.style.display = "block"
        }else{
            e.style.display = "none"
        }
    })
}