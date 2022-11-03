Feature: Techfios bank and cash New Account Functionality 

Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the username as "<username>"
	When User enters the password as "<password>"
	Then User clicks on login
	Then User should land on Dashboard page 
  Then User clicks on bankCash
	Then User clicks on newAccount
	Then User enters as accountTitle as "<accountTitle>" in accounts page 
	Then User enters description as "<description>" in accounts page 
	Then User enters initialBalance as "<initialBalance>" in accounts page 
	Then User enters accountNumber as "<accountNumber>" in accounts page 
	Then User enters contactPerson as "<contactPerson>" in accounts page 
	Then User enters Phone as "<Phone>" in accounts page  
	Then User enters internetBankingURL as "<internetBankingURL>" in accounts page 
	Then User clicks on submitButton
	Then User should be able to validate account created successfully

	
Examples:
|username |password |accountTitle |description |initialBalance |accountNumber |contactPerson |Phone |internetBankingURL |
|demo@techfios.com |abc123 |demoAcc  |	SavingAcc | 10000 | 1234 | Sahiba | 1234567890 | https://www.bankofamerica.com/ |