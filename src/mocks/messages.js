import { nanoid } from "nanoid";

export function range(len) {
  return new Array(len).fill(0);
}

const itemHeight = [40, 50, 60];
const colors = ["yellowgreen", "grey", "orange", "yellow", "blue", "red"];

export function generateMessage(message) {
  return {
    name: message,
    itemHeight: itemHeight[Math.floor(Math.random() * 3)],
  };
}

export const messages = range(20).map((_, idx) => ({
  name: `message${idx}`,
  itemHeight: itemHeight[Math.floor(Math.random() * 3)],
}));

export function insertMessages() {
  const bg = colors[Math.floor(Math.random() * 6)];
  return range(20).map((_, idx) => ({
    name: `message-${idx}-${nanoid()}`,
    itemHeight: itemHeight[Math.floor(Math.random() * 3)],
    bg,
  }));
}
