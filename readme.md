# SkonkWorks-API
-----------------

This seed kit should enable you to build out robust API applications for Digital Ventures applications.

## Getting Started
----
Install Node.js and npm:

https://nodejs.org

Make a new repository for your new app:

http://github.com

Clone this seed kit repo:

    $ git clone --bare https://github.com/Argo-DigitalVentures/SkonkWorksAPI.git
    
    $ cd SkonkWorksAPI.git
    
Push the clone to your new app repo:

    $ git push --mirror https://github.com/exampleuser/new-repository.git
Check your new repo and confirm it worked. If so, go ahead and delete the source clone:

    $ cd ..

    $ rm -rf SkonkWorksAPI.git
Finally, clone your new repo and start using it:

    $ git clone https://github.com/exampleuser/new-repository.git

    $ cd new-repository
    
## Running Locally
----
Install the modules:
    
    $ npm install
    
Run the server

    $ npm run serve
    
This will run the server at port `3000`, and a debugger will be running at port `5858`

To verify installation, navigate in your browser to

http://localhost:3000/api/example

and you should see:

![Imgur](http://i.imgur.com/pydpamO.jpg)

### Some things to note:

- This seed kit is written in `es6 syntax` and also uses es7's `async await` functionality
- No formal deploy tasks have been written, in order to keep options open
- This seed kit comes with `mongoose`, other data stores or libraries will have to be updated/installed
- This seed kit will be constantly updated