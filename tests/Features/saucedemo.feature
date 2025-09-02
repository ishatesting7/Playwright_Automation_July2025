Feature: Login functionality on SauceDemo

  Background:
    Given I open the SauceDemo login page

  # Valid login scenario
  Scenario Outline: Login with valid users
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see the inventory page for "<username>"

    Examples:
      | username                 | password      |
      | standard_user           | secret_sauce  |
      | problem_user            | secret_sauce  |
      | performance_glitch_user | secret_sauce  |
      | error_user              | secret_sauce  |
      | visual_user             | secret_sauce  |

  # Locked out user
  Scenario: Login with locked out user
    When I enter username "locked_out_user" and password "secret_sauce"
    And I click the login button
    Then I should see an error message "Sorry, this user has been locked out."

  # Invalid credentials
  Scenario Outline: Login with invalid credentials
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see an error message "Username and password do not match any user in this service"

    Examples:
      | username        | password      |
      | invalid_user    | secret_sauce  |
      | standard_user   | wrong_pass    |
      | wrong_user      | wrong_pass    |
      | ""              | secret_sauce  |
      | standard_user   | ""            |
      | ""              | ""            |
