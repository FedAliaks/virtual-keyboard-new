
export {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT}

const KEYBOARD_EN = [ ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
                      ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
                      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',  '/', 'U+25B2', 'Shift'],
                      ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right']
                    ]



const KEYBOARD_EN_SHIFT = [ ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', 'Backspace'],
                            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
                            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
                            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Arrow Up', 'Shift'],
                            ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right']
                          ]



const KEYBOARD_RU = [ ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
                      ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
                      ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',  '.', 'Arrow Up', 'Shift'],
                      ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right']
                    ]


const KEYBOARD_RU_SHIFT = [ ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', 'Backspace'],
                            ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'З', 'Х', 'Ъ', 'Del'],
                            ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
                            ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Arrow Up', 'Shift'],
                            ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right']
                          ]





/* const KEYBOARD_FIRST_EN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const KEYBOARD_FIRST_EN_SHIFT = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', 'Backspace'];
const KEYBOARD_SECOND_EN = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const KEYBOARD_SECOND_EN_SHIFT = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
const KEYBOARD_THIRD_EN = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const KEYBOARD_THIRD_EN_SHIFT = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const KEYBOARD_FOURTH_EN = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',  '/', 'Arrow Up', 'Shift'];
const KEYBOARD_FOURTH_EN_SHIFT = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Arrow Up', 'Shift'];
const KEYBOARD_FIFTH_EN = ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right'];

const KEYBOARD_FIRST_RU = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const KEYBOARD_FIRST_RU_SHIFT = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', 'Backspace'];
const KEYBOARD_SECOND_RU = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
const KEYBOARD_SECOND_RU_SHIFT = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'З', 'Х', 'Ъ', 'Del'];
const KEYBOARD_THIRD_RU = ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const KEYBOARD_THIRD_RU_SHIFT = ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
const KEYBOARD_FOURTH_RU = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',  '.', 'Arrow Up', 'Shift'];
const KEYBOARD_FOURTH_RU_SHIFT = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Arrow Up', 'Shift'];
const KEYBOARD_FIFTH_RU = ['Ctrl', 'Win', 'Space', 'Alt', 'Ctrl', "Arrow Left", 'Arrow Down', 'Arrow Right']; */