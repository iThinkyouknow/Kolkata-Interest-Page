import Component, {tracked} from '@glimmer/component';

export default class MenuItem extends Component {
  @tracked isLink = false;

  get scrollToID() {
    let title = this.args.title;
    if !title return;

    let dasherizedTitle;
    console.log(title);

    if (title.search(/^(cerc)/i) !== -1) {
      dasherizedTitle = 'http://www.cerc.org.sg';
      this.isLink = true;
      console.log(this.isLink);
      console.log(title.search(/^(cerc)/i));

    } else {
      let trimmedTitle = title.trim().toLowerCase();
      let theLessTitle = trimmedTitle.replace(/^(the\s)/ig, '');
      dasherizedTitle = theLessTitle.replace(/\s/g, '-');
      dasherizedTitle = `#${dasherizedTitle}`;

    }

    return dasherizedTitle;
  }



  scrollTo(e) {
    e.preventDefault();
    let target = e.target.hash || '';
    let document = this.element.ownerDocument;
    target = target.replace(/^#/, '');
    let targetElement = document.getElementById(target) || this.element;
    let targetElementTop = targetElement.getBoundingClientRect().top;
    let documentTop = document.documentElement.getBoundingClientRect().top;

    let targetElemAbsPosition = targetElementTop - documentTop;
    let currentPosition = -documentTop;

    let time = 500;
    let refreshRate = 5; // refresh once every 5ms
    let distance = Math.abs(targetElemAbsPosition - currentPosition);
    let distancePerUnitTime = (distance / (time / refreshRate);
    let cushionPos = 2;


    let timeout = setInterval(() => {
      if (currentPosition < (targetElemAbsPosition - cushionPos)) {
        currentPosition += distancePerUnitTime;

      } else if (currentPosition > targetElemAbsPosition + cushionPos) {
        currentPosition -= distancePerUnitTime;

      } else {
        clearInterval(timeout);
        console.log(`interval cleared`);
        console.log(distancePerUnitTime);
        console.log(currentPosition);
        console.log(targetElemAbsPosition);

      }

      window.scroll(0, currentPosition);
    }, refreshRate);
  }
};
