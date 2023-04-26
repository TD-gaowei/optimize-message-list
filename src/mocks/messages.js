import { nanoid } from "nanoid";
import { colors, heights } from "../constants/index.js";

export function range(len) {
  return new Array(len).fill(0);
}

export function generateMessage(message) {
  return {
    name: message,
    itemHeight: selectHeight(),
    bg: null,
    isAgent: true,
  };
}

export const messages = range(20).map(() => ({
  name: `message-${nanoid()}`,
  itemHeight: selectHeight(),
  bg: null,
  isAgent: isAgent(),
}));

export function insertMessages() {
  const backgroundColor = selectColor();
  return range(20).map(() => ({
    name: `message-${nanoid()}`,
    itemHeight: selectHeight(),
    bg: backgroundColor,
    isAgent: isAgent(),
  }));
}

let colorIndex = 0;
function selectColor() {
  const len = colors.length;

  if (colorIndex >= len) {
    colorIndex = 0;
  }

  const selectedColor = colors[colorIndex];
  colorIndex += 1;

  return selectedColor;
}

function selectHeight() {
  return heights[Math.floor(Math.random() * 3)];
}

function isAgent() {
  return [true, false][Math.floor(Math.random() * 2)];
}
