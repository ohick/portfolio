import axios from 'axios';

let catButton = document.getElementById('meow');

//Get the image, create the image element and delete button
const catGenerator = async () => {
  let catPic = document.createElement('img');
  let deleteButton = document.createElement('button');

  axios.defaults.headers.common['x-api-key'] =
    'api_key=a8e12e24-a226-4065-8d69-6a136f781f8a';

  let response = await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: { limit: 1 },
  });

  Object.assign(catPic, {
    src: response.data[0].url,
    alt: 'cat pic',
    className: 'cat-img ',
    id: 'cat-img',
  });

  Object.assign(deleteButton, {
    className: 'delete',
    id: 'delete',
    innerHTML: '<span class="delete--sign">&nbsp;</span>',
  });

  catButton.insertAdjacentElement('beforebegin', catPic);
  document.getElementsByClassName('apibox')[0].classList.add('transparent');
  catPic.addEventListener(
    'load',
    () => {
      catPic.insertAdjacentElement('afterend', deleteButton);
    },
    { once: true }
  );
};

export { catButton, catGenerator };
