
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
    const div = document.createElement('div')
    div.setAttribute('class', 'canciones')
    div.innerHTML = `
                      <img class="canciones__img" src="${song.image.url} " alt="">
                <div class="canciones__body">
                    <h3 class="canciones__body__title">${song.title} </h3>
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
    return div
} 


axios.get('https://api.institutoalfa.org/api/songs')
.then(function (response) {
  const songsInfo = response.data.songs
  const contenedor = document.getElementById('container-song')

  songsInfo.map((song) => {
        const songComponent = createSongComponent(song)
        contenedor.appendChild(songComponent)

    })
  })