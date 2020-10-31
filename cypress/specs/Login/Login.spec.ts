import { Login } from '../../page-objects/Login/Login';
import { Feed } from '../../page-objects/Feed/Feed';

const inputs = {
  firstHeader: 'Hello Admin,',
  secondHeader: 'Here are a few cocktails for you.',
  searchText: 'Bohemian Lager recipe',
  searchTextEmptyState: 'asdasdasd',
  emptyStateText: 'There are no cocktails!',
  filterTitle: 'Filters',
  filterContent: 'Favorite',
  cardTitle: 'Rhubarb gin',
  cardDesc: 'STEP 1 Wash the rhubarb, trim the stalks ',
  cardTel: '0527051499',
  cardAddress: 'Nahalat Yitzhak 14 Tel Aviv',
};
context('Network Requests', () => {
  const feed = new Feed();
  beforeEach(() => {
    const login = new Login();
    login.login();
  });

  it('validate header', () => {
    feed.feedHeader.validateHeader(inputs.firstHeader, inputs.secondHeader);
    feed.feedHeader.search(inputs.searchTextEmptyState, inputs.emptyStateText);
    feed.feedHeader.search(inputs.searchText);
  });

  it('validate filter', () => {
    feed.feedSidebar.validateFilters(inputs.filterTitle, inputs.filterContent);
    feed.feedSidebar.filter(inputs.filterContent);
  });

  it('validate card preview', () => {
    feed.validateCardPreview(inputs.cardTitle, inputs.cardDesc, inputs.cardTel, inputs.cardAddress);
  });
});
