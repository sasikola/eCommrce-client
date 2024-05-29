import React from "react";
import UpdatePassword from "./UpdatePassword";
import ProfileUpdate from "./ProfileUpdate";

function Profile() {
  return (
    <>
      <div className="h-[100%] flex flex-col items-center justify-center py-6">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        <div className="max-w-5xl w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <ProfileUpdate />
          <UpdatePassword />
        </div>
      </div>
    </>
  );
}

export default Profile;
