document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#popup').style.display = "none";
    document.querySelector('.bottom-line').style.display = "none";
})


function coming_soon_script() {
    document.getElementById("coming_soon_part").style.display = "block";         
    document.getElementById("cards_part").style.display = "none";         
    document.getElementById("okayssion_header_main_part").style.display="none"
}