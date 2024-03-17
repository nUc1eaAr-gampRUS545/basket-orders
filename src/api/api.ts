export const getOrders = ()=>{
    return fetch("https://fakestoreapi.com/products").then((response) => response.json())
}