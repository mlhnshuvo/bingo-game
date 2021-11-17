import React from "react";

const Modal = ({ open, submitting, openModal }) => {
  return (
    <div>
      {open && (
        <div>
          <button
            className="
    bg-purple-500
    text-white
    active:bg-purple-600
    font-bold
    uppercase
    text-xs
    px-4
    py-2
    rounded
    shadow
    hover:shadow-md
    outline-none
    focus:outline-none
    mr-1
    mb-1
    ease-linear
    transition-all
    duration-150
  "
            type="button"
          ></button>
          <div
            className="
    overflow-x-hidden overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    justify-center
    items-center
  "
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div
                className="
        border-0
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
      "
              >
                <h3 class="text-xl px-4 py-5 text-center font-semibold">
                  Are you sure you want to buy these cards?
                </h3>
                <div
                  className="
          flex
          items-start
          justify-between
          p-5
          border-b border-solid border-gray-200
          rounded-t
        "
                >
                  <button
                    className="bg-yellow-400 px-10 py-1 rounded font-semibold"
                    onClick={openModal}
                  >
                    No
                  </button>
                  <button
                    className="bg-yellow-400 px-10 py-1 rounded font-semibold"
                    onClick={submitting}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
};

export default Modal;
