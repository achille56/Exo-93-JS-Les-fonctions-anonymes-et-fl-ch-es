const alert1 = document.getElementById("alert");
const somme2 = document.getElementById("somme");

alert1.addEventListener("click", () => {
    alert("Hello World");
})

somme2.addEventListener("click", () => {
    const result = document.createElement("div");
    result.innerHTML = (5 + 6).toString();
    document.body.appendChild(result);
})