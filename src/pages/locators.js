module.exports = {
    LoginPage: {
        LogIn: '//a[@class="jl-button jl-button-white-negative"]',
        emailInput: '//input[@id="Email"]',
        passwordInput: '//input[@id="Password"]',
        loginButton: '//button[@id="loginBtn"]',
        forgotPassword: '//a[normalize-space()="Forgot your password?"]',
        alreadyhaveanaccount: '//a[normalize-space()="I already have an account"]',
        NotaValidEmail:'//div[@class="noty_body" and contains(text(), "The Email field is not a valid")]',
        emailLink: '//input[@value="Email link"]',
        invalidLogin: '//div[@class="noty_body" and contains(text(), "Invalid login")]',
        invalidEmail: '//div[@class="noty_body" and contains(text(), "Email is required")]',
        forgotPassConfirmation: '//p[@class="text-center"]'
    },
    CareersPage: {
        openPositionsbtn:'//a[text()="Open positions"]',
        openpositions:'//div[@class="js-module-jlfaq-205 jl-accordion"]',
        joblisting:'//div[@class="js-module-jlfaq-205 jl-accordion"]/div',
        jobopeningtitle:'//div[@class="js-module-jlfaq-205 jl-accordion"]/div/a',
        applyforthisposition:'//div[@class="js-module-jlfaq-205 jl-accordion"]/div/a',
        headerSelector:'//header[@id="g-header"]',
        footerSelector:'//footer[@id="g-footer"]',
        logoSelector:'//div[@id="logo-8346-particle"]//a[@class="g-logo"]',
        learnMore:'//a[@href="/images/ads/BI-Analyst.pdf"]'


    },
    // Add more pages as necessary
};

//div[@class='noty_body']
