
const htmlButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo");
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: HTML5";
    text.innerHTML = "test html5";
    logo.src = "html-logo.svg";
    button.className = "htmlActive";
};


const cssButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo");
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: CSS3";
    text.innerHTML = "test CCS3";
    logo.src = "css3-logo.svg";
    button.className = "css3Active";
};

const phpButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo");
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: PHP";
    text.innerHTML = "test PHP";
    logo.src = "php-logo.svg";
    button.className = "phpActive";
};

const javascriptButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo");
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: JavaScript";
    text.innerHTML = "test JavaScript";
    logo.src = "javascript-logo.svg";
    button.className = "javascriptActive";
};

const bootstrapButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo");
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: Bootstrap";
    text.innerHTML = "test Bootstrap";
    logo.src = "bootstrap-logo.svg";
    button.className = "bootstrapActive";
};


const html5Button = document.getElementsByClassName("language_button_HTML5")[0];
const css3Button = document.getElementsByClassName("language_button_CSS3")[0];
const PHPButton = document.getElementsByClassName("language_button_PHP")[0];
const JavaScriptButton = document.getElementsByClassName("language_button_JavaScript")[0];
const BootstrapButton = document.getElementsByClassName("language_button_Bootstrap")[0];

html5Button.addEventListener("click", htmlButton);
css3Button.addEventListener("click", cssButton);
PHPButton.addEventListener("click", phpButton);
JavaScriptButton.addEventListener("click", javascriptButton);
BootstrapButton.addEventListener("click", bootstrapButton);