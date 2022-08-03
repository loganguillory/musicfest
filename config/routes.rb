Rails.application.routes.draw do
  # namespace :api do
  
  resources :concerts, only: [:index, :show, :update, :destroy]
  resources :reviews
  resources :users, only: [:index, :show, :create, :destroy]
  
  post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destory"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
