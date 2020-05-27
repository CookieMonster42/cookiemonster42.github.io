const menuButton1 = document.querySelector('.ui.two.item.menu>.item');
const content1 = document.querySelector('.content');

let getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  let siblings = [];
  let sibling = elem.parentNode.firstElementChild;
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

const siblingsButton = getSiblings(menuButton1);
const siblingsContent = getSiblings(content1);

const handleClick = (event) => {
  const targetVal = event.target.classList[0];
  siblingsButton.map(sibling => {
    sibling.classList.remove('active');
    siblingsContent.map(content => {
      if(content.classList.contains('notShow') && content.classList.contains(targetVal)) {
        content.classList.toggle('notShow')
        content.style.display = 'block';
      } else if(!content.classList.contains('notShow') && !content.classList.contains(targetVal)) {
        content.style.display = 'none';
        content.classList.toggle('notShow')
      }
    });
  });
    event.target.classList.toggle('active');
}
