Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    movies: [],
    movieSearch: '',
  },
  computed:{

  },
  methods:{
    searchMovie: function () {
      this.movies = [];
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=12d57af005908ff69d6d243e223e1493&query='+ this.movieSearch +'&language=it-IT')
       .then((result) => {
         this.movies = [...this.movies,...result.data.results];
        });
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=12d57af005908ff69d6d243e223e1493&query='+ this.movieSearch +'&language=it-IT')
       .then((result) => {
         this.movies = [...this.movies,...result.data.results];
        });
    },
    getTitle: function (obj) {
      if (obj.title) {
        return obj.title
      } else {
        return obj.name
      }
    },
    getOriginalTitle: function (obj) {
      if (obj.original_title) {
        return obj.original_title;
      } else {
        return obj.original_name;
      }
    },
    getStar: function (item) {
      let vote = Math.ceil(item / 2);
      return vote;
    },
    getSearch: function () {
      document.getElementById("input-container").style.display = "flex";
      document.getElementById("icon-search").style.display = "none";
    },
    getBg: function (item) {
      if (item.poster_path) {
        return `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      } else {
        return `./assets/img/logo-netflix-transparent.png`
      }
    },
    getFlag: function (item) {
      if (item.original_language == 'en') {
        return `./assets/img/flag-en.webp`
      } else {
        return `https://www.unknown.nu/flags/images/${item.original_language}-100`
      }
    }
  }


});
