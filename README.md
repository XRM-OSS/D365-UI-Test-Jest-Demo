# D365-UI-Test Jest Demo

## Requirements
Make sure that Node.js is installed on your computer. If it is not, you can download the latest LTS version for your OS [here](https://nodejs.org/de/download/).

## Getting Started
This is the demo project for getting started with D365-UI-Test using Jest.
Just clone this repo and run `npm ci`.

! Important !
> Afterwards create a file in the parent folder of your local repository containing your CRM url, CRM user email and CRM user password delimited by comma such as:
`https://orgname.crm4.dynamics.com,username@d365uitest.onmicrosoft.com,yourpassword`

Run npm `run test` and chrome will be started, login to your organization and open a new account form.
You can now adjust this project by adding more tests for opening a specific UCI app, setting and retrieving field values and much more.

Be sure to check out the official browser extension which can assist you in defining UI tests for Dynamics 365 CE from [here](https://github.com/XRM-OSS/D365-UI-Test-Designer).

Test reports will be found in the reports directory, one as XML and one as HTML.
