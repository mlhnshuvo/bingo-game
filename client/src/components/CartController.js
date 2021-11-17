import React from "react";

const CartController = ({
  countHandler,
  count,
  clearController,
  allSelectController,
  openModal
}) => {
  return (
    <div className="text-white bg-gray-500 p-2 md:w-72">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <div className="flex items-center justify-center text-center rounded">
          <p>Cartela </p>
          <p> R$ 1,00</p>
        </div>
        <div
          className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={() => countHandler(count + 5)}
        >
          <p> +5</p>
        </div>
        <div
          className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={() => countHandler(count + 20)}
        >
          <p> +20</p>
        </div>
        <div
          className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={allSelectController}
        >
          <div>
            <p>All</p>
          </div>
        </div>
        <div
          className="bg-red-700 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={clearController}
        >
          <p>X</p>
        </div>
        <div
          className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={() => countHandler(count - 1)}
        >
          <p>-</p>
        </div>
        <div className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded">
          <p>{count}</p>
        </div>
        <div
          className="border border-gray-300 w-8 flex items-center justify-center h-8 text-center rounded cursor-pointer"
          onClick={() => countHandler(count + 1)}
        >
          <p>+</p>
        </div>
        <button
          className="bg-yellow-400 py-1 px-2 rounded text-black hover:text-white hover:bg-yellow-600"
          onClick={openModal}
        >
          COMPARE
        </button>
      </div>
    </div>
  );
};

export default CartController;
