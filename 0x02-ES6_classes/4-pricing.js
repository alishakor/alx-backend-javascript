import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amountValue) {
    if (typeof amountValue !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amountValue;
  }

  get currency() {
    return this._currency;
  }

  set currency(currencyValue) {
    if (!(currencyValue instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = currencyValue;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
