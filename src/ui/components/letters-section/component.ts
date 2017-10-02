import Component, {tracked} from '@glimmer/component';
import moment from 'moment';
const { log } = console;
export default class LetterSection extends Component {
  letterKeysArray = (() => {
    return Object.keys(this.args.letters);
  })();

  @tracked selectedMonth = undefined || moment().format('YYYY-MM');


  @tracked('selectedMonth')
  get availableMonth() {
    const letters = this.args.letters;
    const lastIndex = this.letterKeysArray.length - 1;
    const lastKey = this.letterKeysArray[lastIndex];
    const noLetterFound = (letters[this.selectedMonth] === undefined || letters[this.selectedMonth] === null);
    return (noLetterFound) ?
       this.args.letters[lastKey].date : this.selectedMonth;
  }

  @tracked('selectedMonth')
  get letterContent() {
    const letters = this.args.letters;
    return letters[this.availableMonth] ?
      letters[this.availableMonth].letterContent :
      letters[this.letterKeysArray[this.letterKeysArray.length - 1]].letterContent;
  }

  @tracked('selectedMonth')
  get letterDates() {
    const letterDates = this.letterKeysArray.map((letter) => {
      const letterDate = this.args.letters[letter].date;
      return {
        isSelected: (this.availableMonth === letterDate),
        date: moment(letterDate).format('MMMM YYYY')
      };
    });
    const reversedLetterDates = letterDates.map(x => x).reverse();
   return reversedLetterDates;
  }

  @tracked('selectedMonth')
  get pdfLink() {
    const letter = this.args.letters;
    return letter[this.availableMonth].pdfLink;
  }

  monthSelected(e) {
    this.selectedMonth = moment(e.target.value, 'MMMM YYYY').format('YYYY-MM');
  }

  willDestroy() {
    log(`destroy`);
  }


};
