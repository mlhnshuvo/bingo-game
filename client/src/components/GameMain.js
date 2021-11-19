import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCard } from "../store/action/gameCardAction";
import { getCardNumber } from "../store/action/numberAction";
import CartNumber from "./CartNumber";
import CartController from "./CartController";
import Modal from "./Modal";

const GameMain = () => {
  const cardNumberReducer = useSelector((state) => state.cardNumberReducer);
  const [state, setState] = useState(cardNumberReducer.card);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const selectHandler = (id) => {
    const temp = [...state];
    if (temp.length >= id) {
      const findCart = temp[id - 1];
      findCart.buy = !findCart.buy;
      setState(temp);
    }
  };

  const countHandler = (value) => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].buy = false;
    }
    if (temp.length >= value) {
      for (let i = 0; i < value; i++) {
        temp[i].buy = true;
      }
      setState(temp);
    }
  };

  const clearController = () => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].buy = false;
    }
    setState(temp);
  };

  const allSelectController = () => {
    const temp = [...state];
    for (let i = 0; i < temp.length; i++) {
      temp[i].buy = true;
    }
    setState(temp);
  };

  useEffect(() => {
    let cnt = 0;
    const temp = [...state];
    temp.forEach((el) => {
      if (el.buy === true) {
        cnt++;
      }
    });
    setCount(cnt);
  }, [state]);

  useEffect(() => {
    dispatch(getCardNumber());
  }, [dispatch]);

  const openModal = () => {
    const temp = [...state];
    const isTrue = temp.find((el) => el.buy === true);
    if (isTrue) {
      setOpen(!open);
    }
  };

  const submitting = () => {
    const temp = [...state];
    setOpen(false);
    const findSelect = temp.filter((el) => el.buy === true);
    dispatch(buyCard(findSelect));
  };

  return (
    <div className="relative">
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
            openModal={openModal}
          />
        </div>
      </div>
      <Modal open={open} submitting={submitting} openModal={openModal} />
    </div>
  );
};

export default GameMain;
