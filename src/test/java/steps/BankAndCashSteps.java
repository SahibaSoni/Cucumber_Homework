package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AccountValidationPage;
import page.BankAndCashPage;
import page.TestBase;

public class BankAndCashSteps extends TestBase{
	
	BankAndCashPage bankAcc;
	AccountValidationPage accValid;
	
	
	@Before
	public void setUp()
	{
		initDriver();
		bankAcc = PageFactory.initElements(driver, BankAndCashPage.class);
		
	}
	
	@Given ("^User is on the techfios login page$")
	public void User_is_on_the_techfios_login_page()
	{
		
		driver.get("https://techfios.com/billing/?ng=admin/");
		
	}
	
	@When("User enters the username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username)
	{ 
		
		bankAcc.insertUserName(username);
        
	}
	
	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the(String password)
	{
	   bankAcc.insertPassword(password);
	    
	}

	@Then("^User clicks on login$")
	public void user_clicks_on_login()
	{
	   bankAcc.clickSignIn();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() 
	{
		String expectedTitle = "Dashboard- iBilling";
		String actuleTitle = bankAcc.getPageTitle(driver);
		Assert.assertEquals("Page not found ",expectedTitle, actuleTitle);
	}

	@And("^User clicks on bankCash$")
	public void user_clicks_on_bankCash()
	{
	   bankAcc.clickBankAndCash();
	}

	@And("^User clicks on newAccount$")
	public void user_clicks_on_newAccount()
	{
	   bankAcc.clickNewAccount();
	}
	
	@Then("^User enters as accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_as_accountTitle_as_in_accounts_page(String accTitle)  {
	    bankAcc.insertAccountTitle(accTitle + generateRandomNum(999));
	}

	@Then("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String desc) {
	    bankAcc.insertdescreption(desc);
	}

	@Then("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String bal) {
	 
		bankAcc.insertIntialBalance(bal);
	}

	@Then("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accNum) {
	   bankAcc.insertAccountNumber(accNum);
	}

	@Then("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String conPer) {
	 bankAcc.insertContactPerson(conPer);   
	}

	@Then("^User enters Phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String conPh) {
	 bankAcc.insertContactPhone(conPh);   
	}


	@Then("^User enters internetBankingURL as \"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String bankUrl) {
	    
		bankAcc.insertBankingUrl(bankUrl);
	}

	@Then ("^User clicks on submitButton$")
	public void User_clicks_on_submitButton()
	{
		bankAcc.clickSubmitButton();
	}
	
	@Then("^User should be able to validate account created successfully$")
	public void User_should_be_able_to_validate_account_created_successfully()
	{
		accValid = PageFactory.initElements(driver, AccountValidationPage.class);
		accValid.validateAccountCreation();
	}
}
