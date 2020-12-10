'use strict';

// Работа с готовым кодом
// https://github.com/ganlanyuan/tiny-slider - отсюда подтянули данные слайдера с которым уже можно работать
// #82 урок, можно собрать в проект с стилями и индекс.хтмл для наглядности

import { tns } from "./node_modules/tiny-slider/src/tiny-slider"; // импортировал данные из готового кода

tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
