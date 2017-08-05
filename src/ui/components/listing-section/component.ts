import Component from '@glimmer/component';

export default class ListingSection extends Component {
  get test () {
    console.log(`this.args.list`);
    console.log(this.args.list);
  }
};
