# D365-UI-Test Jest Demo
This is the demo project for getting started with D365-UI-Test using Jest.
Just clone this repo and run `npm ci`.

Afterwards create a file `C:\temp\settings.txt` with your CRM url, CRM user email and CRM user password delimited by comma such as:
`https://orgname.crm4.dynamics.com,username@d365uitest.onmicrosoft.com,yourpassword`

Run npm `run test` and chrome will be started, login to your organization and open a new account form.
You can now adjust this project by adding more tests for opening a specific UCI app, setting and retrieving field values and much more.

Test reports will be found in the reports directory, one as XML and one as HTML.