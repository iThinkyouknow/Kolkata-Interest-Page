import Component, {tracked} from "@glimmer/component";


export default class KolkataInterestPage extends Component {
  @tracked gray = '';

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
  }]


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
