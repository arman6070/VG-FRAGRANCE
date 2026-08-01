window.addEventListener("load", function () {
    console.log("VG FRAGRANCE Loaded");

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.style.transform = "scale(1.03)";
            setTimeout(() => {
                card.style.transform = "";
            }, 200);
        });
    });
});
