export function range(len) {
  return new Array(len).fill(0);
}

export const messages = range(20).map((_, idx) => ({
  name: `message${idx}`,
}));
