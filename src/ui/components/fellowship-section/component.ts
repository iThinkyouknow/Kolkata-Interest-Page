import Component, {tracked} from '@glimmer/component';
const {log, clear} = console;

export default class FellowshipSection extends Component {
  timeIntervalObj = {};
  timeOut;

  @tracked photosArraySource = [{
    img: '',
    className: ''
  }];


  @tracked infoArray = [''];


//photos
  @tracked infoCycle = 0;
  @tracked cycle = 0;

  get photosPerContainer() {
    return 4;
  }

  numberOfCycles() {
    return Math.ceil((this.photosArraySource.length / this.photosPerContainer));
  }


  @tracked('cycle')
  get photosForDisplay() {
    this.removeFadeInClass();

    let startIndex = this.cycle * this.photosPerContainer;
    let endIndex = startIndex + this.photosPerContainer;

    let photosArray = this.photosArraySource.slice(startIndex, endIndex);

    setTimeout(() => {
      this.setFadeInClass();
    }, 50);

    this.setCycle(photosArray);

    return photosArray;
  }


  setFadeInClass() {
    let picClassArrayIndex = this.cycle * this.photosPerContainer;

    this.photosArraySource[picClassArrayIndex].className = 'fade-in';
    picClassArrayIndex++;

    let photoInterval = setInterval(() => {
      this.photosArraySource[picClassArrayIndex].className = 'fade-in';

      picClassArrayIndex++;
      if (picClassArrayIndex === this.cycle * this.photosPerContainer + this.photosPerContainer || picClassArrayIndex === this.photosArraySource.length) {
        clearInterval(photoInterval);
      }
    }, 300);

    this.timeIntervalObj = {...this.timeIntervalObj, photoInterval};

  }

  removeFadeInClass() {
    this.photosArraySource.forEach((photo) => {
      photo.className = undefined;
    });
  }

  setCycle(photosArray) {
    let cycleTimeout = setTimeout(() => {
      this.cycle = (this.cycle === this.numberOfCycles() - 1) ? 0 : this.cycle + 1;

    }, photosArray.length * (1000) + 500);

  }


  //info
  @tracked slideLeft = 'slide-left';

  @tracked('infoArray')
  get width() {
    log(`${this.infoArray.length * 100}vw`);
    return `${this.infoArray.length * 100}vw`;
  }

  shouldSlideLeft(bool) {
    return bool ? 'slide-left' : null;
  }

  @tracked('infoCycle')
  get leftPosition() {
    setTimeout(() => {
      this.slideLeft = this.shouldSlideLeft(true);
      const numberOfCycles = this.infoArray.length;

      if (this.infoCycle < numberOfCycles) {
        this.infoCycle++;

      } else {
        this.slideLeft = this.shouldSlideLeft(false);
        this.infoCycle = 0;
      }
    }, 2000);

    return this.infoCycle * 100;
  }

  didInsertElement() {

    this.photosArraySource = this.args.photosData.map((img) => {return {img: img, className: undefined}});
    this.infoArray = this.args.infoData;
    log(`this.args.infoData`);
    log(this.args.infoData);
  }


  willDestroyElement() {
    Object.keys(this.timeIntervalObj).forEach(key => {
      clearInterval(this.timeIntervalObj.key);
    });
    clearTimeout(this.timeOut);
  }
};
