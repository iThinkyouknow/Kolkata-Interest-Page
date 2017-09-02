import Component, {tracked} from '@glimmer/component';

const {log} = console;

const odd_even_index_fn = (is_odd) => (n) => {
  const num_to_add = is_odd ? 1 : 2;
  return 2 * n + num_to_add;
};

const get_odd_even_array = (is_odd) => (array) => {
  return array
    .filter((item, index) => is_odd ? !(index % 2) : (index % 2))
    .map((item, index) => `${odd_even_index_fn(is_odd)(index)}. ${item}`);
};

export default class ListingSection extends Component {
  @tracked display_type = 'phone';

  @tracked('display_type')
  get is_monitor() {
    return this.display_type === 'monitor';
  }


  @tracked('is_monitor')
  get lists_for_monitor() {
    const first_list = get_odd_even_array(true)(this.args.list);
    const second_list = get_odd_even_array(false)(this.args.list);

    return [first_list, second_list];
  }

  set_display_type = (disp_type) => {
      this.display_type = disp_type;
  }

  didInsertElement() {
    setTimeout(() => {
      this.set_display_type(this.args.display_type);
    }, 500);

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.set_display_type(this.args.display_type);
      }, 500)
    });
  }

  didDestroyElement() {
    window.removeEventListener('resize', () => {
      setTimeout(() => {
        this.set_display_type(this.args.display_type);
      }, 500)
    });
  }
};
