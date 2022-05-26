# 🧱 Brickchain UIkit

[![Version](https://img.shields.io/npm/v/@brickchain-libs/uikit)](https://www.npmjs.com/package/@brickchain-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@brickchain-libs/uikit)](https://www.npmjs.com/package/@brickchain-libs/uikit)

Brickchain UIkit is a set of React components and hooks used to build pages on Brickchain's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @brickchain-libs/uikit`

## Setup

### Theme

Before using Brickchain UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@brickchain-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@brickchain-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://brickchain.github.io/brickchain-uikit/)
