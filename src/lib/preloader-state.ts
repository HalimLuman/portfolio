// Tracks whether the entry preloader has already played this session, so
// pages reached via client-side navigation don't choreograph around it.
export const preloaderState = { done: false };
