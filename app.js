function checkerShow() {
  let check = document.querySelector(".checkers");
  let num = 0;
  for (let i = 0; i < 8; i++) {
    for (let l = 0; l < 8; l++) {
      if (num % 2 == 0) {
        check.innerHTML += '<div class="checker "></div>';
      } else {
        check.innerHTML += '<div class="checker black"></div>';
      }
      num++;
    }
    num++;
  }
}
checkerShow();
