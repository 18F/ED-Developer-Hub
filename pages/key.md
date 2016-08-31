---
layout: default
title: Request an API Key
nav: key
permalink: /api-key/
---




{% raw %} 

<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
 /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
 var apiUmbrellaSignupOptions = {
   // Pick a short, unique name to identify your site, like 'gsa-auctions'
   // in this example.
   registrationSource: 'ed-developer-hub',

   // Enter the API key you signed up for and specially configured for this
   // API key signup embed form.
   apiKey: 'GKqvZS2yThqpVN95whiKzoSxm6i6JiCKkg5PCFEr',

   // Provide an example URL you want to show to users after they signup.
   // This can be any API endpoint on your server, and you can use the
   // special {{api_key}} variable to automatically substitute in the API
   // key the user just signed up for.
   exampleApiUrl: 'https://api.ed.gov/data/teacher-salary-2?api_key={{api_key}}'

   // OPTIONAL: Provide extra content to display on the signup confirmation
   // page. This will be displayed below the user's API key and the example
   // API URL are shown. HTML is allowed. Defaults to ""
   // signupConfirmationMessage: '',

   // OPTIONAL: Provide a URL to your own contact page to link to for user
   // support. Defaults to "https://api.data.gov/contact/"
   // contactUrl: 'https://agency.gov/example',

   // OPTIONAL: Set to true to verify the user's e-mail address by only
   // sending them their API key via e-mail, and not displaying it on the
   // signup confirmation web page. Defaults to false.
   // verifyEmail: true,

   // OPTIONAL: Set to false to disable sending a welcome e-mail to the
   // user after signing up. Defaults to true.
   // sendWelcomeEmail: false,

   // OPTIONAL: Provide the name of your developer site. This will appear
   // in the subject of the welcome e-mail as "Your {{siteName}} API key".
   // Defaults to "api.data.gov".
   // siteName: 'Agency Developer Network',

   // OPTIONAL: Provide a custom sender name for who the welcome email
   // appears from. The actual address will be "noreply@api.data.gov", but
   // this will change the name of the displayed sender in this fashion:
   // "{{emailFromName}} <noreply@api.data.gov>". Defaults to "".
   // emailFromName: 'Agency Developer Network',

   // OPTIONAL: Provide an extra input field to ask for the user's website.
   // Defaults to false.
   // websiteInput: true,

   // OPTIONAL: Provide an extra checkbox asking the user to agree to terms
   // and conditions before signing up. Defaults to false.
   // termsCheckbox: true,

   // OPTIONAL: If the terms & conditions checkbox is enabled, link to this
   // URL for your API's terms & conditions. Defaults to "".
   // termsUrl: "https://agency.gov/api-terms/",
 };

 /* * * DON'T EDIT BELOW THIS LINE * * */
 (function() {
   var apiUmbrella = document.createElement('script'); apiUmbrella.type = 'text/javascript'; apiUmbrella.async = true;
   apiUmbrella.src = 'https://api.data.gov/static/javascripts/signup_embed.js';
   (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(apiUmbrella);
 })();
</script>
<noscript>Please enable JavaScript to signup for an <a href="http://api.data.gov/">api.data.gov</a> API key.</noscript>

{% endraw %}
