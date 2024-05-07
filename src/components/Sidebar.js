import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-fit h-screen overflow-x-auto overflow-y-auto py-5 px-4 border-r border-[#C9D1D9]">
      <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500 font-chelaone -mt-2 cursor-pointer mb-4">
        Social Save
      </h1>
      <div className="font-signika font-light text-base my-2">
        Youtube Downloader
      </div>
      <div className="font-signika font-light text-base my-2">
        Instagram Downloader
      </div>
      <div className="font-signika font-light text-base my-2">
        Facebook Downloader
      </div>
      <div className="font-signika font-light text-base my-2">
        Twitter Downloader
      </div>
      <div className="font-signika font-light text-base my-2">
        Linkdin Downloader
      </div>
    </aside>
  );
}
