import { HttpExamplePage } from './app.po';

describe('http-example App', () => {
  let page: HttpExamplePage;

  beforeEach(() => {
    page = new HttpExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
