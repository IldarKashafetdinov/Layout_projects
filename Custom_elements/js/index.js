const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false
});







ymaps.ready(init);
function init() {
// Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185, 2.354224],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/custom-map.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

// Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}







let phone = document.querySelector("input[type=tel]");
let im = new Inputmask("+7 (999) - 999 - 99 - 99");

im.mask(phone);



new JustValidate('.form', {
  colorWrong: 'gray',
  rules: {
    name: {
      required: true,
      minLengh: 2,
      maxLengh: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length ===  10;
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    email: {
      required: "Введите корректно email"
    },
    name: {
      required: "Введите корректно имя"
    },
    tel: {
      required: "Введите корректный телефон",
      function: "Не достаточное количество символов"
    }
  }
});



