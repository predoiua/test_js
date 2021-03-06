Create a SPA (Single Page Application)
======================================

Architecture
------------
One page with 4 divs:
- header
- footer
- body
- message

Folders
-------
App
	- contains all global objects : user, current folder
	- vent
	- layout	Each of these areas corresponds to a region.

Views 
	- are recreated and displayed in region.
	- receive model and jquery selector
	- If a view needs to send info/notify its parents it use an event ( app.vent )
	
Controller 
	- is the one who create Models and Views.
	- listen to
Router
	- just entry point
	
For now:
	- no module
	- no behaviour

1 - Display user details
	(Send trigger "user:details"
	This objects is caught by App.) -> can be replaced with controller listen on view events
	It get the info from exiting view( model) if necessary, create and display the new view. 
	In Ok it trigger : "user:change"

2 - change user language settings
	is treated in app on "user:change" handler

3 - list view -> display details
	list contains an active link #{report}/details that is handled in router 

4 - warning/error/waiting windows
	( with behaviour ? - no )
	I use commands for this. I have a listener in controller on a global channel, it listen for :
		- show:message 
		- show:warning
		- show:waiting
		- close:waiting
	all these the commands receive a text as param, and display a view as result.
	Usage:
		var globalCh = Backbone.Wreqr.radio.channel('global');
		globalCh.commands.execute('show:message', 'please show this message');
 
General:
- for JS file: use Sublime Text JSList 
My user settings:
{
	"translate_tabs_to_spaces": true
    ,"draw_white_space": "all" 
}


1. Create start skeleton 

-- Create working dir
mkdir test_js
cd test_js

npm install -g bower
-- check if is installed
bower --version

2. Create API implementation

-- Launch Sublime Text. Open "connection" folder
-- Create "api.html" file in "app/assets"
-- add call to all API that are needed
-- create corresponding json respons.
Eg. api.html
<html>
<body>
API specifications:
    <table>
        <tr>
            <td>Get content</td>
            <td><a href="/v0/content">/v0/content</a></td>
        </tr>
    </table>
</body>
</html>
create assets/v0/content text file containing json response.
For example:
[
   {
    "code":"rep1"
    ,"name":"Report Name"
    }
]
go to : http://localhost:3333/api.html and test it
Optional : install Postman in Chrome for REST call testing.


4. Create an empty folder called "connection"
Get the following files :bower.json, package.json, config.coffee
4.1. Bower
create the following file: bower.json
In config file: version =  null => latest version.
run : bower install
4.2 Brunch
create the following file: package.json
run : npm install

config.coffee
run : brunch b

5. Create folder structure
app
	assets  - for static html. index.html = starting point
		img		
		locales
			en
			fr
	base  - base class for Backbone, Marionette elements
	models
	views
	templates
test
vendor

6. Files 
Create index.html 
	- include required css, jss
	- call initialize.js
Create initialize.js 
	- create application
	- other initializations
Create application.js 
	- main application
	- contains a LayoutView
LayoutView.js
	- linked to "body"
	- define application regions
	- it's template is "main.hbs"
ContentView.js
	 - for now no matter what template it use
Add router/controller	 
	- 1:1 relation between them 
	- controller has a reference to app
	

7. Internationalization
i18next
configure bower.json
and add :
"dependencies": {
.....
	,"i18next": null
},
null = latest version.

Add handlebar helper: file hbs_helper.js in vendor/lib
Include this file in config.coffee


Naming convention
================
- all "private" members in a class starts with "_"
- class name starts with uppercase
- user JSList for code validation.

Resources
=========
Set dev env
https://www.youtube.com/watch?v=2pFL66qXcTE 
Views
http://www.artandlogic.com/blog/2013/03/a-visual-guide-to-marionette-js-views/
Link regions
http://martinholman.co.nz/blog/2013/02/03/backbone-dot-marionette-anti-pattern/

http://blog.joanboixados.com/skeleton-for-a-backbone-marionette-application-using-require-js-bower-grunt-and-less/
Dialog
http://www.backbonerails.com/screencasts/building-dialogs-with-custom-regions

http://stackoverflow.com/questions/11410059/suggested-bootstrap-boilerplate-sample-for-backbone-marionette-application

