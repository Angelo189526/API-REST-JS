const URL = 'https://api.thecatapi.com/v1/images/search?limit=3';






    async function reload() {
        fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img1 = document.getElementById("gato1")
        const img2 = document.getElementById("gato2")
        const img3 = document.getElementById("gato3")

        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
    });
    }

    reload();