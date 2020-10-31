import { Header } from '../Utils/Header/Header';
import { Sidebar } from './Sidebar';

const selectors = {
  card: '[class*="decor"]',
  card_title: '[class*="card-title"]',
  card_desc: '[class*="card_desc"]',
  card_tel: '[class*="card_tel"]',
  card_address: '[class*="card_address"]',
};
export class Feed {
  feedHeader = new Header();
  feedSidebar = new Sidebar();

  getCard(title: string) {
    return cy.get(selectors.card).contains(title).parentsUntil(selectors.card);
  }
  validateCardPreview(title: string, cardDesc: string, cardTel: string, cardAddress: string) {
    this.getCard(title).find(selectors.card_desc).should('include.text', cardDesc);
    this.getCard(title).find(selectors.card_tel).should('include.text', cardTel);
    this.getCard(title).find(selectors.card_address).should('include.text', cardAddress);
  }
}
