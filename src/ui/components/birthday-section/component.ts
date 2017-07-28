import Component, {tracked} from '@glimmer/component';
import moment from 'moment';

const {log, clear} = console;
export default class BirthdaySection extends Component {

  month = moment().format(`MMMM`);

  @tracked birthdayPax = 3;
  @tracked birthdayDispCycle = 0;
  @tracked slideUp = '';
  @tracked shouldStartFromZero = false;

  @tracked('birthdayPax')
  get maxCycle() {
    log(`data`);
    log(data);
    return Math.ceil(this.birthdayPersonsArray.length / this.birthdayPax);
  }

  birthdayPersonsArray = [{
    birthday: '24-06',
    name: 'Sudip Van Dyker',
    img: 'assets/profile-circle-2.png'
  }, {
    birthday: '24-06',
    name: 'Ranjit Supramalam',
    img: 'assets/profile-circle-5.png'
  }, {
    birthday: '15-06',
    name: 'Monisha Puraj',
    img: 'assets/profile-circle-6.png'
  }, {
    birthday: '20-06',
    name: 'Johnny Manakam',
    img: 'assets/profile-circle-1.png'
  }, {
    birthday: '24-02',
    name: 'Manjan Pillai',
    img: 'assets/profile-circle-3.png'
  }, {
    birthday: '24-03',
    name: 'Bharath Singh',
    img: 'assets/profile-circle-4.jpg'
  }, {
    birthday: '24-09',
    name: 'Priyanka Puja',
    img: 'assets/profile-circle-7.jpeg'
  }, {
    birthday: '24-12',
    name: 'Kala Monashurat',
    img: 'assets/profile-circle-8.jpeg'
  }];

  birthdayPersonsValidator(birthdayPersonsArray) {
    return birthdayPersonsArray.reduce((a, person) => {
      const personKeysArray = Object.keys(person);
      const birthdayValid = personKeysArray[0] === 'birthday';
      const nameValid = personKeysArray[1] === 'name';
      const imgValid = personKeysArray[2] === 'img';

      if (!(birthdayValid && nameValid && imgValid)) {
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

  @tracked('birthdayDispCycle', 'birthdayPax')
  get persons() {
    //impure
    const personsArray = this.birthdayPersonsArray;
    const personsArrayisValid = this.birthdayPersonsValidator(personsArray);
    if (!personsArrayisValid) return;

    const personsNameSorted = this.sortPersonsByName(personsArray);

    const personsNameSortedArrayisValid = this.birthdayPersonsValidator(personsNameSorted);
    if (!personsNameSortedArrayisValid) return;

    const personsBirthdaySorted = this.sortPersonsByBirthday(personsNameSorted);

    const personsBirthdaySortedArrayisValid = this.birthdayPersonsValidator(personsBirthdaySorted);
    if (!personsBirthdaySortedArrayisValid) return;

    log(personsBirthdaySorted);
    const indexOfBirthday = (this.shouldStartFromZero) ? 0 : this.getBirthdayIndex(personsBirthdaySorted, moment);
    log(`indexOfBirthday: ${indexOfBirthday}`);

    const indexOfBirthdayForCycle = indexOfBirthday + this.birthdayDispCycle * this.birthdayPax;
    log(indexOfBirthdayForCycle);

    const endIndex = indexOfBirthdayForCycle + this.birthdayPax;

    const arrayToDisplayTemp = personsArray.slice(indexOfBirthdayForCycle, endIndex);
    const arrayToDisplay = this.arrayToDisplay(arrayToDisplayTemp, moment);

    this.slideUp = 'slide-up';

    const setCycleTimeout = setTimeout(() => {
      if (indexOfBirthdayForCycle + this.birthdayPax + 1 < personsBirthdaySorted.length) {
        this.birthdayDispCycle = this.birthdayDispCycle + 1;
      } else {
        this.birthdayDispCycle = 0;
        this.shouldStartFromZero = true;
      }
      this.slideUp = '';
      clearTimeout(setCycleTimeout);
    }, 3000);

    return arrayToDisplay;
  }

  didInsertElement() {
    log(`did insert element`);
  }

};
