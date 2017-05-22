import Component, {tracked} from '@glimmer/component';

export default class MissionarySection extends Component {
  @tracked timeoutToClear = [];

  @tracked revImageIndex = 0;
  @tracked fadeIn;

  revImgSrc = [
    'assets/emmanuel-wo-bg.png',
    'assets/emmanuel-and-sonali-singh-kolkota.png'
  ];

  @tracked('revImageIndex')
  get displayRevImg() {
    const changeRevImgTimeout = setTimeout(() => {
      this.fadeIn = null;
      this.revImageIndex = (this.revImageIndex < (this.revImgSrc.length - 1)) ? this.revImageIndex + 1 : 0;
    }, 2000);
    this.timeoutToClear.push(changeRevImgTimeout);

    const fadeInTimeout = setTimeout(() => {
      this.fadeIn = 'fade-in';
    }, 20);
    this.timeoutToClear.push(fadeInTimeout);

    return this.revImgSrc[this.revImageIndex];
  }

  bioData = {
    Age: 35,
    Birthday: '12/12/1982',
    Wife: 'Mrs Sonnali Singh'
  }

  revDetails: `Lorem ipsum dolor. Sit amet vitae sed mauris et.
  Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien libero ornare in porttitor
  lorem risus neque consequat vitae aenean taciti non pede vitae erat libero ullamcorper arcu eu et mi etiam.
  Eros mollis sed. Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis.`

  willDestroy() {
    this.timeoutToClear.forEach(timeout => {
      clearTimeout(timeout);
    });
  }


};
