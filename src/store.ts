import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    isFavorite: boolean;
    onWishlist: boolean;
    rating: number;
    size: string;
    new : boolean;
    images: string[];
    discount: number;
    reviews: Review[];
}

export interface Review {
    id: number;
    name: string;
    comment: string;
    date: string;
    rating: number;
    verified: boolean;
}


export interface CartItem {
    product: Product;
    quantity: number;
    price: number;
}