import { isValidNumber } from "./validators";
import { isValidCard } from "./validators";
import { typeThisCard } from "./validators";

import mirIcon from "../img/Mir.jpg";
import visaIcon from "../img/Visa.jpg";
import masterIcon from "../img/MasterCard.png";
import unionIcon from "../img/UnionPay.png";
import americanIcon from "../img/AmericanExpress.jpg";
import discoverIcon from "../img/Discover.png";
import jcbIcon from "../img/Jcb.png";
import dinersIntIcon from "../img/Dc-inter.jpg";
import dinersBlancheIcon from "../img/Dc-blanche.jpg";
import masestroIcon from "../img/Maestro.png";
import visaEIcon from "../img/Visa-E.png";
import instaIcon from "../img/Insta.png";

export class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.bindToDOM = this.bindToDOM.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.allTypes = ['Мир', 'VISA', 'MasterCard', 'UnionPay', 'American Express (AMEX)', 'Discover', 'JCB', 'Diners Club - International', 'Diners Club - Carte Blanche', 'Maestro', 'Visa Electron', 'InstaPayment'];
  }

  static get markup() {
    return `
      <form class="card-widget">
        <div class='card-types'></div>
        <div class="control">
         <label for="card-input"></label>
          <input type="text" id="card-input" class="input">
        </div>
        <button class="submit">Проверить</button>
      </form>
    `;
  }

  static get showCards() {
    const allTypesImg = [
      {'name': 'Мир', 'img': mirIcon},
      {'name': 'VISA', 'img': visaIcon},
      {'name': 'MasterCard', 'img': masterIcon},
      {'name': 'UnionPay', 'img': unionIcon},
      {'name': 'American Express (AMEX)', 'img': americanIcon},
      {'name': 'Discover', 'img': discoverIcon},
      {'name': 'JCB', 'img': jcbIcon},
      {'name': 'Diners Club - International', 'img': dinersIntIcon},
      {'name': 'Diners Club - Carte Blanche', 'img': dinersBlancheIcon},
      {'name': 'Maestro', 'img': masestroIcon},
      {'name': 'Visa Electron', 'img': visaEIcon},
      {'name': 'InstaPayment', 'img': instaIcon}
    ]
    let htmlTypes = ''
    allTypesImg.forEach((type) => {
      htmlTypes += `<img class='card-type-img noactive-card noactive' src = ${type['img']} alt = ${type['name']}>`
    })
    return htmlTypes;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.input';
  }

  static get formSelector() {
    return '.card-widget';
  }

  static get cardTypesSelector() {
    return '.card-types';
  }

  static get cardTypeSelector() {
    return '.card-type-img';
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardWidget.markup;
    this.element = this.parentEl.querySelector(CardWidget.formSelector);

    this.submit = this.element.querySelector(CardWidget.submitSelector);
    this.input = this.element.querySelector(CardWidget.inputSelector);
    this.types = this.element.querySelector(CardWidget.cardTypesSelector);

    this.types.innerHTML = CardWidget.showCards;
    this.typesList = Array.from(this.element.querySelectorAll(CardWidget.cardTypeSelector));

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value.replaceAll(' ', '');

    this.typesList.forEach((card) => {
      card.classList.add('noactive');
      card.classList.remove('active');
      card.classList.add('noactive-card');
      card.classList.remove('active-card');
    });

    if(isValidNumber(value)) {
      if(isValidCard(value)) {
        console.log('Валидный')
        this.input.classList.add('valid');
        this.input.classList.remove('invalid');

        const typeCard = typeThisCard(value);
        console.log(this.allTypes)
        console.log(typeCard)
        console.log(this.allTypes.indexOf(typeCard))
        if (typeCard != 'Неизвестно') {
          const typeIndex = this.allTypes.indexOf(typeCard);
    
          this.typesList[typeIndex].classList.add('active');
          this.typesList[typeIndex].classList.remove('noactive');
          this.typesList[typeIndex].classList.add('active-card');
          this.typesList[typeIndex].classList.remove('noactive-card');
        }
      } else {
        console.log('Не валидный')
        this.input.classList.add('invalid');
        this.input.classList.remove('valid');
      }
    } else {
      console.log('Недопустимые символы')
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}