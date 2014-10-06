sudoku
======

Javascript sudoku app made with the help of Sinatra, Underscore.js, Sass, and Handlebars.js

The bulk of the front-end javascript is in 2 files, sudoku.js and dataModel.js. 
The sudoku algorithms can be found in the DataModel module, while the setup and view code is in sudoku.js.

Sinatra was used as a simple ruby web server due to it's simple setup and my experience with Ruby. Underscore.js was used for utility in the DataModel. Handlebars.js was used for the templating due to simplicity and my experience with it. Ideally my templates would be kept in separate files, but Handlebars doesn't deal with that by default. Sass was used because it is awesome (and the $variables help keep css clean and easily modifiable)

TODO on this project:
  - generate different sudoku puzzles (it uses the same number layout every time)
  - add more helpful error messages (highlight a row/column/square that is incorrect)
  - finish adding tests
  - host it on Heroku (coming soon)
