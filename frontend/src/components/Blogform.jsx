import React, { useState, useEffect } from "react";
import auth from "../utils/auth";


const Blogform = () => {
  const [heroImage, setHeroImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [driversName, setDriversName] = useState("");
  const [driverBio, setDriverBio] = useState("");
  const [story, setStoryInfo] = useState("");
  const [apiInfo, setApiInfo] = useState("");
 
  const UrlUpdate = "/api/driverOfTheWeek/6613aa132c2c7636ca911560";
  const UrlPost = "/api/driverOfTheWeek";


  const handleFormSubmit = async (event, action) => {
    event.preventDefault();
    if (action === "update") {
      try {
        const dataToSubmit = {
          heroImage,
          profileImage,
          driversName,
          driverBio,
          story,
        };

        const response = await fetch(UrlUpdate, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: `Bearer ${auth.getToken()}`,
          },
          body: JSON.stringify(dataToSubmit),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const responseData = await response.json();
        console.log("Data updated successfully:", responseData);
      } catch (error) {
        // Handle fetch error
        console.error("Error occurred while updating data:", error);
      }
    } else if (action === "post") {
      try {
        const dataToSubmit = {
          heroImage,
          profileImage,
          driversName,
          driverBio,
          story,
        };

        const response = await fetch(UrlPost, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: `Bearer ${auth.getToken()}`,
          },
          body: JSON.stringify(dataToSubmit),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const responseData = await response.json();
        console.log("Data updated successfully:", responseData);
      } catch (error) {
        // Handle fetch error
        console.error("Error occurred while updating data:", error);
      }
    }
  };

  return (
    <form className=" w-80 h-full bg-white drop-shadow-lg flex flex-col mg-2">
    {/* div for imputs */}
      <div className=" m-8 flex flex-col">
       <div className=" flex flex-col text-center w-72 justify-center items-center"> 
      <label htmlFor="hero">
        Hero Image URL
      </label>
      <input
        type="text"
        name="hero"
        value={heroImage}
        className="h-8 w-60 border-2 border-solid border-slate-500 rounded-md m-2"
        required
        onChange={(event) => setHeroImage(event.target.value)}
      />
      </div>
      <div className=" flex flex-col text-center w-72 justify-center items-center">
      <label htmlFor="profile">Profile Image URL</label>
      <input
        type="text"
        name="profile"
        value={profileImage}
        className="h-8 w-60 border-2 border-solid border-slate-500 rounded-md m-2"
        required
        onChange={(event) => setProfileImage(event.target.value)}
      />
      </div>
      <div className=" flex flex-col text-center w-72 justify-center items-center">
      <label htmlFor="name">Driver's Name</label>
      <input
        type="text"
        name="name"
        value={driversName}
        className=" h-8 w-60 border-2 border-solid border-slate-500 rounded-md m-2"
        required
        onChange={(event) => setDriversName(event.target.value)}
      />
      </div>
      <div className=" flex flex-col text-center w-72 justify-center items-center">
      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        value={driverBio}
        className="h-8 w-60 border-2 border-solid border-slate-500 rounded-md m-2"
        required
        onChange={(event) => setDriverBio(event.target.value)}
      />
      </div>
      <div className=" flex flex-col text-center w-72 justify-center items-center">
      <label htmlFor="story">Story</label>
      <input
        type="text"
        name="story"
        value={story}
        className="h-8 w-60 border-2 border-solid border-slate-500 rounded-md m-2"
        required
        onChange={(event) => setStoryInfo(event.target.value)}
      />
      </div>
</div>
      {/* div for buttons */}
<div className="ml-12">
      <button
        type="submit"
        className="w-24 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2"
        onClick={(event) => handleFormSubmit(event, "post")}
      >
        Post
      </button>
      <button
        type="submit"
        onClick={(event) => handleFormSubmit(event, "update")}
        className="  w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
      >
        Update
      </button>
      </div>
    </form>
  );
};

export default Blogform;
