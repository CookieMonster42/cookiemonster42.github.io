const menuButton1 = document.querySelector('.ui.three.item.menu>.item');

var getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstElementChild;
  // Loop through each sibling and push to the array
  siblings.push(sibling);
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }
  return siblings;
};

const siblings = getSiblings(menuButton1);

siblings.map(sibling => {
  console.log(sibling.innerText);
});

const handleClick(event) {
  event.preventDefault();
  console.log(event.target.value)
}
