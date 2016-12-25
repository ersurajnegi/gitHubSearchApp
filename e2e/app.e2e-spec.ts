import { GithubSearchappPage } from './app.po';

describe('github-searchapp App', function() {
  let page: GithubSearchappPage;

  beforeEach(() => {
    page = new GithubSearchappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
