var resize = function() {
  var container = document.querySelector('#container');
  var items = document.querySelectorAll('#container > *');
  var css = document.querySelector('#js-css');

  var itemWidth = 100;
  var containerWidth = container.width();

  var perRowCount = Math.floor(containerWidth / itemWidth);
  var rowCount = Math.ceil(items.length / perRowCount);
  var newPerRowCount = Math.floor(items.length / rowCount);

  var newItemWidth = (containerWidth / newPerRowCount) - (parseInt($(items[0]).css('margin')) * 2);

  css.innerHTML = '.item { width: ' + newItemWidth + 'px; }';
};
window.addEventListener('resize', resize);
window.addEventListener('load', resize);