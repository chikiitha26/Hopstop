// frontend/main.js
(() => {
  const logoCard = document.getElementById("logoCard");
  const searchCard = document.getElementById("searchCard");
  const tapText = document.getElementById("tapText");
  const nextButton = document.getElementById("nextButton");
  let transitioned = false;

  function showSearchCard() {
    if (transitioned) return;
    transitioned = true;
    logoCard.classList.add("fade-out");
    setTimeout(() => {
      logoCard.style.display = "none";
      searchCard.style.display = "block";
      searchCard.classList.add("fade-in");
    }, 800);
  }

  // Auto transition
  setTimeout(showSearchCard, 2000);

  // Click and keyboard support
  logoCard.addEventListener("click", showSearchCard);
  tapText.addEventListener("click", showSearchCard);
  logoCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter") showSearchCard();
  });

  // Navigate to search page
  nextButton.addEventListener("click", () => {
    window.location.href = "/search.html";
  });
})();