Feature: Login Feature

  Scenario: Sucess Login Test
  Given A user opens the login page
  When A user login with the username "standard_user" and password "secret_sauce"
  Then A user is redirected to "Inventory Page"
  And A user see items and cart

  Scenario: Failed Login Test
  Given A user opens the login page
  When A user login with the username <username> and password <password>
  Then A user receives an error <message>

  Examples: 
    | username          | password       | message                                                                     |
    | "locked_out_user" | "secret_sauce" | "Epic sadface: Sorry, this user has been locked out."                       |
    | "standarD_user"   | "secret_sauce" | "Epic sadface: Username and password do not match any user in this service" |

  Scenario: Login Without Credentials Test
  Given A user opens the login page
  When A user clicks a login button
  Then A user receives an error "Epic sadface: Username is required"