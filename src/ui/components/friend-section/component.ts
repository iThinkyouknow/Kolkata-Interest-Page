import Component, {tracked} from '@glimmer/component';

export default class FriendSection extends Component {
  @tracked friendNumber = 0;
  @tracked timeoutsToClear = [];

  @tracked('friendNumber')
  get shiftLeftBy() {
    const viewWidth = -100 * this.friendNumber;

    const friendNextTimeouts = setTimeout(() => {
      const nextFriendNumber = this.friendNumber + 1;

      if (nextFriendNumber < this.friends.length) {
        this.friendNumber++;
      } else {
        this.friendNumber = 0;
      }

    } , 10000);

    const timeouts = [...this.timeoutsToClear, friendNextTimeouts];
    this.timeoutsToClear = timeouts;

    return viewWidth;
  }

  friends = [{
    name: "Sudip van Dyker",
    imgURL: "assets/profile-circle-4.jpg",
    description: `Sudip Lorem ipsum dolor. Sit amet vitae sed mauris et.
  Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Vitae odio eu dictumst sapien libero ornare in porttitor
  lorem risus neque consequat vitae aenean taciti non pede vitae erat libero ullamcorper arcu eu et mi etiam.
  Eros mollis sed. Sem elit consequat phasellus lacinia nam adipiscing sed porttitor. Pede justo et sed nullam in.
  Aliquet varius ut lorem neque mollis.`
  }, {
    name: "Ranjit Supramalan",
    imgURL: "assets/profile-circle-5.png",
    description: `Ranjit Lorem ipsum dolor. Sit amet vitae sed mauris et.
  Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Ranjit Lorem ipsum dolor. Sit amet vitae sed mauris et.
  Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus. Ranjit Lorem ipsum dolor. Sit amet vitae sed mauris et.
  Sed erat libero ullamcorper quis vestibulum vel optio in nibh semper blandit.
  Aenean elementum purus nulla libero nibh. Vitae bibendum enim sollicitudin dicta quis.
  Ipsum duis officia. Diam facere id. Dis augue vivamus.`
  }];
};
