const SpotifyPlayer = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <iframe
        className="w-full"
        height="352"
        src="https://open.spotify.com/playlist/0eIuZdFPrFnElgjOojqSq8?si=5fc4de2e78d04dba"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
