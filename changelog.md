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
13. Changed all components ChangeDetectionStrategy to "OnPush"
14. Used BehaviorSubject to manage data flow

## Task 3
1. Modified CartService, refactored namings, added new methods.
2. Created LocalStorageService and registered it using "useClass" with methods:
   * setItem()
   * getItem()
   * removeItem()
   * clear()
3. Created ConfigOptionsService with methods:
   * setConfig()
   * getConfig()
4. Created ConstantsService as literal object. Registered it using "useValue".
5. Created GeneratorService and registered it with "useFactory" using with newly created GeneratorFactory function.
6. Created AboutComponent and injected all mentioned services above. Used @Optional decorator. All services results presented in the component template.
7. Created EmphasizeDirective with @Input that changes font-weight onClick on it's host.

# Task 4
1. Already used async, currency, uppercase, json.
2. ProductService already provide products as and observable and ProductListComponent gets it with async pipe on the template.
3. Created OrderByPipe that receive:
   * string to order by
   * ascending/descending boolean
4. Used orderBy pipe in CartComponent and added ability to order by:
   * product name
   * product price
   * product quantity
5. Refactored ShareModule's and different module's imports   

# Task 5
1. Upgrade angular and code from 7 to 9 version
2. Included and used "Bootstrap" in some places
3. Navigation bar with router links and active link emphasize
4. Refactored product component for "Info" and "Admin" mode
5. Added "Product edit" and "Product view" components
6. Implemented order service
7. Added App, Admin, Product routing
8. Implemented "Path not found" component and routes
9. Implemented Authentication service
10. Implemented "Clear card" functionality
11. Implemented "Place order" functionality (/cart)
12. Implemented orders list component using ngTemplateOutlet and  ngTemplateOutletContext for template (/order)
13. Implemented product details with back button (/products/:productID)
14. Login section and redirection to it, if unauthorised user tries to use "Admin" section (/login)
15. Dynamic loaded "Admin" feature section with guards, children links and children guards (/admin) 
16. "Manage products" and "Manage Orders" admin sub sections with navigation (/admin/products; /admin/orders)
17. Admin edit product functionality with "Save" and "Go back" buttons (/admin/product/edit/:productID)
18. Admin "Add new product" functionality with "Save" and "Go back" buttons (/admin/product/add)
19. Removed selectors from components that are handled by the router
20. "About" component uses Localstorage service to manage tokens
...
