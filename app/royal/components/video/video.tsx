import { Lazy } from "./lazy";

 
// https://www.youtube.com/watch?v=JkzZ-eTdnNM&t=14981s
const Video  = ({video_id='v=JkzZ-eTdnNM&t=14981s'}:{video_id?:string} ) => {
  return (
    <section
      className="bg-black"
    >
      <h2 className="sr-only">Cote Royale Video Reel</h2>

      <Lazy
        rootMargin="1500px"
        className="relative h-screen overflow-hidden md:aspect-video md:h-auto"
      >
        <iframe
        //   src={`https://www.youtube-nocookie.com/embed/${video_id}?autoplay=1&mute=1&loop=1&playlist=${video_id}`}
          src={`/royal/ink101.mp4`}
        
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; muted; loop; gyroscope; picture-in-picture"
          className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
        />
      </Lazy>
    </section>
  );
};

export default Video;
