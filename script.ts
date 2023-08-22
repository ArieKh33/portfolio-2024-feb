
const htmlButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo") as HTMLImageElement;
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: HTML5";
    text.innerHTML = "No website exists without HTML and as my introductory language to programming I have to say that I enjoy working with it a lot since it's simple and very intuative.";
    logo.src = "html-logo.svg";
    button.className = "htmlActive";
};


const cssButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo") as HTMLImageElement;
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: CSS3";
    text.innerHTML = "Unlike HTML, CSS isn't mandatory but it definitely will make your website stand out more, and how I work with css is to make every website as simple and clear as I possibly can so that everyone from a programming genius to the elderly can understand what the website is about.";
    logo.src = "css3-logo.svg";
    button.className = "css3Active";
};

const phpButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo") as HTMLImageElement;
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: PHP";
    text.innerHTML = "After all that web development some variety always welcome and PHP is first back-end language that I work with, it gave me a nice introduction into how fun it can be to work on databases. I am still a novice on this language compared to JavaScript but I have to admit that I always love the challenge.";
    logo.src = "php-logo.svg";
    button.className = "phpActive";
};

const javascriptButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo") as HTMLImageElement;
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: JavaScript";
    text.innerHTML = "only working with HTML and CSS to create websites is fun but quite limiting and there's where JavaScript comes in, I would have to say it's a language that I didn't like at first but learning more and more about it made me realize how important and interesting of a language that it is.";
    logo.src = "javascript-logo.svg";
    button.className = "javascriptActive";
};

const bootstrapButton = () => {
    const button = document.getElementById("titleLanguage");
    const text = document.getElementById("languageExplain");
    const logo = document.getElementById("language_logo") as HTMLImageElement;
    if(!button) { return false; }
    if(!text) {return false; }
    if(!logo) {return false;}
    button.innerHTML = "My experiences with: Bootstrap";
    text.innerHTML = "My preference at first was to hard code everything, but after starting to learn about the framework bootstrap I have changed my mind. I still have a preference to writing everything myself, but I've learnt that it can be very fun and useful to learn some frameworks on the side too.";
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