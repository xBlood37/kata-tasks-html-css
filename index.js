window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#create-account");
  const facebookButton = document.querySelector(".facebook");
  const linkedinButton = document.querySelector(".linkedin");

  btn.addEventListener("click", () =>
    alert(
      "Пришли как-то Пупа и Лупа получать зарплату. Но в бухгалтерии всё перепутали и Лупа получил зарплату за Пупу, а Пупа за Лупу."
    )
  );

  function moveAnimationClick(btn) {
    const btnContains = btn.classList.contains("animation");
    if (btnContains) {
      btn.classList.remove("animation");
      return;
    }
    if (!btnContains) {
      btn.classList.add("animation");
      return;
    }
  }

  facebookButton.addEventListener("click", () =>
    moveAnimationClick(facebookButton)
  );
  linkedinButton.addEventListener("click", () =>
    moveAnimationClick(linkedinButton)
  );
});
