# Trendy Todo App
A Javascript Todo App with all the trendy technologies  

Allows you to authenticate through JWT Tokens to a Django Rest Framework backend API to create and delete Todo's 
The Frontend can be served from a nginx server and/or cached with a CDN. 

The backend is totally separated and can run on another server


It doesn't supports patching todos or registering to the server, as it is just a proof of concept to find the best practices working with these technologies \.


## Trendy Technologies : 
### Frontend : 
* Semantic-Ui-React
* React
* Redux
### Backend:
* Django
* Django-Rest-Framework
* JWT Authentication

## Installation : 
### Backend :
Run `cd backend` \
Run `pip3 install djangorestframework djangorestframework-jwt` \
Run `python3 manage.py migrate` \
Create a user with `python3 manage.py createsuperuser` 

### Frontend :
Run `cd frontend` \
Run `npm install package.json` (Not tested yet, but it should work ?)

## Launch it !
Run `python3 manage.py runserver 0.0.0.0:8000` in the `backend` directory \
Run `npm start` in the `frontend` directory

Enjoy ! Your default Browser should open the Todo List !
