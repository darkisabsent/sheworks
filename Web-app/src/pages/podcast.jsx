import { useState } from "react";
import ChatSideBar from "../Components/chat/chatSidebar";

function Podcast() {
  const [isOpen, setIsOpen] = useState(false);
  const podcasts = [
    {
      link_to_audio_file:
        "https://www.youtube.com/@CodingBeTounsi",
      podcast_image:
        "https://yt3.googleusercontent.com/o31tuAgDUpU8dNwiirilxxW7TjzDXUhLR4a8KfjKYWvmr2D6coe48hyFJEa8hh2oBWC-4hu62A=s176-c-k-c0x00ffffff-no-rj",
      link_to_audio_on_listenotes:
        "https://www.listennotes.com/e/bc30fc52923f464ab7b275d7cefc6cfc/",
      podcast_title: "Episode 1 - Introduction to Web Development",
      podcast_channel_title: "With Coding Be Tounsi",
    },
   
    
  ];

  return (
    <>
      <ChatSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="lg:ml-[309px]">
        <h1 className=" text-center my-12">Podcasts</h1>
        <div className="mx-auto flex flex-wrap justify-center h-[100vh]">
          {podcasts &&
            podcasts.map((podcast, index) => {
              return (
                <div key={index}>
                  <div className="podcast-cards flex-center flex-col text-center">
                    <img src={podcast.podcast_image} alt="" />
                    <div className="text-center  p-8 text-white bg-pry-col">
                      <span>{podcast.podcast_channel_title}</span>
                      <h3 className="text-white py-3">
                        {podcast.podcast_title}
                      </h3>
                      <div className="flex flex-col">
                        <a
                          href={podcast.link_to_audio_file}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Audio File
                        </a>
                        <a
                          href={podcast.link_to_audio_on_listenotes}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Listen on Listen notes
                        </a>
                      </div>
                      {/* <p>{}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default Podcast;
