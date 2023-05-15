let LoginInformationDB;
let KeyStagesArray = ["Key Stage 3", "Key Stage 4", "Key Stage 5", "University Stage 1",
    "University Stage 2","University Stage 3", "University Postgraduate", "University PhD student"];
let SecurityQuestionsArray = ["In what city were you born?", "What is the name of your favorite pet?",
    "What is your mother's maiden name?"];

const AccountCreationButton = document.querySelector(".button_for_login_CreateAccount");
const SubmitNewAccountButton = document.querySelector(".button_for_Registration_confirm");
const MainPageButton = document.querySelector(".button_for_login_confirm");
const ResetPasswordButton = document.querySelector(".button_for_login_ResetPassword");
const ResetPWButton = document.querySelector(".button_for_confirming_security_question_answer");
const LoginForm = document.querySelector(".login_form_container");
const AccountForm = document.querySelector(".Registration_form_container");
const ResetForm = document.querySelector(".ResetPassword_form_container");
const ResetPWForm = document.querySelector(".ResetPW_form_container");



const TransLoginToAccount = function () {
    LoginForm.style.display = "none";
    AccountForm.style.display = "flex";



}
const TransLoginToMainPage = function () {
    const LoginUserToCheck = document.querySelector("#Login_Username_Input");
    let LoginRequirementsFlag = 1;
    let IncorrectLoginUserName = 0;
    let IncorrectLoginPassword = 0;
    let CorrectLoginUserName = 0;
    let UsernameChosen = 0

    const LoginPasswordToCheck = document.querySelector("#Password_Username_Input");
    
    for (var key in localStorage) {

        if (key == LoginUserToCheck.value) {
            var CurrentAccountInfo = localStorage.getItem(key).split(',')
            if (CurrentAccountInfo[3] == LoginPasswordToCheck.value) {
                LoginRequirementsFlag = 0;
              
            }
           
        }
    }
    
    if (LoginRequirementsFlag == 0) {
        LoginForm.style.display = "none";
    }
    else {
        alert("incorrect login details");
    }


    
}


const TransLoginToForgotPassword = function () {
    
    LoginForm.style.display = "none";
    ResetForm.style.display = "flex";
    
}
const TransLoginToResetPW= function () {
    
    ResetForm.style.display = "none";   
    ResetPWForm.style.display = "flex";

}
let IncorrectSecurityQuestion = 0;
let IncorrectKeyStage = 0;
let RequirementsFlag = 0;
const ChecksOnRegistration = function () {
    const UserNameToBeChecked = document.querySelector("#UsernameInput");

    for (var key in localStorage) {
        if (key == UserNameToBeChecked.value) {
            RequirementsFlag = 1
            return alert("Username already in use! please pick another");
        }
    }
    const KeyStageToBeChecked = document.querySelector(".CheckingInputForKeyStage");

    for (let i = 0; i < KeyStagesArray.length; i++) {
        if (KeyStageToBeChecked.value == KeyStagesArray[i]) {            
            RequirementsFlag = 0;
            break;
        }
            

        else {
            RequirementsFlag = 1;
            IncorrectKeyStage = 1;

            
        }
    }
    if (IncorrectKeyStage == 1 && RequirementsFlag == 1) {
        return alert("Please select a key stage or year of study from the drop down menu");
    }
    const SecurityQuestionOptionToBeChecked = document.querySelector(".CheckingInputForSecQuesOption");
    for (let i = 0; i < SecurityQuestionOptionToBeChecked.length; i++) {
        if (SecurityQuestionOptionToBeChecked.value == SecurityQuestionsArray[i]) {
            RequirementsFlag = 0;
            break;
        }


        else {
            RequirementsFlag = 1;
            IncorrectSecurityQuestion = 1;
        }
    }
    if (IncorrectSecurityQuestion == 1 && RequirementsFlag == 1) {
        return alert("Please Select a valid Security Question Option from the drop down list");
    }

    const SecurityQuestionAnswerToBeChecked = document.querySelector("#Security_Question_answer_Input");
    if (SecurityQuestionAnswerToBeChecked.value == "") {
        RequirementsFlag = 1;
        return alert("please enter an answer to your security question");
    }
    const PasswordToBeChecked = document.querySelector("#password_input");
    if (PasswordToBeChecked.value.length < 8 || PasswordToBeChecked.value > 20 || /\d/.test(PasswordToBeChecked.value) == false) {
        RequirementsFlag = 1
        return alert("Your password is not strong enough. It must contain between 8 and 20 characters with at least 1 number");
    }
    const ReEnterPasswordToBeChecked = document.querySelector("#Re-Enter_Password_input");
    if (ReEnterPasswordToBeChecked.value != PasswordToBeChecked.value) {
        RequirementsFlag = 1;
        return alert("your Passwords do not match!");
        
    }
    if (RequirementsFlag == 0) {
        const ToBeStored = [KeyStageToBeChecked.value, SecurityQuestionOptionToBeChecked.value, SecurityQuestionAnswerToBeChecked.value, PasswordToBeChecked.value]
        localStorage.setItem(UserNameToBeChecked.value, ToBeStored);
        
        return alert("Thank you. your account has been created");

        
        
    }

    
}


AccountCreationButton.addEventListener("click", TransLoginToAccount);
SubmitNewAccountButton.addEventListener("click", ChecksOnRegistration);
MainPageButton.addEventListener("click", TransLoginToMainPage);
ResetPasswordButton.addEventListener("click", TransLoginToForgotPassword);
ResetPWButton.addEventListener("click", TransLoginToResetPW);


