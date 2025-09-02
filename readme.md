Installation and Setup 
----------------------

Pre-requisite - 
	- VS Code - Visual Studio Code
		- https://code.visualstudio.com/download

	- NodeJS - Node Package Manager
		- https://nodejs.org/en/download

	- Microsoft Policy Issue - Open powershell in admin mode, Run this command
	- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force


Commands from Playwright Installation
-------------------------------------
Default Commands from playwright - 

npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

Other Editor
------------

- Eclipse, PyCharm, IntelliJ, Cursor

- Spec file is call test case


- Account on github.com
- Install - git from git-scm website
- To check the Git Version - In terminal - git -v
- Basic GIT Commands - https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com


git config --global user.name "ishatesting7"
git config --global user.email ishatesting7@gmail.com

22nd July 
---------
Assignments -
1. Write a program to identify the value before decimal and after decimal are even or odd.
eg. 3948.432943 --> Two Parts --> 3948 and 432943 --> Then you will apply remainder by 


24th July 
---------
1. You will create a String Array and Number Array -> Use Minimum -> 12 Array Methods and show the value in the console area
2. You will create a String -> Use Minimum -> 15 Strings Methods on them and show them in the console area
3. You will create a Math Number - 4 to 5 numbers -> Use Minimum -> 20 Math Methods and show them in the console area

Programs -
---------
1. In an array of Number, find the largest number
2. In an array of Number, How many are Prime numbers
3. For a String - 'London' -> Reverse the letter of the String
4. For a Sentence - "I am new to javascript" -> Reverse the individual word 
output -> "I ma wen ot tpircsavaj"
5. Check the given word is Palindrome or not -> 'Mom'
6. To Display the Fibonacci Series -> 0 1 1 2 3 5 8 13



Locators -
---------- 

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

page.locator('CSS')


<input type="text" name="email" value="" placeholder="E-Mail Address" id="input-email" class="form-control">

HTML -
----

Tags - input/div/a/th/td/li/html/body/table/
Attributes - type, name, value, placeholder, id, class
Values - text, email, E-Mail Address,

CSS
---
1. If you are aware about classname in the html structure then the css selector would be - .classname - In case if there is space in the name of class please replace with '.'
2. If you are aware about id in the html structure then the css selector would be - #id - #input-email
3. If you are aware about attribute and value - [attribute='value'] = [id="input-email"]
4. If you are aware about tag, attribute and value - tag[attribute='value']
=input[id="input-email"]

Assertion - https://playwright.dev/docs/test-assertions

Handle RadioButton and Checkboxes -

https://www.dummyticket.com/dummy-ticket-for-visa-application/

Handle Dropdown and Auto Suggestion Dropdown 

https://www.dummyticket.com/dummy-ticket-for-visa-application/

Handle below 3 Dropdown - 

Purpose of dummy ticket (optional)
Country
State

20 pages -

pageObject - 20 js file - We will not use tag in this file

test
  - Admin
    - Job
      - Jobtest01.spec.js
        test('')
      - Jobtest02.spec.js
    - User
  - Leaves
  - Dashboard

Assigment Details - Total 12 Test Cases - 6th Aug 2025
1. Login in orange HRMS (beforeEach)
2. Validate each menu option - Such as Admin, PIM, Leaves and so on
3. After each validation - Logout - Confirm - You are logout (afterEach)


Selector Hub - Installation
https://selectorshub.com/
Install for Chrome

Assigment Details - Total 12 Test Cases - 7th Aug 2025

1. Create an end to end test case for Job Titles
2. Create an end to end test case for Pay Grades
3. Create an end to end test case for Employement Status
4. Create an end to end test case for Job Categories
5. Create an end to end test case for Work Shifts


--------------------------------------------------------
POM 
---
- Class File (Pages Files 15 pages)
  - page locators 
  - page functions

- tests
  - loginTest.spec.js
  - homepageTest.spec.js
  - aboutusTest.spec.js
  






