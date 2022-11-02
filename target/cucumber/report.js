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
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
});