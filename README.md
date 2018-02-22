# Hyper Vibrance

A simple [Hyper](https://hyper.is) Terminal plugin that enables vibrancy on MacOS.

![screenshot](https://github.com/JaHes/hyper-vibrance/blob/master/screenshots/dark.png?raw=true)

## Installation

Open `~/.hyper.js` and add `'hyper-vibrance'` to `plugins`.

```js
plugins: [
    'hyper-vibrance'
],
```

## Configuration

The backgroundColor must have opacity between 0 and 1 for vibrancy to work.  
For example backgroundColor could be:  
`'rgba(0, 0, 0, 0.5)'`

hyper-vibrance can be configured in `~/.hyper.js` within the config object.

Example:
```js
module.exports = {
  config: {
    
    // rest of config settings

    hyperVibrance: {
        vibrancy: 'dark',
    }

  }
}
```

## Vibrancy options 
There are three vibrancy options. Change `'dark'` to one of the options below
## 'ultra-dark'
![screenshot](https://github.com/JaHes/hyper-vibrance/blob/master/screenshots/ultra-dark.png?raw=true)
## 'dark'
![screenshot](https://github.com/JaHes/hyper-vibrance/blob/master/screenshots/dark.png?raw=true)
## 'medium-light'
![screenshot](https://github.com/JaHes/hyper-vibrance/blob/master/screenshots/medium-light.png?raw=true)

Fiddle around with opacity and vibrancy option until you find something you like.