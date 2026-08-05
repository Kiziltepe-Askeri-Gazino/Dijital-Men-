// Menü filtreleme sistemi

function filterMenu(category) {

    const products = document.querySelectorAll(".product");


    products.forEach(product => {


        if(category === "all") {

            product.style.display = "flex";

        }

        else if(product.classList.contains(category)) {

            product.style.display = "flex";

        }

        else {

            product.style.display = "none";

        }


    });


}



// Sayfa açılış animasyonu

document.addEventListener("DOMContentLoaded", () => {


    const items = document.querySelectorAll(
        ".product, .gallery-grid img, .about"
    );


    items.forEach((item,index)=>{


        item.style.opacity = "0";

        item.style.transform =
        "translateY(30px)";


        setTimeout(()=>{


            item.style.transition =
            "all .6s ease";


            item.style.opacity="1";

            item.style.transform =
            "translateY(0)";


        }, index * 100);



    });


});