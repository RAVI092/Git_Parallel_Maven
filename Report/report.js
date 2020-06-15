$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/Login.feature");
formatter.feature({
  "name": "FlipKart login validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "he enters the valid user name \u003c\"u-name\"\u003e and password \u003c\"pass\"\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click the sign-in button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that he is logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "u_name",
        "pass"
      ]
    },
    {
      "cells": [
        "62656",
        "322665"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_def.Login_Test.user_is_at_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "he enters the valid user name \u003c\"u-name\"\u003e and password \u003c\"pass\"\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_def.Login_Test.he_enters_the_valid_user_name_u_name_and_password_pass()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the sign-in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.step_def.Login_Test.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that he is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_def.Login_Test.verify_that_he_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
});