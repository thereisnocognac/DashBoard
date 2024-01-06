

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage= `url(${data.urls.full})`
        document.querySelector('#author').textContent = data.user.name
        console.log(data)
    })