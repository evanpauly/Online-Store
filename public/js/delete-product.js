async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/store/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-product-btn').addEventListener('click', deleteFormHandler);
  