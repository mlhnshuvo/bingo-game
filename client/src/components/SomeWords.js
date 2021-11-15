import React from "react";
import Atendence from "../assets/images/logo/atendence.png";
import Security from "../assets/images/logo/security.png";

const SomeWords = () => {
  return (
    <div className="bg-gray-900 ">
      <div className=" text-white w-2/3 m-auto flex gap-5 py-20 flex-wrap md:flex-nowrap">
        <div>
          <div className="flex gap-4">
            <div>
              <img src={Atendence} alt="" className="w-20" />
            </div>
            <div>
              <p className="text-xl">24-hour service</p>
              <p>
                Ask your questions, or ask for assistance in Portuguese at any
                time. Our attendants are waiting to help you any time of the
                day!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <div>
              <img src={Security} alt="" className="w-20" />
            </div>
            <div>
              <p className="text-xl">24-hour service</p>
              <p>
                Ask your questions, or ask for assistance in Portuguese at any
                time. Our attendants are waiting to help you any time of the
                day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeWords;
