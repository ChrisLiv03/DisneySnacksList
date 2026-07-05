const snackBox = document.getElementById("snack-box");
const locBox = document.getElementById("loc-box")
const listContain = document.getElementById("list-contain");

function addSnack() {
    const snack = snackBox.value.trim()
    const loc = locBox.value.trim()
    if (!snack || !loc) {
        alert("Please enter snack/location");
        return;
    }
    const gallery = document.getElementById("gallery");
    const card = document.createElement("div");
    card.className = "gallery-item";

    card.innerHTML= `
        <div class="flip">
            <div class="flip-in">
                <div class="flip-front">
                    <p class="card-info">${snack}</p>
                </div>
                <div class="flip-back">
                    <p class="card-info">${loc}</p>
                </div>
            </div>
        </div>
    `;
    gallery.appendChild(card);
    snackBox.value='';
    locBox.value='';
}
