# Pizza-web
Porject to create your own pizza using angujarjs and django

Client
============

Requirements:
  - angularjs
  - bootstrap

How to use:

- Copy folder to an apache server and execute it
Considerations:

  - Api end point is located in file js/pizza/IngCtrl.js , currently is pointing to localhost, please change it if necessary.
  - To update javascript requirements execute bower [http://bower.io/]
  - For development you can use grunt (executing grunt for live watching and compiling) [http://gruntjs.com/]

Backend
=========

Requirements:
  - Python 2.7.9+
  - Pip
  - Django 1.9.6
  - django-cors-headers 1.1.0

How to use:
  - going to pizzaweb_backend/pizzaweb
  - python manage.py runserver (to execute python built in server) [Please make sure that client is connecting to this ip]

Considerations:
  - To automatically install requirements use pip install -r /path/to/requirements.txt
  - To add new ingredients just go to http://ip:port/admin (user: admin , password: admin1234)
  - Using sqlite for now
  - endpoint http://ip:port/api/ingredients
