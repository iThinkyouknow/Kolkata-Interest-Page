import Component, {tracked} from '@glimmer/component';
import moment from 'moment'

export default class MissionarySection extends Component {
  @tracked timeoutToClear = [];

  @tracked revImageIndex = 0;
  @tracked fadeIn;


  @tracked('revImageIndex')
  get displayRevImg() {
    const imgArray = this.args.data.imgArray;
    const changeRevImgTimeout = setTimeout(() => {
      this.fadeIn = null;
      this.revImageIndex = (this.revImageIndex < (imgArray.length - 1)) ? this.revImageIndex + 1 : 0;
    }, 3000);
    this.timeoutToClear.push(changeRevImgTimeout);

    const fadeInTimeout = setTimeout(() => {
      this.fadeIn = 'fade-in';
    }, 20);
    this.timeoutToClear.push(fadeInTimeout);

    return imgArray[this.revImageIndex];
  }

  get missionaryBio() {
    const data = this.args.data;
    const {age, birthday, wife} = data;
    return {
      Age: age,
      Birthday: moment(birthday).format('DD MMM YYYY'),
      Wife: wife
    }
  }


  willDestroy() {
    this.timeoutToClear.forEach(timeout => {
      clearTimeout(timeout);
    });
  }


};
