import Component, {tracked} from '@glimmer/component';

const {log} = console;

export default class MenuItem extends Component {
  @tracked isLink = false;

  get scrollToID() {
    const {id, link} = this.args.data;
    if (!link) return `#${id}`;

    if (typeof link === 'string') {
      if (link.length > 0) {
        return link;
      } else {
      return `#${id}`;
      }
    } else {
      return `#${id}`;
    }
  }





  scrollTo(e) {
    e.preventDefault();
    if (typeof e.target.hash === 'string' && e.target.hash.length > 0) {
      this.args.actionUp(`scroll_to_by_id`, e.target.hash.replace(/#/, ''));
    } else {
      window.open(e.target.href, '_blank');
    }
  }
};
