import { WsPage } from './app.po';

describe('ws App', () => {
  let page: WsPage;

  beforeEach(() => {
    page = new WsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
