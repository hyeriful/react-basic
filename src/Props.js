import React from "react";
import PropTypes from "prop-types"; // 내가 전달받은 props가 내가 원하는 props인지 확인해 주는 것

const foodILike = [
  {
    id: 1,
    name: "떡볶이",
    image:
      "https://www.kihoilbo.co.kr/news/photo/202008/880134_302005_3430.png",
  },
  {
    id: 2,
    name: "돈까스",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F09%2Ftonkatsu-mania-pork-cutlet-seoul-restaurant-top-1.jpg?q=75&w=800&cbr=1&fit=max",
    rating: 4.0,
  },
  {
    id: 3,
    name: "김치찌개",
    image: "https://ppss.kr/wp-content/uploads/2019/08/0-87.jpg",
    rating: 4.5,
  },
];

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

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
