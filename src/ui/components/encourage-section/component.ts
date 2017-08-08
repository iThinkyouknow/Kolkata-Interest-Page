import Component, {tracked} from '@glimmer/component';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function dasherize(string = '') {
  if (typeof string !== 'string') return;
  const dasherizedString = string.replace(/([a-z]+)([A-Z])/g, '$1-$2').toLowerCase();
  return dasherizedString;
}

const { log, clear } = console;

export default class EncourageSection extends Component {
  @tracked invalidName = ''; // if true 'invalid-name'
  @tracked invalidEmail = ''; // if true 'invalid-email'
  @tracked invalidContact = ''; // if true 'invalid-contact'
  @tracked noEmailOrContact = ''; // if true 'no-email-or-contact'
  @tracked nameInput = '';
  @tracked emailInput = '';
  @tracked contactInput = '';

  //@tracked x = 1;


  @tracked inputTimeout = null;

  customizedDebouncer(fn, delayTime, e) {
    clearTimeout(this.inputTimeout);

    const timeout = setTimeout(() => {
      fn.call(this, e);
      clearTimeout(timeout);
    }, delayTime);

    this.inputTimeout = timeout;
  }

  validator(property = '', regex) {
    return (value = '') => {
      if (typeof value !== 'string') return;
      const input = value || '';
      if (!input) return false;

      return !input.match(regex);

    }
  }

  nameValidator(e) {
    const nameRegex = /^[a-z]+(\s[a-z]+)*(\s?(?!\s)\@?\s?[a-z]+)(\s[a-z]+)*\s*$/i;
    const property = 'invalidName';
    const invalid = this.validator(property, nameRegex)(e.target.value);
    this[property] = invalid ? dasherize(property) : '';
    this.nameInput = e.target.value || '';
  }

  emailValidator(e) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const property = 'invalidEmail';
    const invalid = this.validator(property, emailRegex)(e.target.value);
    this[property] = invalid ? dasherize(property) : '';
    this.emailInput = e.target.value || '';
  }

  contactValidator(e) {
    const contactRegex = /^(\+65)?(\s|\-)?\d{4}(\s|\-)?\d{4}$/ig; //sg only
    const property = 'invalidContact';
    const invalid = this.validator(property, contactRegex)(e.target.value);
    this[property] = invalid ? dasherize(property) : '';
    this.contactInput = e.target.value || '';
  }


  setNoEmailOrContact() {
    this.noEmailOrContact = (!this.emailInput && !this.contactInput) ? dasherize(`noEmailOrContact`) : '';
  }


  @tracked('invalidName', 'invalidEmail', 'invalidContact', 'noEmailOrContact', 'nameInput', 'emailInput', 'contactInput')
  get invalidForm() {
     if (this.invalidName || this.invalidEmail || this.invalidContact || this.noEmailOrContact || !this.nameInput || (!this.emailInput && !this.contactInput)) {
       return true;
     } else {
       return false
     }
  }


};
