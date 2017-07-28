import Component, {tracked} from '@glimmer/component';
const { log } = console;
export default class LetterSection extends Component {

  @tracked selectedMonth = null;

  letter() {
    return this.args.letters.find(letter => letter.date === (this.selectedMonth)) || this.args.letters[0];
  }

  @tracked('selectedMonth')
  get letterToDisplay() {
    const letter = this.letter();
    log(letter);
    return letter.letterContent;
  }

  @tracked('selectedMonth')
  get pdfLink() {
    const letter = this.letter();
    return letter.pdfLink;
  }

  monthSelected(e) {
    this.selectedMonth = e.target.value;
  }

  willDestroy() {
    log(`destroy`);
  }


};
