// Find all concerns and details
var concerns = document.getElementsByClassName('js-concern-button');
var details = document.getElementsByClassName('js-concern-details');

// If a hash was passed, go open the right concern
if (window.location.hash) {
  var hash = window.location.hash.split('#')[1];
  var id = 'accordion-' + hash;

  // Select the concern that matches the ID and show the details group that matches the ID
  document.querySelector('[aria-controls="'+ id +'"]').setAttribute('aria-expanded', 'true');
  document.getElementById(id).removeAttribute('hidden');
}

function expandAll() {
  [].forEach.call(details, function(detail) {
    detail.setAttribute('aria-hidden', 'false');
  });

  [].forEach.call(concerns, function(concern) {
    concern.setAttribute('aria-expanded', 'true');
  });
}

function collapseAll() {
  [].forEach.call(details, function(detail) {
    detail.setAttribute('aria-hidden', 'true');
  });

  [].forEach.call(concerns, function(concern) {
    concern.setAttribute('aria-expanded', 'false');
  });
}

document.getElementById('toggle-all').addEventListener('click', function(e) {
  var toggleButton = e.target;
  console.log(e.target);
  if (toggleButton.innerText == 'Expand all') {
    expandAll();
    toggleButton.innerText = 'Collapse all';
  } else {
    collapseAll();
    toggleButton.innerText = 'Expand all';
  }
});
