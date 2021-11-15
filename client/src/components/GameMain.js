import React, { useState, useEffect } from "react";
import CartNumber from "./CartNumber";
import gameCardData from "./GameCardData";
import CartController from "./CartController";

const GameMain = () => {
  const [state, setState] = useState(gameCardData);
  const [count, setCount] = useState(0);

  const selectHandler = (id) => {
    const temp = [...state];
    if (temp.length >= id) {
      const findCart = temp.find((el) => el.id === id);
      findCart.select = !findCart.select;
      setState(temp);
    }
  };

  const countHandler = (value) => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].select = false;
    }
    if (temp.length >= value) {
      for (let i = 0; i < value; i++) {
        temp[i].select = true;
      }
      setState(temp);
    }
  };

  const clearController = () => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].select = false;
    }
    setState(temp);
  };

  const allSelectController = () => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].select = true;
    }
    setState(temp);
  };

  useEffect(() => {
    let cnt = 0;
    const temp = [...state];
    temp.forEach((el) => {
      if (el.select === true) {
        cnt++;
      }
    });
    setCount(cnt);
  }, [state]);

  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap">
        <iframe
          src="https://www.youtube.com/embed/cqOqpU7m7KE"
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full"
        ></iframe>
        <div className="h-auto">
          <CartNumber state={state} selectHandler={selectHandler} />
          <CartController
            countHandler={countHandler}
            count={count}
            clearController={clearController}
            allSelectController={allSelectController}
          />
        </div>
      </div>
    </div>
  );
};

export default GameMain;