CUCUMBER
--------



LLM + MCP Playwright + Agent
----------------------------

LLM - Large Language Model

ChatGPT
Gemini
Perplexity AI
Cloude

History

LLM cannot do 
1. Opening a browser and entering username/password
2. Connect to the database
3. Call APIs and Show the response


Prompting - Prompt Engineer
---------------------------

Agents
------
An agent is a system who is taking the instruction from an LLM and perform and convert into real time action using external tools


User --> Prompt --> LLM --> Agent ---> MCP

What is MCP - Model Context Protocol
MCP is a kind of framwork, which is reponsible for connecting LLM to real world tools such as DB, Browsers, APIs


MCP is acting a bridge --> Between LLM and Your application (AUT)

==================================================================
Test Data
---------
- Excel ---> JSON ---> Read the value from JSON

- JSON
- CSV
- text file
==================================================================

Reporting
---------
Official page - https://www.npmjs.com/package/allure-playwright

Generate Allure Report after the tests are executed:

npx playwright test 

allure generate ./allure-results -o ./allure-report

allure generate ./allure-results -o ./allure-report --clean 

Open the generated report:

allure open ./allure-report


========================================================

API TESTING
-----------
FRONTEND
BACKEND


HOTEL(CUSTOMER) -----> WAITER (TAKE THE ORDER) -----> CHEF (COOK THE FOOD)


CHEF(KITCHEN) -----> WAITER (TAKE THE FOOD) -----> GO TO CUSTOMER AND SERVE THE ORDER


(CLIENT APPLICATION) ----> API ----> SERVER APPLICATION

SERVER APPLICATION ----> API ----> (CLIENT APPLICATION)

API APPLICATION PROGRAMMING INTERFACE
-------------------------------------
JSON - JAVASCRIPT OBJECT NOTATION

{
  "DATA":"123",
  "DEMO":'233"
}

CONVERTING -- BYTE CODE -- 11001001

{
  "ISSUCCESS":TRUE
}

API METHODS(CRUD)
-----------

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

GET
POST
PUT
PATCH
DELETE

API STATUS CODE 
---------------

1XX
2XX
3XX
4XX -- CLIENT SIDE ERROR
5XX -- SERVER SIDE ERROR

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

QUERY PARAM - ?DEMO=VALUE&DEV=123
PATH PARAM - docs/Web/HTTP/Reference/Status -- ARE PATH PARAMETER


END POINT -- https://www.airbnb.co.in/ --> PRODUCTION ENVIRONMENT

END POINT -- stage.airbnb.co.in --> Stage ENVIRONMENT

END POINT -- qa.airbnb.co.in --> QA ENVIRONMENT

END POINT -- dev.airbnb.co.in --> DEV ENVIRONMENT

localhost --> 


GET METHOD
END POINT --> 
REQUEST HEADER ->
REQUEST PAYLOAD -> OPTIONAL
RESPONSE PAYLOAD

-------------------------------

API Documentation: Add a New Pet
Endpoint:
POST https://petstore.swagger.io/v2/pet

Description:
Adds a new pet to the store.

Request Headers
Header	Value	Description
accept	application/json	Expected response format
Content-Type	application/json	Request body format
Request Body
Fields:

id (integer): Pet ID
category (object): Pet category
id (integer): Category ID
name (string): Category name
name (string): Pet name
photoUrls (array of strings): URLs to pet photos
tags (array of objects): Tags for the pet
id (integer): Tag ID
name (string): Tag name
status (string): Pet status (available, pending, sold)
Example Request
Response
Status Code: 200 OK (on success)
Content-Type: application/json
Body: Returns the created pet object.
Reference
Swagger Petstore API Docs


------------------------------

Test Cases: Add a New Pet API
1. Add Pet with Valid Data
Input: Valid pet object (all required fields)
Expected Result: Status code 200 OK, response contains the created pet object with matching data.

