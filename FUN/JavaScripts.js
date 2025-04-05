document.addEventListener('DOMContentLoaded', function() {
  const productButtons = document.querySelectorAll('.product-item .button');

  productButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Детали о товаре будут показаны здесь!');
    });
  });
});