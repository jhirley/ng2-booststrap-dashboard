import { Ng2BootstrapDashboardPage } from './app.po';

describe('ng2-bootstrap-dashboard App', () => {
  let page: Ng2BootstrapDashboardPage;

  beforeEach(() => {
    page = new Ng2BootstrapDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
