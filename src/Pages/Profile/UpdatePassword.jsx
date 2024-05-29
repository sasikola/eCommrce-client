import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../Redux/profileSlice";
import { toast } from "react-toastify";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword })).then((res) => {
      if (!res.error) {
        toast.success(res.payload.message);
      } else {
        toast.error(res.payload);
      }
    });
  };

  return (
    <>
      <div className="bg-white p-8 shadow-md w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Update Password</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300   shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="••••••••"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300   shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdatePassword;
