import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, userProfile } from "../../Redux/profileSlice";
import { toast } from "react-toastify";

function ProfileUpdate() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);
  useEffect(() => {
    setName(profile?.name || "");
    setPhone(profile?.phone || "");
    setEmail(profile?.email || "");
  }, [profile]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, phone, email })).then((res) => {
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
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300   shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300   shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileUpdate;
