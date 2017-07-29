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


let historySectionData = {
  img: `assets/sanctuaryLARGE.jpg`,
  text: `Lorem ipsum dolor. Sit amet vitae sed mauris et. Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien
  libero ornare in porttitor lorem risus neque consequat vitae aenean taciti
  non pede vitae erat libero ullamcorper arcu eu et mi etiam. Eros mollis sed.
  Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis. Consequat auctor lorem nisl ullamcorper a morbi minus at.
  Vitae gravida eleifend. Pharetra metus neque omnis erat lobortis. Libero aliquam mauris quam sollicitudin ante.
  Fugiat in nostrum nunc integer et. Lorem ipsum dolor. Sit amet vitae sed mauris et. Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien
  libero ornare in porttitor lorem risus neque consequat vitae aenean taciti
  non pede vitae erat libero ullamcorper arcu eu et mi etiam. Eros mollis sed.
  Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis. Consequat auctor lorem nisl ullamcorper a morbi minus at.
  Vitae gravida eleifend. Pharetra metus neque omnis erat lobortis. Libero aliquam mauris quam sollicitudin ante.
  Fugiat in nostrum nunc integer et.`
};

let fellowshipData = [
  'Lorem Ipsum',
  'Lorem Banananananana One',
  'Lorem Banana Two',
  'Lorem  3',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Lorem 6',
  'Lorem Ipsum',
  'Lorem Ipsum',
];

let personsData = {
  'Sudip Van Dyker': {
    birthday: '24-06',
    name: 'Sudip Van Dyker',
    img: 'assets/profile-circle-2.png',
    text: ``
  },
  'Ranjit Supramalam': {
    birthday: '24-06',
    name: 'Ranjit Supramalam',
    img: 'assets/profile-circle-5.png',
    text: ``
  },
  'Monisha Puraj': {
    birthday: '15-06',
    name: 'Monisha Puraj',
    img: 'assets/profile-circle-6.png',
    text: ``
  },
  'Johnny Manakam': {
    birthday: '20-06',
    name: 'Johnny Manakam',
    img: 'assets/profile-circle-1.png',
    text: ``
  },
  'Manjan Pillai': {
    birthday: '24-02',
    name: 'Manjan Pillai',
    img: 'assets/profile-circle-3.png',
    text: ``
  },
  'Bharath Singh': {
    birthday: '24-03',
    name: 'Bharath Singh',
    img: 'assets/profile-circle-4.jpg',
    text: ``
  },
  'Priyanka Puja': {
    birthday: '24-09',
    name: 'Priyanka Puja',
    img: 'assets/profile-circle-7.jpeg',
    text: ``
  },
  'Kala Monashurat': {
    birthday: '24-12',
    name: 'Kala Monashurat',
    img: 'assets/profile-circle-8.jpeg',
    text: ``
  }
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
  };


  //////////data end

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

/********************************************
 *
 *
 *
 ********************************************/

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

  historySectionData = historySectionData;

  get personsDataForAboutSection() {
    const personsKeys = Object.keys(personsData);
    const personsArray = personsKeys.map((person) => personsData[person].img);
    return personsArray;
  }

  fellowshipData = fellowshipData;

  theirLetters = theirLettersData;
  ourLetters = ourLettersData;

  prayerRequestsArray = getPrayerRequestsData(maxNumber())(prayerRequestsData);

  updatesArray = getUpdatesData(maxNumber())(updatesData);
}
