
const htmlButton = () => {
    const button = document.getElementById("titleLanguage");
    if(!button) { return false; }
    button.className = "htmlActive";
};

const cssButton = () => {
    const button = document.getElementById("titleLanguage");
    if(!button) { return false; }
    button.className = "css3Active";
};

const phpButton = () => {
    const button = document.getElementById("titleLanguage");
    if(!button) { return false; }
    button.className = "phpActive";
};

const javascriptButton = () => {
    const button = document.getElementById("titleLanguage");
    if(!button) { return false; }
    button.className = "javascriptActive";
};

const bootstrapButton = () => {
    const button = document.getElementById("titleLanguage");
    if(!button) { return false; }
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