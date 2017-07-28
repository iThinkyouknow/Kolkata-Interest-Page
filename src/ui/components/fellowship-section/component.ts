import Component, {tracked} from '@glimmer/component';

export default class FellowshipSection extends Component {
  timeIntervalObj = {};
  timeOut;

  @tracked photosArraySource = [{
    img: 'assets/profile-circle-1.png',
    className: null
  }, {
    img: 'assets/profile-circle-5.png',
    className: null
  }, {
    img: 'assets/profile-circle-2.png',
    className: null
  }, {
    img: 'assets/profile-circle-6.png',
    className: null
  }, {
    img: 'assets/profile-circle-3.png',
    className: null
  }, {
    img: 'assets/profile-circle-7.jpeg',
    className: null
  }, {
    img: 'assets/profile-circle-4.jpg',
    className: null
  }, {
    img: 'assets/profile-circle-8.jpeg',
    className: null
  }, {
    img: 'assets/profile-circle-9.jpeg',
    className: null
  }, {
    img: 'assets/profile-circle-10.png',
    className: null
  }
  ];


  @tracked infoArray = [{
    title: 'Lorem Ipsum',
    transClass: null
  }, {
    title: 'Lorem One',
    transClass: null
  }, {
    title: 'Lorem Two',
    transClass: null
  }, {
    title: 'Lorem Three',
    transClass: null
  },{
    title: 'Lorem Ipsum Lorem psum Lorem Ipsum ',
    transClass: null
  }];


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
      photo.className = null;
    });
  }

  setCycle(photosArray) {
    let cycleTimeout = setTimeout(() => {
      this.cycle = (this.cycle === this.numberOfCycles() - 1) ? 0 : this.cycle + 1;

    }, photosArray.length * (1000) + 500);

  }


  //info
  @tracked slideLeft = 'slide-left';

  get width() {
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

  willDestroyElement() {
    Object.keys(this.timeIntervalObj).forEach(key => {
      clearInterval(this.timeIntervalObj.key);
    });
    clearTimeout(this.timeOut);
  }
};
