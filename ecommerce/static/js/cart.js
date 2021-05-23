const updateBtns = document.querySelectorAll(".update-cart")

for (i = 0; i < updateBtns.length; i++){
  updateBtns[i].addEventListener("click", function(){
    const productId = this.dataset.product
    const action = this.dataset.action
    console.log('productId:', productId, 'Action:', action)

    console.log('USER:', user)
    if(user === 'AnonymousUSer'){
      console.log('User is not authenticated')
    } else {
      updateUserOrder(productId, action)
    }
  })
}

function updateUserOrder(productId, action){
  console.log('User is authenticated, sending data...')

  const url = '/update_item/'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: JSON.stringify({'productId': productId, 'action': action})
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    location.reload()
  })
}
