package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.BankAndCashPage;
import page.TestBase;

public class BankAndCashSteps extends TestBase{
	
	private static final String username = null;
	BankAndCashPage bankAcc;
	
	
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

	@And("^User clicks on login$")
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


}
