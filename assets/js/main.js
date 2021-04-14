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
    }
  }


});
