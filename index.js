window.onload = function () {
    PopulatePixels()
    ButtonChange()
};

const PopulatePixels = () => {
    var div = document.getElementById("MainBox");
    var divSend = document.getElementById("SendDiv")

    div.addEventListener("click", function (event) {
        var x = event.offsetX;
        var y = event.offsetY;

        divSend.innerText = ""
        divSend.innerText = "[" + x + "," + y + "]"
    });
}

const ButtonChange = () => {
    var text = document.getElementById("Textimg")
    var button = document.getElementById("TextButton")
    button.addEventListener("click", function (e) {
        e.preventDefault()
        var div = document.getElementById("MainBox");
        div.style.backgroundImage = "url('./" + text.value + ".png')";
    })
}