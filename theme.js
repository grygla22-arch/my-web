// 모든 페이지가 함께 쓰는 다크 모드 스크립트
// <head>에서 불러와서, 화면이 그려지기 전에 저장된 테마를 적용해 깜빡임을 막아요
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "dark") root.setAttribute("data-theme", "dark");

  // 🌙 / ☀️ 버튼으로 다크 모드를 켜고 끄고, 선택을 기억해요
  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    function paintButton() {
      var dark = root.getAttribute("data-theme") === "dark";
      toggle.textContent = dark ? "☀️" : "🌙";
      toggle.setAttribute("aria-label", dark ? "밝은 모드로 바꾸기" : "다크 모드로 바꾸기");
    }

    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintButton();
    });

    paintButton();
  });
})();
