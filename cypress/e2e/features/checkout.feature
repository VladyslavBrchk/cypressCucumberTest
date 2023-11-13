Feature: Checkout Feature

  Scenario: Valid Checkout Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user clicks a "cart" button on Inventory Page
  And A user clicks a "checkout" button on Cart Page
  And A user fill checkout form with <first name>, <last name> and <postal code>
  And A user clicks a "continue" button on Checkout Page
  And A user clicks a "finish" button on Checkout Page
  Then A user receives "Thank you for your order!" message
  
    Examples: 
    | first name | last name | postal code |
    | "Jack"     | "Sparrow" | "14000"     |

  Scenario: Valid Sum in Checkout Test
  Given A user is logged in
  When A user adds 1 item in inventory to cart
  And A user complete checkout with <first name>, <last name> and <postal code>
  Then A total sum in checkout is valid
    
    Examples: 
    | first name | last name | postal code |
    | "Jack"     | "Sparrow" | "14000"     |