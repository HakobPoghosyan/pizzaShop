const tabNav = document.querySelectorAll('.tab-nav');

tabNav.forEach(Function(item){
    item.addEventListener("click", function(){
        console.log("clicked");
    });
});