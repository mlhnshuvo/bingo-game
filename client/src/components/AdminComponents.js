import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@reach/router";
import {
  deleteNumber,
  addNumber,
  getCardNumber,
  addPrice,
} from "../store/action/numberAction";

const AdminPage = () => {
  const [inputValue, setInputValue] = useState({ number: "" });
  const [isEditable, setIsEditable] = useState("");
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.cardNumberReducer.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardNumber());
  }, [dispatch]);

  const reverseNumber = [...state];

  return (
    <div className="m-auto sm:w-2/4 w-11/12 mt-10">
      <div>
        <Link to="/buycard">
          <p className="bg-yellow-500 py-3 rounded w-full mt-3 text-white text-center mb-10">
            Who buy card
          </p>
        </Link>
        <p className="text-xl">Add number</p>
        <input
          type="number"
          className="shadow appearance-none rounded py-3 w-full border-gray-500 border px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          onChange={(e) => setInputValue({ number: e.target.value })}
        />
        <button
          className="bg-green-800 py-3 rounded w-full mt-3 text-white"
          onClick={() => dispatch(addNumber(inputValue))}
        >
          Submit Number
        </button>
      </div>
      <div className="mt-10">
        {reverseNumber &&
          reverseNumber.reverse().map((el) => (
            <div
              className="flex flex-wrap my-5 w-auto sm:w-72 m-auto"
              key={el.id}
            >
              {el.number.map((num) => (
                <p
                  className={
                    el.buy
                      ? num
                        ? "bg-yellow-300 font-bold border border-gray-900 w-8 h-8 text-black p-1"
                        : "bg-yellow-300 font-bold border border-gray-900 w-8 h-8 text-black p-1"
                      : num
                      ? "bg-white font-bold border border-gray-900 w-8 h-8 text-black p-1"
                      : "bg-gray-400 font-bold border border-gray-900 w-8 h-8 text-black p-1"
                  }
                  key={num}
                >
                  {num}
                </p>
              ))}
              <button
                className="bg-red-500 w-full rounded mt-1"
                onClick={() => dispatch(deleteNumber(el.id))}
              >
                delete
              </button>
              <p className="bg-yellow-500 w-full rounded text-center my-1">{el.price}</p>
              {isEditable === el.id ? (
                <input
                  type="number"
                  className="shadow appearance-none rounded py-1 w-full border-gray-500 border px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                  placeholder="Put price and enter"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setIsEditable("");
                      dispatch(addPrice(el.id, { price }));
                    }
                  }}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              ) : (
                <button
                  className="bg-green-800 w-full rounded text-white"
                  onClick={() => setIsEditable(el.id)}
                >
                  add price
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminPage;
