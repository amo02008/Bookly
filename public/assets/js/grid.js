function init() {
  anime({
    targets: document.body, maincontent,
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });
}
init();
