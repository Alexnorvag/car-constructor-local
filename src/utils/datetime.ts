export const formatTime = (date: Date): string =>
date
  .toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
  .replace(":", "-");
  