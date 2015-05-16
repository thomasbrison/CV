'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /education when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/education");
  });


  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for contact/);
    });

  });


  describe('education', function() {

    beforeEach(function() {
      browser.get('index.html#/education');
    });


    it('should render education when user navigates to /education', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for education/);
    });

  });


  describe('languages', function() {

    beforeEach(function() {
      browser.get('index.html#/languages');
    });


    it('should render languages when user navigates to /languages', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for languages/);
    });

  });


  describe('miscellaneous', function() {

    beforeEach(function() {
      browser.get('index.html#/miscellaneous');
    });


    it('should render miscellaneous when user navigates to /miscellaneous', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for miscellaneous/);
    });

  });


  describe('special-skills', function() {

    beforeEach(function() {
      browser.get('index.html#/special-skills');
    });


    it('should render special skills when user navigates to /special-skills', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for special skills/);
    });

  });


  describe('work-experience', function() {

    beforeEach(function() {
      browser.get('index.html#/work-experience');
    });


    it('should render work experience when user navigates to /work-experience', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for work experience/);
    });

  });
});
