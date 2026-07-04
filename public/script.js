const inputBox = document.getElementById("input-box");
const listContain = document.getElementById("list-contain");

function addSnack() {
    const snack = inputBox.value.trim()
    if (!snack) {
        alert("Please enter snack");
        return;
    }
    const li = document.createElement("li");

    li.innerHTML= `
    <label>
        <button class="snack-info">${snack}</button>
    </label>
    `;

    const button = li.querySelector(".snack-info");
    button.addEventListener("click", () => {
        snackInfo(snack);
    })

    listContain.appendChild(li);
    inputBox.value='';
}

function snackInfo(snack) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(snack)}`;
    window.open(url, "_blank");
}