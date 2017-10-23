import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

export class PageObject_Welcome {



  openAlertDialog() {
    return browser.wait(() => {
      return browser.switchTo().alert().then(
        // use alert.accept instead of alert.dismiss which results in a browser crash
        function(alert) { alert.accept(); return true; },
        function() { return false; }
      );
    });
  }
}
