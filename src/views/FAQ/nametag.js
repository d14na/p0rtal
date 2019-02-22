module.exports = `
<h3>Namtetag Authentication</h3>

<ol>
    <li>
        User enters email + password
    </li>

    <li>
        An encrypted wallet is generated and 1/3 of its private key is saved to the LocalStorage of the web browser.
    </li>

    <li>
        User receives an email with another 1/3 of their private key; along with a signin link.
    </li>

    <li>
        After clicking the link, the user is authenticated by combining the email key with their browser key.
    </li>

    <li>
        To SECURELY signout, a user will have to remove the 1/3 key from their web browser, which will require them to repeat from step 1 again.
    </li>
</ol>

<p>
    * Please Note: After closing the web browser, your session is ended, and you will need to click the sign in link from your email again.
</p>

<p>
    ** Also Note: 1/3 of your private key is stored in D14na's Couch (cloud database).
    This is a BACKUP key, in the event you have forgotten your password, but still HAVE AT LEAST ONE OTHER KEY (in your browser, or email).
    This key can be delivered to the registered user via email or sms at any time.
</p>
`
