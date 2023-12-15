function loaded(){
    const button = document.querySelector(".button");
    const copy = document.getElementsByClassName("copy-icon")[0];
    const mode = document.getElementById("mode");

    button.addEventListener("click", change_color, false);
    copy.addEventListener("click", copy_text, false);
    mode.addEventListener("click", change_mode, false);

}

function change_color() {
    const input_color = document.getElementsByClassName("inputColor")[0];
    const hex_color_square = document.getElementsByClassName("hex-color")[0];
    const hex_color_text = document.getElementsByClassName("hex-color-text")[0]

    const hex_color = input_color.value;
    hex_color_square.style.backgroundColor = hex_color;
    hex_color_text.textContent = hex_color;
}

function copy_text() {
    const hex_color_text = document.getElementsByClassName("hex-color-text")[0]

    navigator.clipboard
        .writeText(hex_color_text.textContent)
        .then(() => window.alert("hex color copied to clipboard!"))
        .catch((e) => console.log(e));
}

function change_mode(){ 
    const background = document.getElementsByClassName("subcontainer")[0];
    const background_body = document.getElementsByTagName("body")[0];
    const button = document.querySelector(".button");
    const copy = document.getElementById("copy-icon");
    const mode = document.getElementById("mode");
    const title = document.getElementsByClassName("title")[0];
    const hex_color_text = document.getElementsByClassName("hex-color-text")[0]
    const social = document.getElementsByClassName("social");

    if (copy.style.color == "") {
        background.style.background = "#000000";
        copy.style.color = "#FFFFFF";
        button.style.background = "#CB2E81";
        title.style.color = "#FFFFFF";
        mode.style.color = "#FFFFFF";
        hex_color_text.style.color = "#FFFFFF";
        background_body.style.background = "url('icon/dotted-background-black.webp')";
        button.addEventListener("mouseover", () => {
            button.style.background = "#622876";
          });
        button.addEventListener("mouseout", () => {
        button.style.background = "#CB2E81";
        });
        for (let i = 0; i < social.length; i++){
            social[i].style.color = "#FFFFFF";
        }
    } else {
        background.style.background = "rgb(252, 248, 248)";
        copy.style.color = "";
        button.style.background = "#0D6EFD";
        title.style.color = "";
        mode.style.color = "";
        hex_color_text.style.color = "rgb(153, 148, 148)";
        background_body.style.background = "url('icon/dotted-background.webp')";
        button.addEventListener("mouseover", () => {
            button.style.background = "#0e51b6";
          });
        button.addEventListener("mouseout", () => {
        button.style.background = "#0D6EFD";
        });
        for (let i = 0; i < social.length; i++){
            social[i].style.color = "#1f2f4d";
        }
    }
}

window.addEventListener("load", loaded, false);