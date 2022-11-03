package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class AccountValidationPage {
	
	WebDriver driver ;
	
	public AccountValidationPage()
	{
		this.driver = driver;
	}

	@FindBy(how = How.XPATH,using = "//h5[text() = 'Manage Accounts']")WebElement AccountHeader;
	
	public void validateAccountCreation()
	{
		String expectedHeaderText = AccountHeader.getText();
		String actualHeaderText = "Manage Accounts";
		Assert.assertEquals("Account not found" , expectedHeaderText, actualHeaderText );
	}
}
