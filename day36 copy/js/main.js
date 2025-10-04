$(window).ready(function(){
    alert("jquery is not woking bro")
})
function openMenu(){
    var links = document.getElementById("links");
    if(links.classList.contains("show")){
        links.classList.remove("show");
    }else{
        links.classList.add("show");
    }
}


function search(){
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("mylist");
    var li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        var txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
