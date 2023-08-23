const data = [
    {
        id: "HTML5",
        title: "My experiences with: HTML5",
        description: "No website exists without HTML and as my introductory language to programming I have to say that I enjoy working with it a lot since it's simple and very intuative.",
        logo: "html-logo.svg"
    },
    {
        id: "CSS3",
        title: "My experiences with: CSS3",
        description: "Unlike HTML, CSS isn't mandatory but it definitely will make your website stand out more, and how I work with css is to make every website as simple and clear as I possibly can so that everyone from a programming genius to the elderly can understand what the website is about.",
        logo: "css3-logo.svg"
    },
       {
        id: "PHP",
        title: "My experiences with: PHP",
        description: "After all that web development some variety always welcome and PHP is first back-end language that I work with, it gave me a nice introduction into how fun it can be to work on databases. I am still a novice on this language compared to JavaScript but I have to admit that I always love the challenge.",
        logo: "php-logo.svg"
    },
       {
        id: "JavaScript",
        title: "My experiences with: JavaScript",
        description: "only working with HTML and CSS to create websites is fun but quite limiting and there's where JavaScript comes in, I would have to say it's a language that I didn't like at first but learning more and more about it made me realize how important and interesting of a language that it is.",
        logo: "javascript-logo.svg"
    },
       {
        id: "Bootstrap",
        title: "My experiences with: Bootstrap",
        description: "My preference at first was to hard code everything, but after starting to learn about the framework bootstrap I have changed my mind. I still have a preference to writing everything myself, but I've learnt that it can be very fun and useful to learn some frameworks on the side too.",
        logo: "bootstrap-logo.svg"
    },
]

function listenToButton(language_button){
    const languageTitle = document.getElementById("titleLanguage");
    const languageDescription = document.getElementById("languageExplain");
    const languageLogo = document.getElementById("language_logo") as HTMLImageElement;

    if(languageTitle && languageDescription && languageLogo){
        // @ts-ignore
        const result = data.find(item => item.id === language_button.id);

        languageTitle.innerHTML = result.title;
        languageDescription.innerHTML = result.description;
        languageLogo.src = result.logo;
    }

}

const getButtons = () => {
    const language_buttons = document.querySelectorAll(".language-button");
    let i: number;
    for(i = 0; i < language_buttons.length; i += 1){
        if(language_buttons[i]){
            language_buttons[i].addEventListener("click", (event) => {
                listenToButton(event.target);
            });
        }
    }
}

getButtons();