document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
        let audioA = new Audio("A.mp3");
        audioA.play();
    } else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
        let audioS = new Audio("S.mp3");
        audioS.play();
    } else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
        let audioD = new Audio("D.mp3");
        audioD.play();
    } else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
        let audioF = new Audio("F.mp3");
        audioF.play();
    } else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
        let audioG = new Audio("G.mp3");
        audioG.play();
    } else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        let audioH = new Audio("H.mp3");
        audioH.play();
    } else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audioJ = new Audio("J.mp3");
        audioJ.play();
    }
});
