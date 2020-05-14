# Change list
## Task 1
1. Created FirstComponent with properties and used it in AppComponent.
2. Created ProductComponent with "Buy" button and onBuy() eventHandler.
3. Created ProductService that provides products array.
4. Created ProductListComponent that shows list of products received by ProductService.
5. Created CartComponent and used it in AppComponent.
6. Created CartListComponent and used it in CartComponent.
7. Created CartService that handles cart content:
   * getCartItems
   * addCartItem
   * resetCart

## Task 2
1. Removed FirstComponent.
2. Created separate modules.
3. Refactor ProductComponent as presentation component.
4. Created smart CartListComponent with in cart items count and total price.
5. Created dumb СartItemComponent.
6. Created smart ProductListComponent with product list.
7. Created dumb ProductComponent.
8. Product features:
    * increase / decrease in stock product quantity
    * on adding product to cart it's in stock quantity decreases
    * on removing product form cart it's in stock quantity increases
    * on emptying cart, in stock product count restores
    * "add to cart" button disabled / enabled depending in stock availability
9. Cart featured:
    * increase / decrease in cart product quantity
    * if add to cart product that is already there, only it's quantity changes, else just add a new product
    * remove product from the cart
    * clear the cart
    * show in cart items total price
    * show in cart items quantity
10. Set AppTitle using @ViewChild in component
11. Used @HostBinding and @HostListener for host manipulating  
12. Used: ngClass, ngStyle and others directives, pipes...    
