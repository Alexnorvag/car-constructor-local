import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const views = {
  presentation: "Presentation",
  gallery: "Gallery",
};

export const Review: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const view = query.get("view");

  useEffect(() => {
    if (!view) {
      const url = new URL(window.location.href);
      url.search = "?view=presentation";

      history.replace(url.pathname + url.search);
    }
  }, [history, location.pathname, location.search, view]);

  return <div style={{ color: "red" }}>{views["presentation"]}</div>;
};
