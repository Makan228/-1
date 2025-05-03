document.addEventListener('DOMContentLoaded', function() {
    // Функция для обработки загрузки изображений для каждого продукта
    function handleImageUpload(uploadId, imageId) {
      const uploadInput = document.getElementById(uploadId);
      const imageElement = document.getElementById(imageId);

      uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Получаем выбранный файл

        if (file) {
          const reader = new FileReader(); // Создаем FileReader

          reader.onload = function(e) {
            imageElement.src = e.target.result; // Устанавливаем src для элемента img
          };

          reader.readAsDataURL(file); // Читаем файл как Data URL
        }
      });
    }

    // Инициализируем обработку для каждого продукта
    handleImageUpload('sofa-image-upload', 'sofa-image');
    handleImageUpload('chair-image-upload', 'chair-image');
    handleImageUpload('table-image-upload', 'table-image');
    handleImageUpload('bed-image-upload', 'bed-image');
  });
