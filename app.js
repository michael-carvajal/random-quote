



window.onload = function () {
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");

    async function update() {
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json()
        quote.innerHTML = data.content
        cite.innerHTML = data.author
        console.log(data);
    }

    button.onclick = function () {
        update();
    }

    update();
}
