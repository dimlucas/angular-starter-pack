import { AngularStarterPackPage } from './app.po';

describe('angular-starter-pack App', () => {
  let page: AngularStarterPackPage;

  beforeEach(() => {
    page = new AngularStarterPackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
