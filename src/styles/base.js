export const htmlFontSize = 18;

export const baselinePX = 20;

export const base = (multiplier = 1) =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;
