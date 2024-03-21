// Include the Brevo library
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Use the API key for sending email templates
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'your-api-key';

// Instantiate the client for sending email templates
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const templateId = 1;

// Define the email recipients array
const emailRecipients = [
    "rishimishra0404@gmail.com",
    "rishimishra639@gmail.com"
];

// Loop over each email recipient and send the email
emailRecipients.forEach(email => {
    // Create the email request
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.templateId = templateId;
    
    // Generate a random 16-digit hexadecimal string for the temporary password
    const randomHex = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    
    // Set the recipient
    sendSmtpEmail.to = [{ "email": email }];
    
    // Set the email parameters using the placeholder format
    sendSmtpEmail.params = { "email": email, "tempPassword": randomHex };
    
    // Send the email template
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('Email template sent successfully to ' + email + '. Returned data: ' + JSON.stringify(data));
    }, function(error) {
        console.error('Error sending email to ' + email + ':', error);
    });
});