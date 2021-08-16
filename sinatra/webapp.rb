require 'sinatra'

class WebApp < Sinatra::Base
  get '/' do
    'Hello, Sinatra!'
  end
end
