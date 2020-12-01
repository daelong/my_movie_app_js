// 홈페이지가 될 페이지 이전에 App.js에서 작성했던 것들을 싹 가져온다.
import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //axios.get하는 것은 시간이 좀 걸리기 때문에 이것이 끝날때까지 좀 기다리라고 말해야함 그래서 async를 붙인다.
    const {
      data: {
        data: { movies }, //이건 axios.get해서 얻은것의 data.data.movies를 movies로 저장한다는 것임.
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //주소의 api에서 data를 get하고 movies라는 상수에다가 넣어줌 await은 async랑 같이 사용하는 것으로 기다리는 대상을 지목함.
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; //state로부터 movies를 가지고옴
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div> //movies가 배열이니 map으로 각각의 데이터들을 <Movie />로 전달해주고 리턴해주는 값을 출력
          //map으로는 return을 해야함
        )}
      </section>
    );
  }
}

export default Home;
