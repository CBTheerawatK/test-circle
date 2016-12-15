import { TestCirclePage } from './app.po';

describe('test-circle App', function() {
  let page: TestCirclePage;

  beforeEach(() => {
    page = new TestCirclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
