
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'AMV News Player';
    config.map([
      { route: ['', 'player'], name: 'player',      moduleId: 'presentations/player',      nav: true, title: 'Player' }
    ]);

    this.router = router;
  }
}
