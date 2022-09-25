# [**react-music-keyboard**](https://www.npmjs.com/package/react-music-keyboard)

## A simple easy-to-use and highly customizable React component emulating a musical keyboard.

#### Check out a live demo here: [Demo!](https://react-music-keyboard-demo.vercel.app/)

---

## **Installation**

```powershell
npm i react-music-keyboard
```

OR

```powershell
yarn add react-music-keyboard
```

---

## **Usage**

```jsx
import React from 'react'
import { Keyboard } from 'react-music-keyboard'
```

```jsx
<Keyboard />
```

---

## **Props**

| **Props**           | **Type**                | **Default**   | **Description**                                                                             |
| ------------------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| **height**          | number                  | `180 `        | The height of the keyboard in pixels.                                                       |
| **whiteKeyWidth**   | number                  | `50 `         | The width of each white key in pixels.                                                      |
| **blackKeyWidth**   | number                  | `20 `         | The width of each black key in pixels. Must not be greater than the width of a white key.   |
| **keySpacing**      | number                  | `5`           | The space between each white key in pixels.                                                 |
| **startNote**       | string                  | `"C2"`        | The starting note: name + octave. Note that black keys use sharps, e.g. F#4 instead of Gb6. |
| **endNote**         | string                  | `"A4" `       | The ending note. Same format as the starting note. Must be higher than the starting note.   |
| **onKeyPress**      | function                | `(key) => {}` | Function to execute when key is pressed. The key name is passed as the argument.            |
| **borderRadius**    | number                  | `15`          | Border radius of the keys                                                                   |
| **whiteKeyColor**   | string (HEX color code) | `"#fff" `     | Fill color of the white keys.                                                               |
| **blackKeyColor**   | string (HEX color code) | `#000"`       | Fill color of the black keys.                                                               |
| **transition**      | number                  | `100`         | Transition speed between hover animation in milliseconds.                                   |
| **whiteKeyStyles**  | object                  | `{}`          | Additional styles applied to white keys.                                                    |
| **blackKeyStyles**  | object                  | `{}`          | Additional styles applied to black keys.                                                    |
| **containerStyles** | object                  | `{}`          | Additional styles applied to the keyboard container.                                        |
| **whiteKeyClass**   | string                  | `""`          | Additional classes applied to white keys. Useful for non-JS styles, e.g. `:hover`.          |
| **blackKeyClass**   | string                  | `""`          | Additional classes applied to black keys.                                                   |
| **containerClass**  | string                  | `""`          | Additional classes applied to the keyboard container.                                       |

---

### Additional restrictions

- **All number props must be greater than 0.**
- **Start and end notes must be white keys.**
- **keySpacing must be between 1 and 10.**
