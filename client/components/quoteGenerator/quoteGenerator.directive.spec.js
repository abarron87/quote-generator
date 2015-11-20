'use strict';

describe('Directive: quoteGenerator', function () {

  // load the directive's module and view
  beforeEach(module('quoteGeneratorApp'));
  beforeEach(module('components/quoteGenerator/quoteGenerator.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<quote-generator></quote-generator>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the quoteGenerator directive');
  }));
});
