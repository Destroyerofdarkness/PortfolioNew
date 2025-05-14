let liste = 1;
function visMer(){
    switch(liste){
        case 1:
            const secBox = document.getElementById("secBox");
            secBox.style.display = "flex";
            secBox.classList.add("animated");
            secBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            liste ++;
            break;
        case 2:
            const thdBox = document.getElementById("thdBox");
            thdBox.style.display = "flex";
            thdBox.classList.add("animated");
            thdBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            liste ++;
            break;
            default:
        window.alert("Ikke mer informasjon å vise");
        break;
    }
    
}