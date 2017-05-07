Rails.application.routes.draw do

  get 'stores/create'

  # Semi-static page routes
  get 'home' => 'home#home', as: :home
  get 'about' => 'home#about', as: :about
  get 'contact' => 'home#contact', as: :contact
  get 'privacy' => 'home#privacy', as: :privacy

  # Routes for main resources
  resources :items
  resources :purchases
  resources :item_prices
  resources :users
  resources :schools
  resources :orders
  resources :employees

  get 'stores/index'
  get 'stores/details'
  get 'stores/cart'
  get 'stores/checkout'
  get 'stores/add_to_cart/:id', to: 'stores#add_to_cart', :as => 'add_to_cart'
  get 'stores/remove_from_cart/:id', to: 'stores#remove_from_cart', :as => 'remove_from_cart'

  get 'user/new'
  get 'user/create'
  get 'user/edit'
  get 'user/update'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :users
  resources :sessions
  get 'user/edit' => 'users#edit', :as => :edit_current_user
  get 'signup' => 'users#new', :as => :signup
  get 'login' => 'sessions#new', :as => :login
  get 'logout' => 'sessions#destroy', :as => :logout

  # Set the root url
  root :to => 'home#home'  

end
