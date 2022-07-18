const box = document.querySelector('.advaice__get');
const btn = document.querySelector('.advaice__btn');

const url = "https://api.adviceslip.com/advice"
const getAdvice = async function (url) {
    const advice = await fetch(url)
        .then((respons) => respons.json())
        .then((res) => {
            console.log(res)
            box.innerHTML = "";

            const html =
                `<p class="advaice__number">advice  #${res.slip.id}</p>
             <p class="advaice__text">
            ${res.slip.advice}
            </p>`

            box.insertAdjacentHTML("afterbegin", html)


        })
}

btn.addEventListener('click', () => getAdvice(url))