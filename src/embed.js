const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive w-full flex justify-center">
    <iframe
      
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="w-full lg:w-4/6 lg:h-96 h-full"
    />
  </div>
);

export default YoutubeEmbed