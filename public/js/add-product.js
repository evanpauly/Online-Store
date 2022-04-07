async function newFormHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product-name"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const stock = document.querySelector('input[name="stock"]').value;
    
  
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        price,
        stock
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/products');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-product-form').addEventListener('submit', newFormHandler);
  