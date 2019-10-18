$(document).ready(function() {

  //Menu dropdown element show/hide
  const toggleDropdown = (function() {
    const menuItem = $('.menu__item--drop');
    const menuDropdown = $('.menu__dropdown');

    menuItem.on('click', function() {
      menuItem.not(this).children('.menu__dropdown').slideUp(100);
      $(this).children('.menu__dropdown').slideToggle(100);
    });
  }());
  // END Menu dropdown element show/hide

  //Search input show/hide
  const toggleSearch = (function() {
    const openBtn = $('.header__search');
    const closeBtn = $('.header__search-close');
    const searchGroup = $('.header__search-group');
    const searchField = $('.header__search-input');

    openBtn.on('click', function() {
      if($("body").innerWidth() <= 570) {
        $('.search-top').slideToggle(200);
        $('.search-top__input').focus();
      }else {
        searchGroup.animate({width: 'show'});
        searchField.focus();
      }

    });

    $('.search-top__close').on('click', function() {
      $('.search-top').slideToggle(200);
    });

    closeBtn.on('click', function() {
        searchGroup.animate({width: 'hide'});
        searchField.focus();
    });

    $(document).keyup(function(event) {
      if(event.witch === 27)
        searchGroup.animate({width: 'hide'});
      if(event.witch === 13) {
        searchGroup.animate({width: 'hide'});
        searchField.submit();
      }
    });
  }());
  //END Search input show/hide

  //Currency dropdown show/hide
  const selectCurrency = (function() {
    const openBtn = $('.user-actions__currency');
    const dropdown = $('.currency__dropdown');
    const activeCurrency = $('.currency__active');
    const currencyName = $('.currency__dropdown-button');

    openBtn.on('click', function() {
      dropdown.slideToggle(100);
    });

    currencyName.on('click', function() {
      activeCurrency.html($(this).text());
    });

  }());
  //END Currency dropdown show/hide

  //Filters show/hide
  const mobileFilter = (function() {
    const openFilterBtn = $('.open-filters');
    const filters = $('.content__filters');

    openFilterBtn.on('click', function(event) {
      event.preventDefault();

      if(!filters.hasClass('active')) {
        filters.addClass('active');
        filters.animate({
          left: '0px'
        })
      } else {
        filters.removeClass('active');
        filters.animate({
          left: '-290px'
        })
      }
    });
  }());
  //END Filters show/hide

  //Selected watches form dropdown
  const selectedDropdown = (function() {
    const openBtn = $('.brand__selected');
    const dropdown = $('.watch__dropdown');
    const label = $('.watch__label');
    const item = $('.watch__dropdown-item');

    openBtn.on('click', function() {
      $(this).toggleClass('brand__selected--active');
      openBtn.not(this).children('.watch__dropdown').slideUp(200);
      $(this).children('.watch__dropdown').slideToggle(200);
    });

    item.on('click', function(event) {
      $(this).parents('.watch__dropdown').siblings('.watch__label').html($(this).html());
    });
  }());
  //END Selected watches form dropdown

  //Price slider
  const priceSlider = (function() {
    var range = document.getElementById('watch__price-range');

    noUiSlider.create(range, {
      start: [713, 23370],
      connect: true,
      range: {
        'min': 713,
        'max': 23370
      },

    });

    var select = document.getElementById('input-select');
    // Append the option elements
    for (var i = 713; i <= 23370; i++) {

        var option = document.createElement("option");
        option.text = i;
        option.value = i;

        select.appendChild(option);
    }

    var inputNumber = document.getElementById('input-number');

    range.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            inputNumber.value = Math.round(value);;
        } else {
            select.value = Math.round(value);
        }
    });

    select.addEventListener('change', function () {
        html5Slider.noUiSlider.set([this.value, null]);
    });

    inputNumber.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
    });
  }());
  //END Price slider

  //Banner slider init. Plugin: SWIPER
  const bannerSlider = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          // return current + ' of ' + total;
          return `<div class="slider-pagination">
                    <span class="current-slide">${current}</span>
                    <span class="separator"></span>
                    <span class="total-slide">${total}</span>
                  </div>`
      },
    },

  });
  //END Banner slider. Plugin: SWIPER

  //Features slider init. Plugin: SWIPER
  const featuresSlier = new Swiper ('.features__swiper-container', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //END features slider. Plugin: SWIPER

  //Watches slider init. Plugin: SWIPER

  const watchesSlider = new Swiper ('.watches__slider', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          // return current + ' of ' + total;
          return `<div class="slider-pagination">
                    <span class="current-slide">${current}</span>
                    <span class="separator"></span>
                    <span class="total-slide">${total}</span>
                  </div>`
      },
    },
    breakpoints: {
      680: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    },
  });
//Brends slider Plugin: SWIPER
  const brandsSlider = new Swiper('.brands__slider', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerView: 6,
    spaceBetween: 55,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
  });
//END Brends slider Plugin: SWIPER

  //END Watches slider init. Plugin: SWIPER

});
