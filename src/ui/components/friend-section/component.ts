import Component, {tracked} from '@glimmer/component';
const {log} = console;

export default class FriendSection extends Component {
  @tracked friendNumber = 0;
  @tracked timeoutsToClear = [];

  @tracked('friendNumber')
  get shiftLeftBy() {
    log('shift left by');
    const viewWidth = -100 * this.friendNumber;

    const friendNextTimeouts = setTimeout(() => {
      log(this.friendNumber);
      log(`this.friendNumber`);
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
    log(`friends`);
    log(this.args.data);

    const processedData = this.args.data.map((friend) => {
      const {imgFamily, img} = friend;
      return {...friend, imgToShow: imgFamily || img };
    });
    log(`processedData`);
    log(processedData);
    return processedData
  }


};

