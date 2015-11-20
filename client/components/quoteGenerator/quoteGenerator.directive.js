'use strict';

angular.module('quoteGeneratorApp')
    .directive('quoteGenerator', function () {
        return {
            templateUrl: 'components/quoteGenerator/quoteGenerator.html',
            restrict: 'C',
            scope: {},
            link: function (scope, element, attrs) {
                scope.background = '#2CC4F3';
                scope.textColor = '#fff';
                scope.logoWidth = '55px';
                scope.quote = '<p>Se coucher avec les poules.</p><p>To go to bed early.</p><small>Literally: To sleep among the hens.</small>';
                scope.result = '';

                scope.save = function(){
                    html2canvas(element.find('.quote-frame')[0], {
                        logging: true,
                        //height: 300,
                        //width: 500,
                        onrendered: function(canvas){
                            $scope.$apply(function(){
                                scope.result = canvas.toDataURL();
                                console.log(scope.result);
                            });
                        }
                    })
                };

                scope.$watch('result', function(newValue, oldValue){
                    console.log("new", newValue);
                    console.log("old", oldValue);
                })
            }
        };
    });
