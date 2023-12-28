# Feature: feature name

# Scenario Outline: Scenario Outline name

# Given the user opens the GreenKart website
# When products are added to the cart
# Then the total price is correct
# And the order is successfully submitted

# Examples:
#     | Header 1 | Header 2 | Header 3 |
#     | Value 1  | Value 2  | Value 3  |

# some feature description

# cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar