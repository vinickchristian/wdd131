document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".info");

    const form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");

    // Name Field
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.required = true;
    form.appendChild(nameInput);

    // Email Field
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.required = true;
    form.appendChild(emailInput);
    
    form.appendChild(document.createElement("br"));

    // Purpose of Message
    const purposeLabel = document.createElement("label");
    purposeLabel.textContent = "Purpose of Message:";
    form.appendChild(purposeLabel);

    const radioOptionsDiv = document.createElement("div");
    radioOptionsDiv.classList.add("radio-options");

    const purposes = [
        { id: "general", value: "General Inquiry", label: "General Inquiry" },
        { id: "reservation", value: "Reservation Question", label: "Reservation Question" },
        { id: "suggestion", value: "Website Suggestion", label: "Website Suggestion" }
    ];

    purposes.forEach(purpose => {
        const purposeInput = document.createElement("input");
        purposeInput.setAttribute("type", "radio");
        purposeInput.setAttribute("id", purpose.id);
        purposeInput.setAttribute("name", "purpose");
        purposeInput.setAttribute("value", purpose.value);
        purposeInput.required = true;

        const purposeLabel = document.createElement("label");
        purposeLabel.setAttribute("for", purpose.id);
        purposeLabel.textContent = purpose.label;

        radioOptionsDiv.appendChild(purposeLabel);
        radioOptionsDiv.appendChild(purposeInput);
    });

    form.appendChild(radioOptionsDiv);

    // Message Field
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:";
    form.appendChild(messageLabel);

    const messageTextarea = document.createElement("textarea");
    messageTextarea.setAttribute("id", "message");
    messageTextarea.setAttribute("name", "message");
    messageTextarea.required = true;
    form.appendChild(messageTextarea);

    form.appendChild(document.createElement("br"));

    // Newsletter Subscription
    const newsletterLabel = document.createElement("label");
    newsletterLabel.setAttribute("for", "newsletter");
    newsletterLabel.textContent = "Please subscribe me to the monthly newsletter";
    form.appendChild(newsletterLabel);

    const newsletterCheckbox = document.createElement("input");
    newsletterCheckbox.setAttribute("type", "checkbox");
    newsletterCheckbox.setAttribute("id", "newsletter");
    newsletterCheckbox.setAttribute("name", "newsletter");
    newsletterCheckbox.setAttribute("value", "subscribe");
    form.appendChild(newsletterCheckbox);

    form.appendChild(document.createElement("br"));

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("submit-btn");
    submitButton.textContent = "Send Your Response";
    form.appendChild(submitButton);

    // Append form to formContainer
    formContainer.appendChild(form);

    const menu = document.querySelector('nav .menu');
    const hamburgerButton = document.querySelector('.hamburger');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
    });
});
