document.getElementById("forma").addEventListener("submit", function(e) {
    e.preventDefault();

    let vards = document.getElementById("vards").value;
    let epasts = document.getElementById("epasts").value;
    let noteikumi = document.getElementById("noteikumi").checked;
    let rezultats = document.getElementById("rezultats");

    if (vards === "" || epasts === "") {
        rezultats.innerText = "Lūdzu aizpildi visus laukus!";
        rezultats.style.color = "red";
        return;
    }

    if (!noteikumi) {
        rezultats.innerText = "Tev jāpiekrīt noteikumiem!";
        rezultats.style.color = "red";
        return;
    }

    rezultats.innerText = "Pieteikšanās veiksmīga!";
    rezultats.style.color = "green";
});

// galerijas klikšķis
let bildes = document.querySelectorAll(".gallery-img");

bildes.forEach(img => {
    img.addEventListener("click", function() {
        img.style.width = "300px";
    });
});