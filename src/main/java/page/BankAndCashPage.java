package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashPage {
	
	WebDriver driver;
	
	public BankAndCashPage() {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignInButton;
	@FindBy(how = How.XPATH, using = "//span[text() = 'Bank & Cash']")
	WebElement BankAndCash;
	@FindBy(how = How.XPATH, using = "//a[text() = 'New Account']")
	WebElement NewAccount;
	

	public void insertUserName(String username) {
		UserName.sendKeys(username);
		// try {
		// Thread.sleep(3000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
	}

	public void insertPassword(String password) {
		Password.sendKeys(password);
		// try {
		// Thread.sleep(3000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
	}

	public void clickSignIn() {
		SignInButton.click();
		// try {
		// Thread.sleep(3000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
	}

	public String getPageTitle(WebDriver driver) {
		return driver.getTitle();
	}
	
	public void clickBankAndCash() {
		BankAndCash.click();
		// try {
		// Thread.sleep(3000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
	}

	public void clickNewAccount() {
		NewAccount.click();
		// try {
		// Thread.sleep(3000);
		// } catch (InterruptedException e) {
		// e.printStackTrace();
		// }
	}

	
	

}
