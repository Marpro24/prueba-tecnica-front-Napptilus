import PodcastsListStyled from "./PodcastsListstyled";
import useFetchPodcasts from "../../hooks/fetchPodcastsApi";

export const PodcastsList = (): React.ReactElement => {
  const { podcasts, status, error } = useFetchPodcasts();

  if (status === "loading") {
    return <div>Loading podcasts...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <PodcastsListStyled>
      {podcasts.map((podcast) => (
        <li className="podcast-item" key={podcast.id.attributes["im:id"]}>
          <img
            className="podcast-image"
            src={podcast["im:image"][0].label}
            alt={podcast["im:name"].label}
            width={60}
            height={60}
          />
          <div className="podcast-text-container">
            <h2 className="podcast-title">{podcast["im:name"].label}</h2>
            <p className="podcast-author">
              {" "}
              Author: {podcast["im:artist"].label}
            </p>
          </div>
        </li>
      ))}
    </PodcastsListStyled>
  );
};