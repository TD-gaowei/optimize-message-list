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
  };
}

export const messages = range(20).map((_, idx) => ({
  name: `message${idx}`,
  itemHeight: selectHeight(),
  bg: null,
}));

export function insertMessages() {
  const backgroundColor = selectColor();
  return range(20).map((_, idx) => ({
    name: `message-${idx}-${nanoid()}`,
    itemHeight: selectHeight(),
    bg: backgroundColor,
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
