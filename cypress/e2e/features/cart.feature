Feature: Cart Feature

  Scenario: Cart Checking after Adding Product Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user clicks a "cart" button on Inventory Page
  Then A user see added element in a cart

  Scenario: Deleting Item from Cart Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user clicks a "cart" button on Inventory Page
  And A user deletes 1 item in cart
  Then Item should be deleted