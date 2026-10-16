import './cartContent.css';
import { useNavigate } from 'react-router';

export function CartContent () {
    const cart = [{
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "category": "groceries",
      "price": 1.99,
      "discountPercentage": 12.62,
      "rating": 4.19,
      "stock": 8,
      "tags": [
        "fruits"
      ],
      "sku": "GRO-BRD-APP-016",
      "weight": 9,
      "dimensions": {
        "width": 13.66,
        "height": 11.01,
        "depth": 9.73
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Sophia Brown",
          "reviewerEmail": "sophia.brown@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Scarlett Bowman",
          "reviewerEmail": "scarlett.bowman@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very unhappy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "William Gonzalez",
          "reviewerEmail": "william.gonzalez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "90 days return policy",
      "minimumOrderQuantity": 7,
      "meta": {
        "createdAt": "2026-03-03T03:28:19.029Z",
        "updatedAt": "2026-04-21T05:42:48.171Z",
        "barcode": "7962803553314",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "category": "groceries",
      "price": 12.99,
      "discountPercentage": 9.61,
      "rating": 4.47,
      "stock": 86,
      "tags": [
        "meat"
      ],
      "sku": "GRO-BRD-BEE-017",
      "weight": 10,
      "dimensions": {
        "width": 18.9,
        "height": 5.77,
        "depth": 18.57
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Tyler",
          "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Fast shipping!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Alexander Jones",
          "reviewerEmail": "alexander.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great value for money!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Natalie Harris",
          "reviewerEmail": "natalie.harris@x.dummyjson.com"
        }
      ],
      "returnPolicy": "60 days return policy",
      "minimumOrderQuantity": 43,
      "meta": {
        "createdAt": "2024-10-02T14:03:32.118Z",
        "updatedAt": "2025-10-24T16:51:22.869Z",
        "barcode": "5640063409695",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "category": "groceries",
      "price": 8.99,
      "discountPercentage": 9.58,
      "rating": 3.13,
      "stock": 46,
      "tags": [
        "pet supplies",
        "cat food"
      ],
      "sku": "GRO-BRD-FOO-018",
      "weight": 10,
      "dimensions": {
        "width": 18.08,
        "height": 9.26,
        "depth": 21.86
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Noah Lewis",
          "reviewerEmail": "noah.lewis@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Very unhappy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Ruby Andrews",
          "reviewerEmail": "ruby.andrews@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Very disappointed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Ethan Thompson",
          "reviewerEmail": "ethan.thompson@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 18,
      "meta": {
        "createdAt": "2025-02-18T18:35:51.211Z",
        "updatedAt": "2026-08-16T13:50:03.194Z",
        "barcode": "1483991328610",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "category": "groceries",
      "price": 9.99,
      "discountPercentage": 13.7,
      "rating": 3.19,
      "stock": 97,
      "tags": [
        "meat"
      ],
      "sku": "GRO-BRD-CHI-019",
      "weight": 1,
      "dimensions": {
        "width": 11.03,
        "height": 22.11,
        "depth": 16.01
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Mateo Bennett",
          "reviewerEmail": "mateo.bennett@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Highly recommended!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Jackson Evans",
          "reviewerEmail": "jackson.evans@x.dummyjson.com"
        },
        {
          "rating": 3,
          "comment": "Not worth the price!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Sadie Morales",
          "reviewerEmail": "sadie.morales@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 22,
      "meta": {
        "createdAt": "2026-02-15T02:18:37.851Z",
        "updatedAt": "2026-03-15T17:47:08.150Z",
        "barcode": "8829514594521",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "category": "groceries",
      "price": 4.99,
      "discountPercentage": 9.33,
      "rating": 4.8,
      "stock": 10,
      "tags": [
        "cooking essentials"
      ],
      "sku": "GRO-BRD-COO-020",
      "weight": 5,
      "dimensions": {
        "width": 19.95,
        "height": 27.54,
        "depth": 24.86
      },
      "warrantyInformation": "Lifetime warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Victoria McDonald",
          "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Hazel Evans",
          "reviewerEmail": "hazel.evans@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Zoe Bennett",
          "reviewerEmail": "zoe.bennett@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 46,
      "meta": {
        "createdAt": "2025-09-25T15:34:34.194Z",
        "updatedAt": "2025-12-10T00:52:49.501Z",
        "barcode": "4874727824518",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"
    }];
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className='cart_content'>
                <h1 className='cart_content__heading'>No items yet</h1>

                <button 
                className='cart_content__button'
                onClick={() => navigate('/groceries')}
                >Go to groceries</button>
            </div>
        );
    }

    return (
        <div className='cart_content'>
            <h1 className='cart_content__heading'>Items in the cart: {cart.length}</h1>

            {cart.map((item) => {
                return (
                    <div className='cart_content__card' key={ item.id }>
                        <div className='cart_content__img'>
                            <img src={ item.images[0] } alt={ item.description } />
                        </div>

                        <div className='cart_content__block'>
                            <h3 className='cart_content__title'>{item.title}</h3>

                            <div className='cart_content__interactive'>
                                <button className='cart_content__round'>-</button>

                                <button className='cart_content__round'>+</button>

                                <p className='cart_content__text'>{ 1 }</p>
                            </div>

                            <p className='cart_content__text'>Total: { 0 }$</p>

                            <button className='cart_content__buttons'>Remove item</button>
                        </div>
                    </div>
                );
            })}

            <div className='cart_content__sum'>
                <h2 className='cart_content__total'>Total: { 0 }$</h2>

                <button className='cart_content__button'>To pay</button>
            </div>
        </div>
    )
}