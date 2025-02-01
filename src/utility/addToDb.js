import { toast } from "react-toastify";

const getStoredCartList = () =>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoredCartList =(id) =>{
    const storedList =getStoredCartList();
    if(storedList.includes(id)){
        console.log(id,'already exists')

    }
    else{
        storedList.push(id);
        const storedListStr= JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);
        toast('Item added to Cart')
    }

}

const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }

}


const addToStoredWishList =(id) =>{
    const storedWishList =getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id,'already exists')

    }
    else{
        storedWishList.push(id);
        const storedWishListStr= JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr);
        toast('Item added to Wish List')
    }

}


export { addToStoredCartList , addToStoredWishList, getStoredCartList, getStoredWishList }