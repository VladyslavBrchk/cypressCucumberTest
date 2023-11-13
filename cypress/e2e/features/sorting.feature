Feature: Sorting Feature

  Scenario: Inventory Sorting Test
  Given A user is logged in
  When A user selects a <filter> filter
  Then Elements are filtered by <filter>

  Examples: 
    | filter                |
    | "Name (A to Z)"       |
    | "Name (Z to A)"       |
    | "Price (low to high)" |
    | "Price (high to low)" |