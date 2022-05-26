import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../dist/theme/light";
import dark from "../dist/theme/dark";
import ResetCSS from "../dist/ResetCSS";
import { ModalProvider } from "../dist/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];