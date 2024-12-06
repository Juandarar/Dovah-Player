
// const cancion = {
//     _id: "lks6df7as6fa8",
//     title: 'GoodByes',
//     album: 'black album',
//     author: 'Post Malone'
    
// }
//  const usuario ={
//     nombre: 'Fe li pe',
//     apellido: 'hombrito',
//     ci: '32789765',
//     edad: 21,
//     direction: {
//         calle: 'comercio',
//         avenida: 'anzoategui',
//         postal: '2001',
//         numero: '98-432'
//     }
//  }

//     console.log(cancion.album)
//     console.log(usuario.direction.avenida)
    


const createSongComponent = (song) => {

    // creo un elemento div
    const div = document.createElement('div')

    // establezco que atributos tendra el div
    div.setAttribute('class', 'canciones')

    // crea el contenido html para la etiqueta div
    div.innerHTML = `
                      <img class="canciones__img" src="${song.image.url} " alt="">
                <div class="canciones__body">
                    <h3 class="canciones__body__title">${song.title}</h3>
                    <h4 class="canciones__body__autor">${song.author} </h4>
                </div>
                <div class="canciones__footer">
                    <hr>
                    <div class="request">
                        <div class="request__corazon">
                            <img src="/assets/corazones.svg" alt="Corazones"><span>95</span>
                        </div>
                        <div class="request__descargas">
                            <img src="/assets/Descargas.svg" alt="Descargas"><span>107</span>
                        </div>
                    </div>
                </div>
    `

    setInteractiveComponent(div, song)
    return div
} 

const setInteractiveComponent = (component, song) => {
    component.addEventListener("click", () => { 
        document.getElementById("audio").setAttribute("src", song.audio.url)
        document.getElementById("imagen").setAttribute("src", song.image.url)
        document.getElementById("title").innerHTML = ("src", song.title)
        // document.getElementById("background").innerHTML = ("src", song.image.url)
        document.getElementById("imgReproductor").style.backgroundImage = `url(${song.image.url})`
    })
}
document.getElementById('play').addEventListener('click', () => {
    const audio = document.getElementById('audio')

    if (audio.paused) {
        audio.play()
        document.getElementById('play').setAttribute('src', '/assets/play.svg')
    } else {
        audio.pause()
    }
})

// las funciones tipo flecha solo lo mismo pero mejor
axios.get('https://api.institutoalfa.org/api/songs')
.then(function (response) {
    const songsInfo = response.data.songs
    const contenedor = document.getElementById('container-song')

// el .map es un bucle
    songsInfo.map((song) => {
          const songComponent = createSongComponent(song)

        //   le da a contenedor un elemento hijo
          contenedor.appendChild(songComponent)


    })
  })