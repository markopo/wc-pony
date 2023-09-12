import PonyComponent from './pony.ts';

customElements.define('ns-pony', PonyComponent);

if(document.getElementById('app')) {
  document.getElementById('app').innerHTML = '<ns-pony></ns-pony>';
}
