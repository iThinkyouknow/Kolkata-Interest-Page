import Component, {tracked} from "@glimmer/component";
const {log, clear} = console;

const missionary = `Rev Emmanuel Singh`;

const sectionItems = [
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
  'Birthdays',
  'Encourage Program',
  'Kolkata'
];

const dasherizedTitle = (title) => {
  const trimmedTitle = title.trim().toLowerCase();
  const theLessTitle = trimmedTitle.replace(/^(the\s)/ig, '');
  const dashedTitle = theLessTitle.replace(/\s/g, '-');
  return dashedTitle;
};

const treatedMenuItems = (array) => {
  return array.map((section, index) => {
    const lowerCaseSection = (typeof section === 'string') ? section.toLowerCase() : section;

    switch(lowerCaseSection) {
      case `cerc`:
        return {
          id: lowerCaseSection,
          link: `https://www.cerc.org.sg`,
          class: ``,
          title: section,
          shortTitle: section,
        };
        break;
      case `main`:
        return {
          id: lowerCaseSection,
          link: ``,
          class: `header-section`,
          title: `The Fellowship of Kolkata`,
          shortTitle: section,
        };
        break;
      case `the missionary`:
        return {
          id: dasherizedTitle(section),
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: missionary,
          shortTitle: section,
        };
        break;
      default:
        return {
          id: dasherizedTitle(section),
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: section,
          shortTitle: section,
        };
    }
  });
};


const idMapGenerator = (array) => {
  if (!Array.isArray(array)) return {array: array};
  return array.reduce((acc, item, index) => {
    if (item.id === undefined || item.id === null) return Object.assign(acc, {index: item});
    return Object.assign(acc, {[item.id]: item});
  }, {});
};

const compose = (acc, fn) => {
  if (typeof fn !== 'function') return acc;
  return fn(acc);
};




export default class KolkataInterestPage extends Component {
  @tracked gray = '';

  mainHeader = 'The Mission Field of Kolkata';

  get sections() {
    const sectionsObj = [treatedMenuItems, idMapGenerator].reduce(compose, sectionItems);
    log(`sectionsObj`);
    log(sectionsObj);

    return sectionsObj;
  }


  turnGray(bool) {
    this.gray = bool ? 'gray' : '';
  }

  actionHandler(action, params) {
    this[action](params);
  }

  theirLetters = [{
    date: 'March 2017',
    letterContent: `March Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'March'
  }, {
    date: 'April 2017',
    letterContent: `April Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Apr'
  }, {
    date: 'June 2017',
    letterContent: `June Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Jun'
  }, {
    date: 'July 2017',
    letterContent: `July Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Jul'
  }];

  ourLetters = [{
    date: 'March 2017',
    letterContent: `March Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'March'
  }, {
    date: 'April 2017',
    letterContent: `April Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Apr'
  }, {
    date: 'June 2017',
    letterContent: `June Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Jun'
  }, {
    date: 'July 2017',
    letterContent: `July Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
    arch Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. 
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'Jul'
  }];


  prayerRequestsArray = [
    'Prayer Request 1',
    'Prayer Request 2',
    'Prayer Request 3',
    'Prayer Request 4',
    'Prayer Request 5',
    'Prayer Request 6',
    'Prayer Request 7',
    'Prayer Request 8',
    'Prayer Request 9',
  ];

  updatesArray = [
    'Update 1',
    'Update 2',
    'Update 3',
    'Update 4',
    'Update 5',
    'Update 6',
    'Update 7',
    'Update 8',
  ];
}
