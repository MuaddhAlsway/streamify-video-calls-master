export const AVATAR_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23d4d4d8'/%3E%3Ccircle cx='64' cy='48' r='22' fill='%23a1a1aa'/%3E%3Cpath d='M64 78c-24 0-42 14-46 34h92c-4-20-22-34-46-34z' fill='%23a1a1aa'/%3E%3C/svg%3E";

export const onAvatarError = (event) => {
  const img = event.currentTarget;
  if (img.dataset.avatarFallback === "true") return;
  img.dataset.avatarFallback = "true";
  img.src = AVATAR_FALLBACK;
};
