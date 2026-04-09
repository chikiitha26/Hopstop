(() => {
  const logoCard = document.getElementById("logoCard");
  const searchCard = document.getElementById("searchCard");
  const nextButton = document.getElementById("nextButton");
  let transitioned = false;

  function showSearchCard() {
    if (transitioned) return;
    transitioned = true;

    logoCard.classList.add("fade-out");

    setTimeout(() => {
      logoCard.hidden = true;
      searchCard.hidden = false;
      searchCard.classList.add("fade-in");
      searchCard.focus();
    }, 600);
  }

  // Auto-transition after 2.5s
  const autoTimer = setTimeout(showSearchCard, 2500);

  // Click / keyboard support
  logoCard.addEventListener("click", () => {
    clearTimeout(autoTimer);
    showSearchCard();
  });

  logoCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      clearTimeout(autoTimer);
      showSearchCard();
    }
  });

  // Navigate to search page
  nextButton.addEventListener("click", () => {
    window.location.href = "/search.html";
  });
})();
