package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import page.BankAndCashPage;
import page.TestBase;

public class BankAndCashSteps extends TestBase{
	
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
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username)
	{ 
		bankAcc.insertUserName(username);
        
	}
}
