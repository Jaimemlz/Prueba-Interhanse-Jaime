class landingView {
  alertSucess = () => {
    alert('SUCESS');
  };

  alertError = (status) => {
    alert('ERROR STATUS ' + status);
  };

  addHandlerToSubmit = (sendForm) => {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    document
      .getElementById('btnSend')
      .addEventListener('click', () =>
        sendForm(this.alertSucess, this.alertError, { name, email })
      );
  };

  setHrefonClick = () => {
    document
      .getElementById('btnToForm')
      .addEventListener('click', () => (window.location.href = '#form'));
    document
      .getElementById('btnBlock1')
      .addEventListener('click', () => (window.location.href = '#block2'));
    document
      .getElementById('btnBlock2')
      .addEventListener('click', () => (window.location.href = '#block3'));
    document
      .getElementById('btnBlock3')
      .addEventListener('click', () => (window.location.href = '#home'));
  };

  carouselImages = (images) => {
    let cont = 0;
    document.getElementById('corousel').addEventListener('click', (e) => {
      let btnReturn = document.getElementById('btnReturn');
      let btnNext = document.getElementById('btnNext');
      let imgCarousel = document.getElementById('imgCarousel');
      let tgt = e.target;

      if (tgt == btnReturn) {
        if (cont > 0) {
          imgCarousel.src = images[cont - 1];
          cont--;
        } else {
          imgCarousel.src = images[images.length - 1];
          cont = images.length - 1;
        }
      } else if (tgt == btnNext) {
        if (cont < images.length - 1) {
          imgCarousel.src = images[cont + 1];
          cont++;
        } else {
          imgCarousel.src = images[0];
          cont = 0;
        }
      }
    });
  };

  carouselMobile = () => {
    const FlexSlider = {
      num_items: document.querySelectorAll('.slider-item').length,
      current: 1,
      init: function () {
        document
          .querySelectorAll('.slider-item')
          .forEach(function (element, index) {
            element.style.order = index + 1;
          });
        this.addEvents();
      },

      addEvents: function () {
        document.querySelector('#move-button').addEventListener('click', () => {
          this.gotoNext();
        });

        document
          .querySelector('#slider-container')
          .addEventListener('transitionend', () => {
            this.changeOrder();
          });
      },

      changeOrder: function () {
        if (this.current == this.num_items) this.current = 1;
        else this.current++;
        let order = 1;

        for (let i = this.current; i <= this.num_items; i++) {
          document.querySelector(
            ".slider-item[data-position='" + i + "']"
          ).style.order = order;
          order++;
        }

        for (let i = 1; i < this.current; i++) {
          document.querySelector(
            ".slider-item[data-position='" + i + "']"
          ).style.order = order;
          order++;
        }

        document
          .querySelector('#slider-container')
          .classList.remove('slider-container-transition');
        document.querySelector('#slider-container').style.transform =
          'translateX(0)';
      },

      gotoNext: function () {
        document
          .querySelector('#slider-container')
          .classList.add('slider-container-transition');
        document.querySelector('#slider-container').style.transform =
          'translateX(-100%)';
      },
    };
    FlexSlider.init();
  };
}
