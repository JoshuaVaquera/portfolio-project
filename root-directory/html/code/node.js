function test() {
    console.log("test");
}

test();

function toggleImage(id) {
    var imgDiv = document.getElementById(id);
    if (imgDiv.style.display === "none") {
        imgDiv.style.display = "block";
    } else {
        imgDiv.style.display = "none";
    }
}