import Component, {tracked} from '@glimmer/component';

const { log } = console;

export default class GallerySection extends Component {
  galleryImages = [
    'assets/sanctuaryLarge.jpg',
    'assets/scenery.jpg'
  ];


  @tracked imgContainerWidth = null;


  get galleryOne() {
    return [...this.galleryImages, ...this.galleryImages, ...this.galleryImages];
  }

  get galleryTwo() {
    const gallery = this.galleryImages;
    gallery.splice(1, 0, gallery.splice(0, 1)[0]);
    log(gallery);
    return [...gallery, ...gallery, ...gallery];

  }


  listToArray(array ,list, index) {
    const newArray = [...array];
    newArray.push(list[index]);
    const newIndex = index + 1;

    if (newIndex < list.length) {
      return this.listToArray(newArray, list, newIndex);
    } else {
      return newArray;
    }
  }

  totalWidthSummation(value, arrayWithValues, index) {
    setTimeout(() => {
      const newValue = value + arrayWithValues[index].clientWidth;

      if (index < arrayWithValues.length - 2) {
        const newIndex = index + 1;
        this.totalWidthSummation(newValue, arrayWithValues, newIndex);

      } else {
        this.imgContainerWidth = `${newValue}px`;
      }
    }, 0);
  };

  setImageContainerWidth() {
    const imgContainer = this.element.querySelectorAll('.img-container-1');
    const imgContainersArray = this.listToArray([], imgContainer, 0);
    const imgesArray = imgContainersArray.map(imgContainer => this.listToArray([], imgContainer.children, 0));
    const flattenedArray = imgesArray.reduce((a,b) => a.concat(b));

    this.totalWidthSummation(0, flattenedArray, 0);
  }

  didInsertElement() {
    log(`did insert element`);

    this.setImageContainerWidth();
  }

};
