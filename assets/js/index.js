const form = document.getElementById("subscribe-form");

function handleFormSubmit(event) {
    event.preventDefault();

    error_message = event.target.querySelector(".error-message");
    
    const email_address_input = event.target.querySelector("input");
    email_address = email_address_input.value.trim();

    if (!email_address || !email_address.includes("@") || !email_address.includes(".")) {
        error_message.textContent = "Please enter a valid email address.";
        error_message.style.display = "block";  
        return;
    }

    email_address_input.value = "";

    error_message.textContent = "";
    error_message.style.display = "none";
    
    console.log(`Email address: ${email_address}`);

    main_content_article = document.querySelector(".mailing-list-article");
    main_content_article.style.display = "none";

    success_message_article = document.querySelector(".success-message-article");
    success_message_article.style.display = "flex";
    document.getElementById("user-email").textContent = email_address;

}

function handleDismissButtonClick() {
    success_message_article = document.querySelector(".success-message-article");
    success_message_article.style.display = "none";
    main_content_article = document.querySelector(".mailing-list-article");
    main_content_article.style.display = "flex";
    
}

form.addEventListener("submit", handleFormSubmit);

const dismissButton = document.querySelector(".dismiss-button");
dismissButton.addEventListener("click", handleDismissButtonClick);