2. Add Pet with Missing Required Field (name)
Input: Pet object missing the name field
Expected Result: Status code 400 Bad Request or appropriate error, error message indicating missing name.

3. Add Pet with Invalid Data Type (id as string)
Input: Pet object with id as "abc" (string)
Expected Result: Status code 400 Bad Request or appropriate error, error message indicating invalid data type.

4. Add Pet with Empty photoUrls Array
Input: Pet object with photoUrls: []
Expected Result: Status code 200 OK, response contains the created pet object with empty photoUrls.

5. Add Pet with Duplicate id
Input: Pet object with an id that already exists
Expected Result: Status code 409 Conflict or appropriate error, error message indicating duplicate ID.

6. Add Pet with Invalid status Value
Input: Pet object with status: "unknown"
Expected Result: Status code 400 Bad Request or appropriate error, error message indicating invalid status value.

7. Add Pet with Large Payload
Input: Pet object with very large arrays for photoUrls and tags
Expected Result: Status code 200 OK or 413 Payload Too Large if limits are exceeded.

8. Add Pet with Special Characters in Fields
Input: Pet object with special characters in name, category.name, and tags.name
Expected Result: Status code 200 OK, response contains the created pet object with special characters preserved.

9. Add Pet with Only Required Fields
Input: Pet object with only required fields (id, name, photoUrls, status)
Expected Result: Status code 200 OK, response contains the created pet object.

10. Add Pet with Null Values in Optional Fields
Input: Pet object with category and tags set to null
Expected Result: Status code 200 OK, response contains the created pet object with category and tags as null.


TOOLS FOR API

POSTMAN - OPEN SOURCE
JMETER - OPEN SOURCE
BRUNO - OPEN SOURCE


READY API - https://www.soapui.org/tools/readyapi/
SWAGGER



DOWNLOAD POSTMAN -
https://www.postman.com/downloads/


POSTMAN -

CollectionVariable
EnvironmentVariable
  QA
  - baseURL
  - clientKey
  - secret
  Stage
  - baseURL
  - clientKey
  - secret
  Prod
  - baseURL
  - clientKey
  - secret  
GlobalVaraible

------------------------------------------------------
Base URL - https://petstore.swagger.io/#/pet (21st Aug)


Create a collection in postman and automate the same APIs in Playwright

- Pet
- Store

Authorization and Authentication
--------------------------------

401 - Unauth
--Credentials
-Basic Auth -- atob() and btoa()
-Bearer Token
-JWT Token
-API Key


403 - Forbidden
---------------------------------------------------

CICD Process 
------------

Continuous Integration and Continuous Delivery

Got the Access for Project
  - BankAssetManagement
    -Module1
    -Module2
    -Module3
    -Module4
    -Module5
      -TC1
      -TC2

    -PR - Pull Request

-- QA Member - Module 5 - TC1 and TC2 - Pull Req - Code will merge with Main
-- After that -- CICD -- Once the code is push to main -- Please run the complete project in the Azure Pipeline, Jenkins Pipeline

YAML File - 

DevOps -- Migrating the Dev code
--- QA
--- Stage
--- UAT

QA --
Today in QA - 
Today in Stage - 

DevSecOps

JENKINSFILE
-----------

BDD Cucumber - Gherkin Syntax
------------------------------

PAGE OBJECT MODEL --> Converted in BDD

Keywords
- Feature file

GIVEN I am triggering an API for creating pet
WHEN I am sending a new pet in the post request
THEN pet id should be created
AND status should be 201

Updated - 

Feature: Create a new pet via API

Background:

Scenario

Scenario outline

Given I initiate a request to create a pet using the API
When I send the details of a new pet in a POST request
Then a unique pet ID should be generated
And the response status should be 201 Created

Example
sanjd | dsakn | dsan
sanjd | dsakn | dsan
sanjd | dsakn | dsan
sanjd | dsakn | dsan
sanjd | dsakn | dsan
sanjd | dsakn | dsan




