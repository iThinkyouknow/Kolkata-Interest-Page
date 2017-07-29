import Component, {tracked} from '@glimmer/component';
import moment from 'moment';

let {log} = console;

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

export default class SermonOutlinesSection extends Component {
  marginToMove = 160;
  thisWeek = 'this-week';
  fadeIn = 'fade-in';


  @tracked dateConMarginTop = 0; // will end up as %
  @tracked dragWheelIsFocused = false;
  @tracked touchStartPositon = 0;
  @tracked slideClass = 'slide'; // 'slide'
  @tracked sermonArrayIndex = 0;
  @tracked fadeInClass = ''; // or 'fade-in'

  @tracked sermonInfo = {
    '': {
      date: '',
      className: '',
      sermonTitle: '',
      scriptureText: '',
      sermonText: '',
      sermonPoints: [
        ''
      ]
    }
  };

  @tracked('sermonInfo')
  @tracked get sermonInfoKeys() {
    return Object.keys(this.sermonInfo);
  }

  @tracked('sermonInfoKeys')
  get sermonInfoArray() {
    return this.sermonInfoKeys.map((key) => this.sermonInfo[key]);
  }


  slideToDate(e, index) {
    console.log(`slideToDate`);
    console.log(index);
  }


  touchStart(e) {
    e.preventDefault();
    this.slideClass = '';
    this.touchStartPositon = e.changedTouches[0].clientY;
  }


  dragWheel(wheelWidth, e) {
    let startPos = this.touchStartPositon;
    let diff = e.changedTouches[0].clientY - startPos;
    this.dateConMarginTop = this.dateConMarginTop + (diff / wheelWidth) * 100;
    this.touchStartPositon = e.changedTouches[0].clientY;
  }


  touchEnd(e) {
    let maxMarginTop = this.marginToMove * (this.sermonInfoArray.length - 2);
    this.slideClass = 'slide';

    if (this.dateConMarginTop > this.marginToMove) {
      this.dateConMarginTop = this.marginToMove;
      this.sermonArrayIndex = 0;

    } else if (this.dateConMarginTop < -maxMarginTop) {
      this.dateConMarginTop = -maxMarginTop;
      this.sermonArrayIndex = this.sermonInfoArray.length - 1;

    } else {
      let containerIndex = Math.round(this.dateConMarginTop / this.marginToMove);
      console.log(containerIndex);
      this.dateConMarginTop = containerIndex * this.marginToMove;
      this.sermonArrayIndex = -containerIndex + 1;
    }


    const newSermonInfo = this.sermonInfoKeys.reduce((acc, key, index) => {
      return {...acc, [key]: {
        ...this.sermonInfoArray[index],
        className: (index === this.sermonArrayIndex) ? `this-week` : ''
      }};
    }, {});

    this.sermonInfo = newSermonInfo;


  }


  dragWheelListener() {
    let dragWheel = this.element.querySelector('.date-container');
    let wheelWidth = dragWheel.getBoundingClientRect().width;
    dragWheel.addEventListener("touchstart", this.touchStart.bind(this));
    dragWheel.addEventListener("touchmove", debounce(this.dragWheel.bind(this, wheelWidth), 5));
    dragWheel.addEventListener("touchend", this.touchEnd.bind(this));
  }


  @tracked('sermonArrayIndex')
  get displaySermonPoints() {
    this.fadeInClass = null;
    setTimeout(() => {
      this.fadeInClass = this.fadeIn;
    }, 20);
    return this.sermonInfoArray[this.sermonArrayIndex];
  }


  setThisWeek() {
    log(`set this week`);
    const dateFormat = 'YYYY-MM-DD';
    const thisDay = moment().day(); // 0: Sunday, 1-6 other days
    const sundayMoment = thisDay ? moment().day(7) : thisDay;
    const SundayDate = sundayMoment ? moment().add(7 - thisDay, 'd').format(dateFormat): moment().format(dateFormat);
    const sundayKey = `${SundayDate}|0`;
    const sermonAvailable = (this.sermonInfo[sundayKey] !== undefined && this.sermonInfo[sundayKey] !== null);
    const actualKey = sermonAvailable ? sundayKey : this.sermonInfoKeys[this.sermonInfoKeys.length - 1];
    const sundayObj = {
      ...this.sermonInfo[actualKey],
      className: `this-week`
    };

    this.sermonInfo = {...this.sermonInfo, [actualKey]: sundayObj};

    this.sermonArrayIndex = this.sermonInfoKeys.findIndex((key) => key === actualKey);
    this.dateConMarginTop = -(this.sermonArrayIndex - 1) * this.marginToMove;
  }


  didInsertElement() {
    log(`insert`);
    this.sermonInfo = this.args.data;
    this.setThisWeek();
    this.dragWheelListener();
  }

  //end
};
