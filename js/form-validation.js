window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // if form validation is true
        if(form.checkValidity())
        {
            const formData = new FormData(form);
            fetch("./php/form-validation.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json() )
            .then(data => {
                if(data.formValid === true)
                {
                    alert("thanks");
                    form.reset();
                    document.querySelector("#name-error-field").textContent = "";
                    document.querySelector("#email-error-field").textContent = "";
                    document.querySelector("#subject-error-field").textContent = "";
                    document.querySelector("#message-error-field").textContent = "";
                }
                else
                {
                    if(data.name === false)
                    document.querySelector("#name-error-field").textContent = "Please enter a valid data. Server";
                    else
                        document.querySelector("#name-error-field").textContent = "";

                    if(data.email === false)
                        document.querySelector("#email-error-field").textContent = "Please enter a valid data. Server";
                    else
                        document.querySelector("#email-error-field").textContent = "";
                    
                    if(data.subject === false)
                        document.querySelector("#subject-error-field").textContent = "Please enter a valid data. Server";
                    else
                        document.querySelector("#subject-error-field").textContent = "";
                    
                    if(data.message === false)
                        document.querySelector("#message-error-field").textContent = "Please enter a valid data. Server";
                    else
                        document.querySelector("#message-error-field").textContent = "";

                    // if server send form failed
                    if(data.formSent === false)
                        alert("Server: sending the email failed");
                }            
            });
        }
        else 
        {
            const validation = new Validation();
        }        
    });
});

class Validation
    {
        constructor()
        {
            // get the input elements by id
            this.name = document.querySelector("#name");
            this.email = document.querySelector("#email");
            this.subject = document.querySelector("#subject");
            this.message = document.querySelector("#message");

            // get the error fields by id
            this.nameErrorField = document.querySelector("#name-error-field");
            this.emailErrorField = document.querySelector("#email-error-field");
            this.subjectErrorField = document.querySelector("#subject-error-field");
            this.messageErrorField = document.querySelector("#message-error-field");

            // set error messages
            this.emptyErrorMsg = "This field cann't be empty.";
            this.patternMismatchMsg = "Please enter a valid data.";
            this.clearErrorMsg = "";            

            // run the validation
            this.checkInputs();
        }

        checkInputs()
        {
            // name
            if(this.name.validity.valueMissing)
                this.nameErrorField.textContent = this.emptyErrorMsg;
            else if(this.name.validity.patternMismatch)
                this.nameErrorField.textContent = this.patternMismatchMsg;
            else
                this.nameErrorField.textContent = this.clearErrorMsg;
            
            // // email
            if(this.email.validity.valueMissing)
                this.emailErrorField.textContent = this.emptyErrorMsg;
            else if(this.email.validity.patternMismatch)
                this.emailErrorField.textContent = this.patternMismatchMsg;
            else
                this.emailErrorField.textContent = this.clearErrorMsg;
            
            // subject
            if(this.subject.validity.valueMissing)
                this.subjectErrorField.textContent = this.emptyErrorMsg;
            else if(this.subject.validity.patternMismatch)
                this.subjectErrorField.textContent = this.patternMismatchMsg;
            else
                this.subjectErrorField.textContent = this.clearErrorMsg;
            
            // message
            if(this.message.validity.valueMissing)
                this.messageErrorField.textContent = this.emptyErrorMsg;
            else if(!this.message.validity.valid)
                this.messageErrorField.textContent = this.patternMismatchMsg;
            else
                this.messageErrorField.textContent = this.clearErrorMsg;
        }
    }