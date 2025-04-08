const SpotifyPlayer = ({ PlaylistId }) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/${PlaylistId}?theme=0`}
        width="60%"
        height="100%"
        style={{ minHeight: "360px" }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyPlayer;
