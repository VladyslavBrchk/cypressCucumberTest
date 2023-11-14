Feature: Inventory Feature

  Scenario: Logout Test
  Given A user is logged in
  When A user clicks a "burger menu" button on Inventory Page
  And  A user clicks a "logout" button on Inventory Page
  Then A user is redirected to "Login Page"

  Scenario: Valid Navigation Menu Test
  Given A user is logged in
  When A user clicks a "burger menu" button on Inventory Page
  Then A user see 4 menu items

  Scenario: Product adding to cart Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  Then A user see "1" near cart button
  And The button near 1 item in inventory changed into "Remove"

  Scenario: Product deletinging from cart on Inventory Page Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user deletes 1 item in inventory from cart
  Then A user see "nothing" near cart button
  And The button near 1 item in inventory changed into "Add to cart"

  Scenario: Cart Saving After Logout Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user clicks a "burger menu" button on Inventory Page
  And A user clicks a "logout" button on Inventory Page
  And A user login with the username "standard_user" and password "secret_sauce"
  Then A user is redirected to "Inventory Page"
  And A user see items and cart
  And A user see "1" near cart button
  And The button near 1 item in inventory changed into "Remove"

  Scenario: Footer Links Test
  Given A user is logged in
  When A user clicks a <link> button on Inventory Page
  Then A user is redirected to <page>
  
  Examples: 
    | link            | page            |
    | "Twitter Link"  | "Twitter Page"  |
    | "Facebook Link" | "Facebook Page" |
    | "LinkedIn Link" | "LinkedIn Page" |