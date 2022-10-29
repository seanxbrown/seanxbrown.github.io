const landingTextFadeIn = () => {

    const startOfHeader = document.getElementById("startOfHeader");
    const restOfHeader = document.getElementById("restOfHeader");
    const landingText = document.getElementsByClassName("landingText");

    for (let text of landingText) {
        text.classList.add("revealText");
    }

    startOfHeader.classList.add("revealText");
    restOfHeader.classList.add("revealText");
        

}

landingTextFadeIn()