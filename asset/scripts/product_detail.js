document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;

  function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("demo");

      if (slides.length === 0) return;

      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      if (dots.length > 0) {
          dots[slideIndex - 1].className += " active";
      }
  }

  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showTabContent(event, tabId) {
      event.preventDefault();

      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => content.classList.add('hidden'));

      const tabs = document.querySelectorAll('ul li a');
      tabs.forEach(tab => tab.classList.remove('active', 'text-black', 'border-black'));
      tabs.forEach(tab => tab.classList.add('hover:text-gray-600', 'hover:border-gray-300'));

      document.getElementById(tabId).classList.remove('hidden');
      event.target.classList.add('active', 'text-black', 'border-black');
      event.target.classList.remove('hover:text-gray-600', 'hover:border-gray-300');
  }

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
      const products = JSON.parse(localStorage.getItem('products'));
      const product = products.find(p => p.id === parseInt(productId));

      if (product) {
          document.getElementById('productTitle').textContent = product.title;
          document.getElementById('productBrand').textContent = product.brand;
          document.getElementById('productPrice').textContent = product.price;
          document.getElementById('productDesc').textContent = product.desc;
          document.getElementById('productImage').src = product.image;

          const thumbContainer = document.querySelector('.thumb');
          const slideContainer = document.querySelector('.mySlides').parentNode;

          thumbContainer.innerHTML = '';
          slideContainer.innerHTML = '';

          for (let i = 0; i < 5; i++) {
              const thumbImage = document.createElement('img');
              thumbImage.src = product.image;
              thumbImage.className = "slider-img demo cursor";
              thumbImage.alt = product.title;
              thumbImage.onclick = () => currentSlide(i + 1);
              thumbContainer.appendChild(thumbImage);

              const slideDiv = document.createElement('div');
              slideDiv.className = "mySlides";
              const slideImage = document.createElement('img');
              slideImage.src = product.image;
              slideImage.className = "slider-img1";
              slideDiv.appendChild(slideImage);
              slideContainer.appendChild(slideDiv);
          }

          // Update "Thông tin sản phẩm" images and text
          const infoImages = document.querySelectorAll("#content1 img");
          const infoTitles = document.querySelectorAll("#content1 div[id^='infoTitle']");
          const infoDescs = document.querySelectorAll("#content1 p[id^='infoDesc']");

          infoImages.forEach(img => img.src = product.image);
          infoTitles.forEach(title => title.textContent = product.title);
          infoDescs.forEach(desc => desc.textContent = product.desc);

          showSlides(slideIndex);

          document.getElementById('buyButton').addEventListener('click', () => {
              addToCart(product);
          });
      } else {
          console.error('Product not found');
      }
  } else {
      console.error('No product ID found in URL');
  }

  function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
  }
});
