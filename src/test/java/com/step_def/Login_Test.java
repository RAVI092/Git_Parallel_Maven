package com.step_def;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.Login;

import Base.Base_cls;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_Test extends Base_cls{
	
	@Given("User is at login page")
	public void user_is_at_login_page() throws IOException {
		loadUrl(prop("url"));
		
		}


	@When("he enters the valid user name <\"u-name\"> and password <\"pass\">")
	public void he_enters_the_valid_user_name_u_name_and_password_pass() throws IOException {
		
		Login log=new Login();
		log.sign_in(prop("username"),prop("password"));
		
	}

	@When("click the sign-in button")
	public void click_the_sign_in_button() {
		Login log=new Login();
		log.login_click.click();
	}


	@Then("Verify that he is logged in")
	public void verify_that_he_is_logged_in() {
		org.testng.Assert.assertEquals(d1.getTitle(), "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
	}

	@When("he enters the in-valid user name <\"u-name\"> and password <\"pass\">")
	public void he_enters_the_in_valid_user_name_u_name_and_password_pass() throws IOException {
		Login log=new Login();
		log.sign_in(prop("Invalid_uname"),prop("pass"));
	}

	
	
}
