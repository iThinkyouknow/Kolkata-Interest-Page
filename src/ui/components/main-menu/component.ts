import Component, { tracked } from '@glimmer/component';
const {log} = console;


export default class MainMenu extends Component {
  menuItems = [
    'CERC',
    'Main',
    'History',
    'The Fellowship',
    'Sermon Outlines',
    'The Missionary',
    'Letters',
    'Make a Friend',
    'Prayer Requests',
    'Updates',
    'Kolkata'
  ];

  @tracked shouldSlide = false;
  @tracked shouldChangeIcon = true;
  // @tracked args['shouldGray'];

  @tracked('shouldChangeIcon')
  get faIcon() {
    let className = this.shouldSlide ? 'fa-close' : 'fa-bars';
    return className;
  }

  @tracked('shouldSlide')
  get showMenu() {
    return this.shouldSlide ? 'slide-down' : '';
  }


  toggleMenu() {
    this.shouldSlide = !this.shouldSlide;
    setTimeout(() => {
      this.shouldChangeIcon = !this.shouldChangeIcon;
    }, 300);
  }


  didInsertElement() {

  }

};
