import React, { useState } from 'react';
import auth from '../utils/auth';

const Videosform = () => {
  const [isShort, setIsShort] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const urlVideo = "/api/videos";

  const handleFormSubmit = async (event, action) => {
    event.preventDefault();
    if (action === "update") {
      try {
        const dataToSubmit = {
          isShort,
          title,
          url
        };
        const response = await fetch(urlVideo, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: `Bearer ${auth.getToken()}`,
          },
          body: JSON.stringify(dataToSubmit),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const responseData = await response.json();
        console.log("Data updated successfully:", responseData);
      } catch (error) {
        console.error("Error occurred while updating data:", error)
      }
    } else if (action === "post") {
      try {
        const dataToSubmit = {
          isShort,
          title,
          url
        };
        const response = await fetch(urlVideo, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: `Bearer ${auth.getToken()}`,
          },
          body: JSON.stringify(dataToSubmit),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("Data updated successfully:", responseData);
      } catch (error) {
        console.error("Error occurred while updating data:", error);
      }
    }
  };

  return (
    <form>
      <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
        <label htmlFor="title">Video Available</label>
        <input type="text"
               name="title"
               className=' border-2 border-solid border-slate-500 rounded-md mb-5'
               required
               onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="title">Title</label>
        <input type="text"
               name="title"
               className=' border-2 border-solid border-slate-500 rounded-md mb-5'
               required
               onChange={(event) => setIsShort(event.target.value)}
        />
        <label htmlFor="video">Video URL</label>
        <input type="text"
               name="video"
               className=' border-2 border-solid border-slate-500 rounded-md mb-5'
               required
               onChange={(event) => setUrl(event.target.value)}
        />
      </div>
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

export default Videosform;