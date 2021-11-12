import React from "react";

const UpdateProfile = () => {
  return (
    <div className="bg-gray-800 text-white mt-20 w-full lg:w-2/4 m-auto">
      <div className="mb-10">
        <input
          type="email"
          className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          placeholder="Change Email"
        />
      </div>
      <div className="mb-10">
        <input
          type="phone"
          className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          placeholder="Change Telephone"
        />
      </div>
      <div className="mb-10">
        <input
          type="password"
          className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          placeholder="Current Password"
        />
      </div>
      <div className="mb-10">
        <input
          type="password"
          className="shadow appearance-none rounded py-4 w-full border-gray-500 border px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          placeholder="New Password"
        />
      </div>
      <button className="bg-yellow-500 p-4 w-full rounded">Update</button>
    </div>
  );
};

export default UpdateProfile;
