var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src  = "portfolio_site_img/dark theme icon/sun.png"
    }else{
        icon.src = "portfolio_site_img/dark theme icon/moon.png"
    }
}