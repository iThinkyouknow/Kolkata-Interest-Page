import Component from '@glimmer/component';
const {log} = console;
export default class KolkataSection extends Component {
  gMapsSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15979242.062923724!2d87.25582330513305!3d12.09967986422822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a8e69f5ee39%3A0xdcdcbfbba3192119!2s121%2C+Mahatma+Gandhi+Rd%2C+Satyen+Park%2C+Joka%2C+Kolkata%2C+West+Bengal+700063%2C+India!5e0!3m2!1sen!2ssg!4v1501027952088`;

  get screenWidth() {
    return this.element.offsetWidth;
  }

  get screenHeight() {
    return this.element.offsetHeight;
  }
};
