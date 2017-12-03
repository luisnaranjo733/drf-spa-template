# drf-spa-template
A DRF - SPA template project that allows user to view shopping lists.

* Backend
  * Python 3
  * Django 2.0
  * Django Rest Framework
  * Custom Django Admin site
  * Sample models
  * Serializers for sample models
  * Session based auth
  * No prod db
  * No prod server
    
* Frontend
  * View framework (React)
  * State manager (Redux)
  * Router (react-router)
  * Networking library (Axios)
  * Session based auth support (leveraging Django's built in session framework)
  * / redirects to /login?next=/
  * / loads data from /api/shopping into SPA
  * No CSS frameworks

* Deployment batteries not included
  * Follow instructions here https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04 (tested with this repo and confirmed to be good)
