[![npm version](https://badge.fury.io/js/fot.svg)](https://badge.fury.io/js/fot)

***FO - T***
======

Also known as "folder-template," **fot** is a simple tool that lets you start a project *without the hassle of creating the same folders over and over again.* **Create once... and never again.**


**Installation**
------------

Open your command line/terminal and type the following:
>**npm install fot -g**


**Setup**
-----

To let **fot** know where to look for, when cloning templates.
###To setup your installation of **fot** do the following:

1. Create a folder containing all of the templates you would like to use and navigate into that folder using your cmd/terminal.
2. Type the following in your cmd/terminal:  `fot here`
>Alternatively: You could use `fot set {{arg}}`
>Here - '**arg**' is the absolute path to ***inside*** your templates folder.

3. That's it, You're all set! Mom's gonna be really proud...

>Note: You can change your templates directory by doing the steps above with another path.

**Clear Path**
--------------

Accidentally set the wrong path? Just type the following to clear the templates path:

>**fot clear**

**Usage**
-----

###To clone a template simply:
1. Navigate into your project folders ***parent directory***.
2. Type `fot clone {{template name/folder name(inside your templates folder)}} {{OPTIONAL new foldername}}`


**EXAMPLE**
------------------
Billy is a developer. And with every project, Billy needs to create a lot of folders, files and most of the time needs to write the same boiler plate code **over and over again** UGH... Billy doesn't like this.

Trying to combat this problem, Billy stumbles upon ***FO - T***: the easiest tool to use for folder-templates.

Now Billy can just move all of his boiler plate folders and files(with the code) to one directory and clone the templates from there whenever he wants to start a new project! Billy loves this!

Billy does the following:
1. He creates a 'templates' folder in his documents because he finds that convenient.
2. In his command prompt, he goes inside the templates folder and does the following.
3. He then creates a template which he knows he will be using a lot in the future.
4.  Now he can clone any folder/file from inside the 'templates' folder to anywhere he likes, with **ease.**
5. He goes inside his 'projects' folder which is in his documents folder and types just ***ONE*** command to clone all of his files into the projects folder. Oh and he also renames it.

##Be smart like Billy, use ***FO - T*** , and save your **precious** time.


**LICENSE**
-------
MIT