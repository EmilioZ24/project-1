const list = document.querySelector('#event-list ul');

Array.from(list).forEach(function(list) {
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner');

link.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});

// add to  event-list
const addForm = document.getElementById('add-event')

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value
  
  // create elements
  const li = document.createElement('li');
  const eventName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  deleteBtn.textContent = 'delete';
  eventName.textContent = value;

  //add classes
  eventName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to document
  li.appendChild(eventName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide 
 const hideBox = document.querySelector('#hide');
hideBox.addEventListener ('change', function(e){
if(hideBox.checked){
list.style.display = "none";
} else {
list.style.display = "initial"
 }
});
// filter
const searchBar = document.forms['search-event'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const event = list.getElementsByTagName('li');
  Array.from(event).forEach(function(event){
    const title = event.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
      event.style.display = 'block';
    } else {

    }
  })

})