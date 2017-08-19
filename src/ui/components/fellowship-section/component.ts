import Component, {tracked} from '@glimmer/component';
const {log, clear} = console;

export default class FellowshipSection extends Component {
  timeIntervalObj = {};
  timeOut;

  @tracked photos_array_source = [{
    img: '',
    transition_delay: 0
  }];


  @tracked infoArray = [''];


  @tracked slideLeft = 'slide-left';
//photos
  @tracked photos_cycle = 0;
  @tracked max_cycle = 0;
  @tracked fade_in = ''; // or fade-in;
  @tracked photos_per_container = 0;


  set_fade_in(bool = false) {
    this.fade_in = (bool) ? 'fade-in' : '';
  }



  @tracked('args.ori')
  get set_photos_per_container() {
    log(`set photos`);
    //todo: dynamic amount based on vw
    // log(`set_photos_per_container`);
    // log(document);
    // log(this.args.orientation);
    // switch () {
    //   case
    // }

     this.photos_per_container = 4;
    return 'sdf';
  }

  didInsertElement() {
    log(`did insert element`);
    //this.set_photos_per_container();
    this.max_cycle = Math.floor(this.args.photosData.length / this.photos_per_container);

    this.infoArray = this.args.infoData;
  }

  @tracked('photos_cycle')
  get photos_for_display() {
    const {photos_cycle, photos_per_container, max_cycle} = this;

    const start_index = photos_cycle * photos_per_container;
    const end_index = (photos_per_container > 0) ? (start_index + photos_per_container) : 0;

    this.set_fade_in(true);

    const photos = this.args.photosData
      .slice(start_index, end_index)
      .map((photo, index) => {
      return {
        img: photo,
        transition_delay: index * (0.5 * 10) / 10
      };
    });

    const timer = (photos_per_container < 1) ? 0 : 4000;

    // setTimeout(() => {
    //   this.set_fade_in(false);
    //   if (photos_cycle < max_cycle) {
    //     this.photos_cycle = photos_cycle + 1;
    //   } else {
    //     this.photos_cycle = 0;
    //   }
    // }, timer);

    return photos;
  }


  //info
  @tracked infoCycle = 0;

  @tracked('infoArray')
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
