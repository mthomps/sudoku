require 'sinatra'

class Sudoku < Sinatra::Base

  get '/' do 
    haml :index
  end
end
