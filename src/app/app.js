import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import factory from './factory';
import MyModule from './components/module';
import Alertifier from './components/alertifier.js';
import lightbox from './components/lightbox.js';

window.app = {
    start(config) {
        init(MyModule, document.querySelector('.main h1'));
        // this.alertifiers = factory(Alertifier, document.querySelectorAll('.btn'));
        // app.factory(Gallery, document.getElementsByClassName('js-gallery'), config);
        // factory(lightbox, document.querySelectorAll('.lightbox-item'));
        init(lightbox, document.getElementById('lightbox'));
    }
};

