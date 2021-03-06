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

  @tracked('photos_cycle')
  get set_photos_per_container() {
    const orientation = this.args.orientation;
    const get_photos_per_container = (_orientation) => {
      if (_orientation === 'landscape') {
        return 6;
      } else if (_orientation === 'portrait') {
        return 4;
      }
    };

     this.photos_per_container = get_photos_per_container(orientation) || 0;
    return '';
  }

  @tracked('photos_cycle')
  get set_max_cycle() {
    const photos_data_length = this.args.photosData.length;
    const photos_per_container = this.photos_per_container;
    const is_equal_length = (photos_data_length === photos_per_container);
    this.max_cycle = is_equal_length ?
    Math.floor(photos_data_length / photos_per_container) - 1 :
      Math.floor(photos_data_length / photos_per_container);
    return '';
  }

  didInsertElement() {
    setTimeout(() => {
      this.infoArray = this.args.infoData;
    }, 0);

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

    // const timer = (photos_per_container < 1) ? 0 : 4000;
    const timer = photos.length * 1000;

    setTimeout(() => {
      this.set_fade_in(false);
      if (photos_cycle < max_cycle) {
        this.photos_cycle = photos_cycle + 1;
      } else {
        this.photos_cycle = 0;
      }
    }, timer);

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
    // Object.keys(this.timeIntervalObj).forEach(key => {
    //   clearInterval(this.timeIntervalObj.key);
    // });
    // clearTimeout(this.timeOut);
  }
};
