import {HomeController as controller} from './home.controller';
import template from './home.html';
import './home.css';

export const homeDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
