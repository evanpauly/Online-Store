async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="product-title"]').value;
    const post_url = document.querySelector('input[name="product-url"]').value;
  
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/store');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-product-form').addEventListener('submit', newFormHandler);
  