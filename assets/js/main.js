Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    movies: [],
    movieSearch: '',
  },
  // mounted(){
  //   axios.get('https://api.themoviedb.org/3/search/movie?api_key=12d57af005908ff69d6d243e223e1493&query=ritorno al futuro&language=it')
  //    .then((result) => {
  //      this.movies = result.data.results;
  //      console.log(this.movies);
  //
  //     });
  //
  // },
  methods:{
    searchMovie: function () {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=12d57af005908ff69d6d243e223e1493&query='+ this.movieSearch +'&language=it-IT')
       .then((result) => {
         this.movies = result.data.results;
         console.log(this.movies);

        });

    }
  }


});
