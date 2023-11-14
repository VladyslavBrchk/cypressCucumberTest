Feature: Checkout Feature

  Scenario: Valid Checkout Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user clicks a "cart" button on Inventory Page
  And A user clicks a "checkout" button on Cart Page
  And A user fill checkout form with random credentials
  And A user clicks a "continue" button on Checkout Page
  And A user clicks a "finish" button on Checkout Page
  Then A user receives "Thank you for your order!" message
  
  Scenario: Valid Sum in Checkout Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user complete checkout with random credentials
  Then A total sum in checkout is valid
    