# React Native Latex

![Build Status](https://img.shields.io/npm/v/npm?style=plastic)

This module includes a component to render LateX formulas in React Native.
This is based on the API to `http://sciencesoft.at/`

## **Installation**
---
```
$ npm install --save react-native-latex
```
The solution is implemented in JavaScript so no native module linking is required.

## **Usage**
---
```
import Latex from 'react-native-latex';

<Latex>
\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{-\frac{x^2}{2}}dx
</Latex>
```
