import React from "react";

const CartNumber = ({ state, selectHandler }) => {
  return (
    <div className="overflow-y-scroll hideScrollBar h-4/5">
      {state.map((el) => (
        <div
          className="flex flex-wrap cursor-pointer md:w-72 border-b-8 border-gray-900"
          key={el.id}
          onClick={() => selectHandler(el.id)}
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
        </div>
      ))}
    </div>
  );
};

export default CartNumber;
