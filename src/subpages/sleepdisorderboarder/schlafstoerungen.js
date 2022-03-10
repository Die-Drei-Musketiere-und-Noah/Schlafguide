const btns = document.querySelectorAll(".tab-btn");
const definition = document.querySelector(".definition");
const articles = document.querySelectorAll(".content");
const images = document.querySelectorAll(".definition-img");

definition.addEventListener("click", function(e)
{
    const id = e.target.dataset.id; 
    if (id)
    {
        btns.forEach(function(btn)
        {
            btn.classList.remove("active");   
            e.target.classList.add("active");         
        });
        articles.forEach(function(articles)
        {
            articles.classList.remove("active");
        });
        images.forEach(function(images)
        {
            images.classList.remove("active");
        });
        const text = document.getElementById(id);
        text.classList.add("active");
        const img = document.getElementById(id + "Img");
        img.classList.add("active");
    }
});