document.addEventListener('input', event => {
  var target = event.target;
  var value = target.value;
  var name = target.name;

  document.documentElement.style.setProperty('--' + name, value);
});
