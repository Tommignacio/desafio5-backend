const socket = io()

const $idProducts = document.getElementById('idProducts')

//renderiza productos
socket.on('products', data => {
    $idProducts.innerHTML = ''
    for (let i of data) {
        $idProducts.innerHTML += `
        <p> ${i.title} $${i.price} </p>
       `
    }
})
