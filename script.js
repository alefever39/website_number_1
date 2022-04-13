const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
document.addEventListener("keydown", function (e) {
    h3.textContent = `${e.key}`;
    document.querySelector("body").appendChild(h3);
});