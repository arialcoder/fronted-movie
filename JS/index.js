
const base_url = "https://image.tmdb.org/t/p/original/";

async function getData() {
    
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=e63ca39ea18ae934663116c3327a04ce&language=en-US&page=1");    
    const movies = await response.json();
    //mostraPorPantalla(movies);
    console.log(movies.results)
    movieCard(movies.results);

    const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=e63ca39ea18ae934663116c3327a04ce&language=en-US&page=1");
    const incomingMovies = await res.json();
    //mostraPorPantalla(movies);
    console.log(incomingMovies.results)
    printCard(incomingMovies.results);
}
getData();

// contenedores de peliculas
const cardMain = document.getElementById("movie-card");
const incomingCard = document.getElementById("in-movie");

// User Login
const btnRegister = document.querySelector("#btnRegister");
const  navbarItem = document.querySelector("#navbarItem");

 // TODO: Verificar si hay un usuario logueado en el localStorage
 var usuarioLogueado = localStorage.getItem("username");

//  TODO: Crear el contenido dinámico para la barra de navegación
navbarItem.innerHTML = usuarioLogueado ?
'<span>Bienvenido, ' + usuarioLogueado.username + '</span>' :
'<a href="login.html">Login</a>';


function movieCard(array){
    if (array.length == 0){
        cardMain.innerHTML = '<h2 class="display-12 fw-bolder pt-5">There are no movies.</h2>';
        return
    }
    let card = '';
    array.forEach(movie => {
        card += `
        <div class="col">
            <div class="card movie-item">
             <a href="./pages/details.html" class="">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img " alt="${movie.name}">                
                </a> 
              </div>
            </div>
        </div>`
    })

    cardMain.innerHTML = card;

}


function printCard(array) {
  if (array.length == 0) {
    incomingCard.innerHTML =
      '<h2 class="display-12 fw-bolder pt-5">There are no movies.</h2>';
    return;
  }
  let card = "";
  array.forEach((element) => {
    card += `
        <div class="col">            
                <a class="d-flex flex-column movie-item" href="./pages/details.html">
                <div class="movie-poster mb-3">
                <img src="https://image.tmdb.org/t/p/w185${element.poster_path}" alt="${element.title}">
                </div>
                <div class="d-flex flex-row justify-content-between">                
                  <h6 class="fw-bold text-wrap">${element.title}</h6>                                  
                </div>
                <div>
              </div>
              </a>           
        </div>`;
  });

  incomingCard.innerHTML = card;
}