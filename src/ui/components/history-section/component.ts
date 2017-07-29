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
