import React, { useState, useEffect } from "react";
import auth from "../utils/auth";

const Blogform = () => {
  const [heroImage, setHeroImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [driversName, setDriversName] = useState("");
  const [driverBio, setDriverBio] = useState("");
  const [story, setStoryInfo] = useState("");

  const [apiInfo, setApiInfo] = useState("");
  const URL = "/api/driverOfTheWeek/6613aa132c2c7636ca911560";
  const URL2 = "/api/driverOfTheWeek";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((data) => {
        console.log(data);
        setApiInfo(JSON.stringify(data));
      });
    };
    fetchData();
  }, []);

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

        const response = await fetch(URL, {
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

        const response = await fetch(URL2, {
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
    <form className="w-60 h-full bg-white drop-shadow-lg flex flex-col items-center">
      <label htmlFor="hero" className="mt-5">
        Hero Image URL
      </label>
      <input
        type="text"
        name="hero"
        value={heroImage}
        className=" border-2 border-solid border-slate-500 rounded-md mb-5"
        required
        onChange={(event) => setHeroImage(event.target.value)}
      />
      <label htmlFor="profile">Profile Image URL</label>
      <input
        type="text"
        name="profile"
        value={profileImage}
        className=" border-2 border-solid border-slate-500 rounded-md mb-5"
        required
        onChange={(event) => setProfileImage(event.target.value)}
      />
      <label htmlFor="name">Driver's Name</label>
      <input
        type="text"
        name="name"
        value={driversName}
        className=" border-2 border-solid border-slate-500 rounded-md mb-5"
        required
        onChange={(event) => setDriversName(event.target.value)}
      />
      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        value={driverBio}
        className=" border-2 border-solid border-slate-500 rounded-md mb-5"
        required
        onChange={(event) => setDriverBio(event.target.value)}
      />
      <label htmlFor="story">Story</label>
      <input
        type="text"
        name="story"
        value={story}
        className=" border-2 border-solid border-slate-500 rounded-md mb-5"
        required
        onChange={(event) => setStoryInfo(event.target.value)}
      />

      <p className="w-20 flex flex-col items-center">{apiInfo}</p>

      <button
        type="submit"
        className="w-20 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2"
        onClick={(event) => handleFormSubmit(event, "post")}
      >
        Post
      </button>
      <button
        type="submit"
        onClick={(event) => handleFormSubmit(event, "update")}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
      >
        Update
      </button>
    </form>
  );
};

export default Blogform;
