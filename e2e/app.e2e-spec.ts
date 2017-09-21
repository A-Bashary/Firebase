import { Angulartest2Page } from './app.po';

describe('angulartest2 App', function() {
  let page: Angulartest2Page;

  beforeEach(() => {
    page = new Angulartest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
