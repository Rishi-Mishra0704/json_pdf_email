// Include the Brevo library
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Use the API key for sending email templates
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'your-api-key';

// Instantiate the client for sending email templates
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Set the template ID to be sent
const templateId = 1;

// Create the email request
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
sendSmtpEmail.templateId = templateId;

// Add recipient details
sendSmtpEmail.to = [{ "email": "rishimishra0404@gmail.com" }];

// Send the email template
apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log('Email template sent successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
    console.error(error);
});
