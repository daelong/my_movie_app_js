import React from "react";
import PropTypes from "prop-types";

//이 컴포넌트는 state를 필요로 하지 않는다. 즉, state가 필요 없으면 class component가 될 필요는 없다.
// 그래서 function component로 작성
function Movie({ id, year, title, summary, poster }) {
  //App에서 prop들을 받아서 그것들에 맞춰서 정보를 반환하고 리턴
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  //api로 받아오는 인자들 타입이랑 유무 확인
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
