import Component, {tracked} from "@glimmer/component";
import moment from 'moment'
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


let ourLettersData = {
  '2017-03': {
    date: '2017-03',
    letterContent: `March Our Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
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
  },
  '2017-04': {
    date: '2017-04',
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
    pdfLink: 'April'
  },
  '2017-05': {
    date: '2017-05',
    letterContent: `May Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
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
    pdfLink: 'May'
  },
  '2017-12': {
    date: '2017-12',
    letterContent: `December Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
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
    pdfLink: 'December'
  }
};


let theirLettersData = {
  '2017-03': {
    date: '2017-03',
    letterContent: `March their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'March'
  },
  '2017-04': {
    date: '2017-04',
    letterContent: `April their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'April'
  },
  '2017-05': {
    date: '2017-05',
    letterContent: `May their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'May'
  },
  '2017-12': {
    date: '2017-12',
    letterContent: `December their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
      arch their Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
      sem Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem`,
    pdfLink: 'December'
  }
};


let prayerRequestsData = {
  constant: [
    {
      content: 'Prayer Requests Constant 1',
      valid: true,
      date: '2017-04-09'
    }, {
      content: 'Prayer Requests Constant 2',
      valid: false,
      date: '2017-06-09'
    }, {
      content: 'Prayer Requests Constant 3',
      valid: true,
      date: '2017-07-09'
    },
    {
      content: 'Prayer Requests Constant 4',
      valid: true,
      date: '2017-07-21'
    }
  ],
  adHoc: [
    {
      content: 'Prayer Requests ad-hoc 1',
      valid: true,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 2',
      valid: true,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 3 invalid',
      valid: false,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 4',
      valid: true,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 5',
      valid: true,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 6 invalid',
      valid: false,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 7',
      valid: true,
      date: '2017-07-21'
    }, {
      content: 'Prayer Requests ad-hoc 8',
      valid: true,
      date: '2017-07-21'
    }
  ]
  //end of array
};


let updatesData = [
  {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }, {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }, {
    content: 'Updates 2 -invalid',
    valid: false,
    date: '2017-04-09'
  }, {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }, {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }, {
    content: 'Updates 5 -invalid',
    valid: false,
    date: '2017-04-09'
  }, {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }, {
    content: 'Updates 1',
    valid: true,
    date: '2017-04-09'
  }
];

const singlePropertyCallback = (property) => (x) => {
  if (x[property] !== undefined && x[property] !== null) {
    return x[property];
  };
};

const validPropCB = singlePropertyCallback('valid');
const contentPropCB = singlePropertyCallback('content');
const maxNumber = () => 8;

const filterSliceMap = (array) => ([startIndex, endIndex]) => {
  return array.filter(validPropCB).slice(startIndex, endIndex).map(contentPropCB);
};

const getPrayerRequestsData = (maxNum) => (prayerRequests) => {
  const maxNumber = maxNum; //need to change based on screen size
  const constantArray = filterSliceMap(prayerRequests.constant)([-maxNumber]);
  const adHocSliceStartIndex = (maxNumber - constantArray.length) * -1;
  const adHocArray = filterSliceMap(prayerRequests.adHoc)([adHocSliceStartIndex]);
  return [...constantArray, ...adHocArray];
};

const getUpdatesData = (maxNum) => (updates) => {
  const maxNumber = maxNum;
  return filterSliceMap(updates)([-maxNumber]);
};


export default class KolkataInterestPage extends Component {
  @tracked gray = '';

  mainHeader = 'The Mission Field of Kolkata';

  get sections() {
    const sectionsObj = [treatedMenuItems, idMapGenerator].reduce(compose, sectionItems);
    log(`something special`);

    return sectionsObj;
  }


  turnGray(bool) {
    this.gray = bool ? 'gray' : '';
  }

  actionHandler(action, params) {
    this[action](params);
  }

  theirLetters = theirLettersData;
  ourLetters = ourLettersData;


  prayerRequestsArray = getPrayerRequestsData(maxNumber())(prayerRequestsData);

  updatesArray = getUpdatesData(maxNumber())(updatesData);
}
