function checkIfDeleteButton(event) {
  if (event.target.classList.contains('delete--sign')) {
    document.getElementById('cat-img').remove();
    document.getElementById('delete').remove();
    document
      .getElementsByClassName('apibox')[0]
      .classList.remove('transparent');
  }
}

export default checkIfDeleteButton;
