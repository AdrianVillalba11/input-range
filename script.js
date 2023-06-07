
    const range = document.querySelector("#range-bar")
    const text = document.querySelector("#value-text")

    range.oninput = () => {
        text.innerHTML = range.value
    }


