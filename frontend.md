# todoapp
simple todo list application

frontend:
implementation
- written in react.js
- styling libraries can be used
- comment code appropriately
authentication:
- simple authentication, using username and password
- auth functionality should support login, register, and forgot password
- application should not be accessable without users being logged in
screens:
- home
  * homescreen displays list of current users todos
  * if a todo is clicked, user brought to todo detail screen
  * if user clicks on "add todo" they are brought to the add a todo screen
- todo detail
  * selected todo will be displayed and convey info: (title, date, description)
  * if user clicks on "edit todo", they will be brought to an edit todo screen
- add todo
  * screen display with a form with the todo info that the user will submit
  * upon successful submit the user will be brought to the todo detail screen
- edit todo
  * similar to add todo but will have the current todo information pre-filled in form
  * as with add todo screen, successful submission will bring user to the todo details screen
- delete todo
  * decide how to implement 
