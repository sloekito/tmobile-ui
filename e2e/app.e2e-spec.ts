import { TmobileUiPage } from './app.po';

describe('tmobile-ui App', () => {
  let page: TmobileUiPage;

  beforeEach(() => {
    page = new TmobileUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
