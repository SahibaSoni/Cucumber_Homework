$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BankAndCash.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters as accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submitButton",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "demoAcc",
        "SavingAcc",
        "10000",
        "1234",
        "Sahiba",
        "1234567890",
        "https://www.bankofamerica.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2876961800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters as accountTitle as \"demoAcc\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"SavingAcc\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"10000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"1234\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"Sahiba\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"1234567890\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as \"https://www.bankofamerica.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submitButton",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankAndCashSteps.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 862581800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "BankAndCashSteps.user_enters_username_as(String)"
});
formatter.result({
  "duration": 176661000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "BankAndCashSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 101966400,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_login()"
});
formatter.result({
  "duration": 964319500,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 9433500,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 349075400,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 518046200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demoAcc",
      "offset": 32
    }
  ],
  "location": "BankAndCashSteps.user_enters_as_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3143029400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SavingAcc",
      "offset": 28
    }
  ],
  "location": "BankAndCashSteps.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 147969600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 31
    }
  ],
  "location": "BankAndCashSteps.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 125819200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 30
    }
  ],
  "location": "BankAndCashSteps.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 117652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sahiba",
      "offset": 30
    }
  ],
  "location": "BankAndCashSteps.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 141068300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 22
    }
  ],
  "location": "BankAndCashSteps.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 133999200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bankofamerica.com/",
      "offset": 35
    }
  ],
  "location": "BankAndCashSteps.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 181747600,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.User_clicks_on_submitButton()"
});
formatter.result({
  "duration": 4023082100,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.User_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 55870700,
  "status": "passed"
});
});