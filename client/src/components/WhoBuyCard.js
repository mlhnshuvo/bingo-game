import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@reach/router";
import { getCard } from "../store/action/gameCardAction";

const WhoBuyCard = () => {
  const state = useSelector((state) => state.gameCardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  const reverseCard = [...state.card];

  return (
    <div className="m-auto sm:w-2/4 w-11/12 mt-10">
      <Link to="/admin">
        <p className="bg-yellow-500 py-3 rounded w-full mt-3 text-white text-center mb-10">
          Add Number
        </p>
      </Link>
      {reverseCard &&
        reverseCard.reverse().map((el) => (
          <div key={el.id} className="mb-5 border-2 border-gray-300 p-5">
            <div className="w-auto sm:w-72 m-auto">
              <p>AuthorId: {el.authorId._id}</p>
              <p>Name: {el.authorId.fullName}</p>
              <p>Email: {el.authorId.email}</p>
              <p>Telephone: {el.authorId.telePhone}</p>
              <p>CPF: {el.authorId.cpf}</p>
            </div>
            {el.card.map((car) => (
              <div
                key={car.id}
                className="flex flex-wrap my-2 w-auto sm:w-72 m-auto"
              >
                {car.number.map((num) => (
                  <p
                    className={
                      num
                        ? "bg-white font-bold border border-gray-900 w-8 h-8 text-black p-1"
                        : "bg-gray-400 font-bold border border-gray-900 w-8 h-8 text-black p-1"
                    }
                    key={num}
                  >
                    {num}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default WhoBuyCard;
