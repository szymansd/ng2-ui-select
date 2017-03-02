import { Ng2UiSelectPage } from './app.po';

describe('ng2-ui-select App', () => {
  let page: Ng2UiSelectPage;

  beforeEach(() => {
    page = new Ng2UiSelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
