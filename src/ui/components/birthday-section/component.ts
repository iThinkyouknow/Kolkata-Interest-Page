import Component, {tracked} from '@glimmer/component';
import moment from 'moment';

const {log, clear} = console;
export default class BirthdaySection extends Component {

  month = moment().format(`MMMM`);

  @tracked birthdayPax = 0;
  @tracked birthdayDispCycle = 0;
  @tracked slideUp = '';
  @tracked shouldStartFromZero = false;

  @tracked('birthdayPax')
  get maxCycle() {
    return Math.ceil(this.birthdayPersonsArray.length / this.birthdayPax);
  }

  get birthdayPersonsArray() {

    return this.args.data;
  }

  birthdayPersonsValidator(birthdayPersonsArray) {
    return birthdayPersonsArray.reduce((a, person) => {

      const {birthday, name, img} = person;

      if (!(birthday && name)) {
        console.error(`Array passed in to 'sortPersonsByName' function must contain signature [{birthday, name, img}]`);
        return a * 0;
      } else {
        return a * 1;
      }
    }, 1);
  }

  sortPersonsByBirthday(personsArray = [{birthday: '', name: '', img: ''}]) {
    return personsArray.sort((a, b) => {

      if (moment(a.birthday, 'DD-MM').isBefore(moment(b.birthday, 'DD-MM'))) {
        return -1;
      } else if (moment(a.birthday, 'DD-MM').isAfter(moment(b.birthday, 'DD-MM'))) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortPersonsByName(personsArray = [{birthday: '', name: '', img: ''}]) {

    return personsArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  getBirthdayIndex(personsArray, moment) {
    return personsArray.findIndex(person => moment(person.birthday, 'DD-MM').month() === moment().month());
  }

  arrayToDisplay(tempArray, moment) {
    return tempArray.map(item => {
      return {...item, birthday: moment(item.birthday, 'DD-MM').format('DD MMMM')}
    });
  }

  @tracked('birthdayDispCycle')
  get persons() {
    //impure
    this.set_birthday_pax(this.args.display_type);

    const personsArray = this.birthdayPersonsArray;
    const personsArrayisValid = this.birthdayPersonsValidator(personsArray);
    if (!personsArrayisValid) return;

    const personsNameSorted = this.sortPersonsByName(personsArray);

    const personsNameSortedArrayisValid = this.birthdayPersonsValidator(personsNameSorted);
    if (!personsNameSortedArrayisValid) return;

    const personsBirthdaySorted = this.sortPersonsByBirthday(personsNameSorted);

    const personsBirthdaySortedArrayisValid = this.birthdayPersonsValidator(personsBirthdaySorted);
    if (!personsBirthdaySortedArrayisValid) return;

    const indexOfBirthday = (this.shouldStartFromZero) ? 0 : this.getBirthdayIndex(personsBirthdaySorted, moment);

    const indexOfBirthdayForCycle = indexOfBirthday + this.birthdayDispCycle * this.birthdayPax;

    const endIndex = indexOfBirthdayForCycle + this.birthdayPax;

    const arrayToDisplayTemp = personsArray.slice(indexOfBirthdayForCycle, endIndex);
    const arrayToDisplay = this.arrayToDisplay(arrayToDisplayTemp, moment);

    this.slideUp = 'slide-up';

    const setCycleTimeout = setTimeout(() => {
      if (indexOfBirthdayForCycle + this.birthdayPax + 1 < personsBirthdaySorted.length && this.birthdayPax !== 0) {
        this.birthdayDispCycle = this.birthdayDispCycle + 1;
      } else {
        this.birthdayDispCycle = 0;
        this.shouldStartFromZero = true;
      }
      this.slideUp = '';
      clearTimeout(setCycleTimeout);
    }, 1000 * this.birthdayPax);

    return arrayToDisplay;
  }

  set_birthday_pax(display_type) {
    this.birthdayPax = ((display_type) => {
      if (display_type === 'phone') {
        return 3;
      } else if (display_type === 'monitor') {
        return 6;
      } else {
        return 3;
      }
    })(display_type);
  }

};
