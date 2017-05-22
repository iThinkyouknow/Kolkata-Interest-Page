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

  @tracked sermonInfo = [{
    date: '10.04.2017',
    className: null,
    sermonTitle: 'Sermon Title',
    scriptureText: 'Scripture Text',
    sermonText: 'SermonText',
    sermonPoints: [
      'Point One',
      'Point 2',
      'Point 3'
    ]
  }, {
    date: '17.04.2017',
    className: null,
    sermonTitle: 'Sermon Title B',
    scriptureText: 'Scripture Text B',
    sermonText: 'Sermon Text B',
    sermonPoints: [
      'Point A',
      'Point B',
      'Point C'
    ]
  }, {
    date: '24.04.2017',
    className: null,
    sermonTitle: 'Sermon Title C',
    scriptureText: 'Scripture Text C',
    sermonText: 'SermonText C',
    sermonPoints: [
      'Point D',
      'Point E',
      'Point F'
    ]
  }, {
    date: '17.05.2017',
    className: null,
    sermonTitle: 'Sermon Title D',
    scriptureText: 'Scripture Text D',
    sermonText: 'SermonText D',
    sermonPoints: [
      'Point 1',
      'Point 2',
      'Point 3'
    ]
  }, {
    date: '30.05.2017',
    className: null,
    sermonTitle: 'Sermon Title E',
    scriptureText: 'Scripture Text E',
    sermonText: 'SermonText E',
    sermonPoints: [
      'Point 8',
      'Point 9',
      'Point 11'
    ]
  }];


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
    let maxMarginTop = this.marginToMove * (this.sermonInfo.length - 2);
    this.slideClass = 'slide';

    if (this.dateConMarginTop > this.marginToMove) {
      this.dateConMarginTop = this.marginToMove;
      this.sermonArrayIndex = 0;

    } else if (this.dateConMarginTop < -maxMarginTop) {
      this.dateConMarginTop = -maxMarginTop;
      this.sermonArrayIndex = this.sermonInfo.length - 1;

    } else {
      let containerIndex = Math.round(this.dateConMarginTop / this.marginToMove);
      console.log(containerIndex);
      this.dateConMarginTop = containerIndex * this.marginToMove;
      this.sermonArrayIndex = -containerIndex + 1;
    }

    let sermonInfoTemp = this.sermonInfo.map((info, index) => {
      return {
        ...info,
        className: (index === this.sermonArrayIndex) ? this.thisWeek : null
      }
    });

    this.sermonInfo = sermonInfoTemp;
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
    return this.sermonInfo[this.sermonArrayIndex];
  }


  setThisWeek() {
    log(`set this week`);
    const dateFormat = 'DD.MM.YYYY';
    const thisDay = moment().day(); // 0: Sunday, 1-6 other days
    const sundayMoment = thisDay ? moment().day(7) : thisDay;

    let tempSermonInfo = this.sermonInfo.map((sermon, index) => {
      let thisWeek;
      let sermonDateMoment = moment(sermon.date, dateFormat);

      if (sermonDateMoment.isSame(sundayMoment, 'day')) {
        this.sermonArrayIndex = index;
        thisWeek = this.thisWeek;

      } else {
        thisWeek = null;
      }

      return {
        ...sermon,
        className: thisWeek
      };
    });

    if (!this.sermonArrayIndex) {
      log(`!sermonArrayIndex`);
      let lastIndex = this.sermonInfo.length - 1;
      let lastIndexMoment = moment(this.sermonInfo[lastIndex].date, dateFormat);
      let firstIndexMoment = moment(this.sermonInfo[0].date, dateFormat);

      if (lastIndexMoment.isBefore(sundayMoment, 'day')) {
        console.log(`befire!`);
        this.sermonArrayIndex = lastIndex;

      } else if (firstIndexMoment.isAfter(sundayMoment, 'day')) {
        this.sermonArrayIndex = 0;

      } else {
        let i = lastIndex - 1;

        while (!this.sermonArrayIndex && i > 0) {
          let dateMoment = moment(tempSermonInfo[i].date, dateFormat);
          let datePrevMoment = moment(tempSermonInfo[i + 1].date, dateFormat);
          if (sundayMoment.isAfter(dateMoment, 'day') && sundayMoment.isSameOrBefore(datePrevMoment, 'day')) this.sermonArrayIndex = i + 1;
          log(`this.sermonArrayIndex: ${this.sermonArrayIndex}`);

          i--;
        }
      }
      tempSermonInfo[this.sermonArrayIndex].className = this.thisWeek;
    }

    this.sermonInfo = tempSermonInfo;
    this.dateConMarginTop = -(this.sermonArrayIndex - 1) * this.marginToMove;

  }


  didInsertElement() {
    this.setThisWeek();
    this.dragWheelListener();
  }

  //end
};
