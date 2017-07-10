import { NassquaspaPage } from './app.po';

describe('nassquaspa App', () => {
  let page: NassquaspaPage;

  beforeEach(() => {
    page = new NassquaspaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
