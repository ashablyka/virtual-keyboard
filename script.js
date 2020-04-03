const buttons = [
  { code: 'Backquote', en: '`', ru: 'ё', printable: true },
  { code: 'Digit1', en: '1', ru: '1', printable: true },
  { code: 'Digit2', en: '2', ru: '2', printable: true },
  { code: 'Digit3', en: '3', ru: '3', printable: true },
  { code: 'Digit4', en: '4', ru: '4', printable: true },
  { code: 'Digit5', en: '5', ru: '5', printable: true },
  { code: 'Digit6', en: '6', ru: '6', printable: true },
  { code: 'Digit7', en: '7', ru: '7', printable: true },
  { code: 'Digit8', en: '8', ru: '8', printable: true },
  { code: 'Digit9', en: '9', ru: '9', printable: true },
  { code: 'Digit0', en: '0', ru: '0', printable: true },
  { code: 'Minus', en: '-', ru: '-', printable: true },
  { code: 'Equal', en: '=', ru: '=', printable: true },
  { code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false },
  { code: 'Tab', en: 'Tab', ru: 'Tab', printable: false },
  { code: 'KeyQ', en: 'q', ru: 'й', printable: true },
  { code: 'KeyW', en: 'w', ru: 'ц', printable: true },
  { code: 'KeyE', en: 'e', ru: 'у', printable: true },
  { code: 'KeyR', en: 'r', ru: 'к', printable: true },
  { code: 'KeyT', en: 't', ru: 'е', printable: true },
  { code: 'KeyY', en: 'y', ru: 'н', printable: true },
  { code: 'KeyU', en: 'u', ru: 'г', printable: true },
  { code: 'KeyI', en: 'i', ru: 'ш', printable: true },
  { code: 'KeyO', en: 'o', ru: 'щ', printable: true },
  { code: 'KeyP', en: 'p', ru: 'з', printable: true },
  { code: 'BracketLeft', en: '[', ru: 'х', printable: true },
  { code: 'BracketRight', en: ']', ru: 'ъ', printable: true },
  { code: 'Backslash', en: '\\', ru: '\\', printable: true },
  { code: 'Delete', en: 'DEL', ru: 'DEL', printable: false },
  { code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false },
  { code: 'KeyA', en: 'a', ru: 'ф', printable: true },
  { code: 'KeyS', en: 's', ru: 'ы', printable: true },
  { code: 'KeyD', en: 'd', ru: 'в', printable: true },
  { code: 'KeyF', en: 'f', ru: 'а', printable: true },
  { code: 'KeyG', en: 'g', ru: 'п', printable: true },
  { code: 'KeyH', en: 'h', ru: 'р', printable: true },
  { code: 'KeyJ', en: 'j', ru: 'о', printable: true },
  { code: 'KeyK', en: 'k', ru: 'л', printable: true },
  { code: 'KeyL', en: 'l', ru: 'д', printable: true },
  { code: 'Semicolon', en: ';', ru: 'ж', printable: true },
  { code: 'Quote', en: '\'', ru: 'э', printable: true },
  { code: 'Enter', en: 'Enter', ru: 'Enter', printable: false },
  { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false },
  { code: 'NoCode', en: '\\', ru: '\\', printable: true },
  { code: 'KeyZ', en: 'z', ru: 'я', printable: true },
  { code: 'KeyX', en: 'x', ru: 'ч', printable: true },
  { code: 'KeyC', en: 'c', ru: 'с', printable: true },
  { code: 'KeyV', en: 'v', ru: 'м', printable: true },
  { code: 'KeyB', en: 'b', ru: 'и', printable: true },
  { code: 'KeyN', en: 'n', ru: 'т', printable: true },
  { code: 'KeyM', en: 'm', ru: 'ь', printable: true },
  { code: 'Comma', en: ',', ru: 'б', printable: true },
  { code: 'Period', en: '.', ru: 'ю', printable: true },
  { code: 'Slash', en: '/', ru: '.', printable: true },
  { code: 'ArrowUp', en: '▲', ru: '▲', printable: false },
  { code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false },
  { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false },
  { code: 'MetaLeft', en: 'Win', ru: 'Win', printable: false },
  { code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false },
  { code: 'Space', en: ' ', ru: ' ', printable: true },
  { code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false },
  { code: 'ArrowLeft', en: '◄', ru: '◄', printable: false },
  { code: 'ArrowDown', en: '▼', ru: '▼', printable: false },
  { code: 'ArrowRight', en: '►', ru: '►', printable: false },
  { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false },

];
class Keyboard {
  constructor() {
    this.lang = 'en';
  }

  init() {
    const wrapper = createElement('div', 'wrapper');
    const textarea = createElement('textarea', 'textarea');
    const keyboard = createElement('div', 'keyboard');

    const keys = new DocumentFragment();

    buttons.forEach((button) => {
      const key = createElement('button', 'key');
      switch (button.code) {
        case 'Backspace':
          key.classList.add('backspace');
          break;
        case 'Tab':
          key.classList.add('tab');
          break;
        case 'Delete':
          key.classList.add('delete');
          break;
        case 'CapsLock':
          key.classList.add('capslock');
          break;
        case 'Enter':
          key.classList.add('enter');
          break;
        case 'ShiftLeft':
          key.classList.add('left-shift');
          break;
        case 'ShiftRight':
          key.classList.add('right-shift');
          break;
        case 'Space':
          key.classList.add('space');
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'ArrowRight':
          key.classList.add('arrow');
          break;
        default:
          break;
      }

      key.textContent = button[this.lang];
      keys.append(key);
    });

    keyboard.append(keys);
    wrapper.append(textarea, keyboard);
    document.body.append(wrapper);
  }
}

function createElement(tagName, ...classNames) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}

const keyboard = new Keyboard();

keyboard.init();
