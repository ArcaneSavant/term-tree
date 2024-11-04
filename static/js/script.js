// cspell:words ArcaneSavant coursera tuta typst

const Config = {
  name: "ArcaneSavant",
  // scale: 1,
  Links: [
    [
      "Email",
      [
        ["Gmail", "https://mail.google.com/mail"],
        ["Tuta", "https://app.tuta.com/login"],
      ],
    ],
    [
      "Cloud Storage",
      [
        ["Drive", "https://drive.google.com/drive/my-drive"],
        ["Mega", "https://mega.nz/login"],
      ],
    ],
    [
      "DevOps",
      [
        ["GitHub", "https://github.com/login"],
        ["GitLab", "https://gitlab.com/users/sign_in"],
      ],
    ],
    [
      "Education",
      [
        ["Coursera", "https://www.coursera.org/?authMode=login"],
      ],
    ],
    [
      "Productivity",
      [
        ["Typst", "https://typst.app/signin/"],
      ],
    ],
  ],
};

const Main = (() => {
  const list = document.getElementById("list");
  const names = document.querySelectorAll("[data-Name]");
  const search = document.getElementById("search");
  const form = document.forms[0];

  const init = () => {
    list.innerHTML = Config.Links.map(
      ([gName, Links]) => `
              <li>
                  <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                  <ul>
                      ${Links.map(
                        ([lName, url]) => `
                          <li>
                              <a href="${url}">${lName}</a>
                          </li>`
                      ).join("")}
                  </ul>
              </li>`
    ).join("");

    names.forEach((el) => {
      el.innerText = Config.name;
    });

    document.addEventListener(
      "keydown",
      (e) => e.key.length === 1 && search.focus()
    );
    search.addEventListener(
      "keydown",
      () => (window.event ? event.keyCode : e.which) == 13 && form.submit()
    );
  };

  return {
    init,
  };
})();

Main.init();
