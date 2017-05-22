import Component from '@glimmer/component';

const standardGap = 20;

function debounce(func, wait, immediate) {
  var timeout;
  return function() {

    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default class HistorySection extends Component {
  historyText = `Lorem ipsum dolor. Sit amet vitae sed mauris et. Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien
  libero ornare in porttitor lorem risus neque consequat vitae aenean taciti
  non pede vitae erat libero ullamcorper arcu eu et mi etiam. Eros mollis sed.
  Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis. Consequat auctor lorem nisl ullamcorper a morbi minus at.
  Vitae gravida eleifend. Pharetra metus neque omnis erat lobortis. Libero aliquam mauris quam sollicitudin ante.
  Fugiat in nostrum nunc integer et. Lorem ipsum dolor. Sit amet vitae sed mauris et. Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien
  libero ornare in porttitor lorem risus neque consequat vitae aenean taciti
  non pede vitae erat libero ullamcorper arcu eu et mi etiam. Eros mollis sed.
  Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis. Consequat auctor lorem nisl ullamcorper a morbi minus at.
  Vitae gravida eleifend. Pharetra metus neque omnis erat lobortis. Libero aliquam mauris quam sollicitudin ante.
  Fugiat in nostrum nunc integer et.`;

  scrollHandler() {
    return debounce(() => {
      let top = this.element.getBoundingClientRect().top;
      this.args.actionHandler('turnGray', (top < standardGap));
    }, 200);
  }

  didInsertElement() {
    console.log(this);
    this.element.ownerDocument.addEventListener('scroll', this.scrollHandler());
  }

  willDestroy() {
    console.log(`willDestroyElement`);
    this.element.ownerDocument.removeEventListener('scroll', this.scrollHandler());
  }



};
