import Component, {tracked} from '@glimmer/component';
const {log} = console;

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

  get friends() {
    const processedData = this.args.data.map((friend) => {
      const {imgFamily, img} = friend;
      return {...friend, imgToShow: imgFamily || img };
    });

    return processedData
  }


};

