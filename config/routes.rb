Rails.application.routes.draw do

  get 'user/new'
  get 'user/create'
  get 'user/edit'
  get 'user/update'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'

  # Routes for main resources
  resources :items
  resources :purchases
  resources :item_prices

  # Semi-static page routes
  get 'home' => 'home#home', as: :home
  get 'about' => 'home#about', as: :about
  get 'contact' => 'home#contact', as: :contact
  get 'privacy' => 'home#privacy', as: :privacy
  
  resources :users
  resources :sessions
  get 'user/edit' => 'users#edit', :as => :edit_current_user
  get 'signup' => 'users#new', :as => :signup
  get 'login' => 'sessions#new', :as => :login
  get 'logout' => 'sessions#destroy', :as => :logout

  # Set the root url
  root :to => 'home#home'  

end
