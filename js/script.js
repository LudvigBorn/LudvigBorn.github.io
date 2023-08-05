document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.querySelector("#downloadButton");

  downloadButton.addEventListener("click", () => {
    const fileName = "Resume.pdf";
    const link = document.createElement("a");

    const fileUrl = `./${fileName}`;

    link.href = fileUrl;
    link.target = "_blank";
    link.download = `${fileName}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  const btnUp = {
    el: document.querySelector("#btnUp"),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove("hidden");
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add("hidden");
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener("scroll", () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector("#btnUp").onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };
    },
  };

  btnUp.addEventListener();
});
