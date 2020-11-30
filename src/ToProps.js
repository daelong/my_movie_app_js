import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  // 굳이 js파일을 따로 만들지 않아도 이런식으로 함수로 만들어서 component를 사용할 수도 있음
  return (
    <div>
      <h1>I like{name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "darkgarbi",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMDA4MDVfMjU0%2FMDAxNTk2NjE4Mjg4NDA2.zvjFx2qHp_9UH-8G5E4laQQBemVSzkTUjEOXNZ22AX8g.9sYZGgIyZOAJsligbIqes-N3V9TTHjCmMMrsQN4eYxUg.JPEG%2FI1lQ5b47FAXQ4xP5xB08QwD7AlpU.jpg&type=sc960_832",
    rating: 5,
  },
  {
    id: 2,
    name: "hamburger",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F014%2F2011%2F06%2F05%2F110605_111105813.jpg&type=sc960_832",
    rating: 4.9,
  },
  {
    id: 3,
    name: "gobchang",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MTdfMjMz%2FMDAxNTI2NTY0NzU5NjM2.erKcFaiePA6UmSC83iZS5_6jF5Miu51FB84o9FuXjJUg.uqLZGAcur2iYkWyybnrl6iZRtjs6ScXKqbJA0Uezp4Ug.JPEG.delishop2018%2F%25B0%25F6%25C3%25A2%25C0%25FC%25B0%25F1.JPG&type=sc960_832",
    rating: 4.8,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
