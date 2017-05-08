Rails.application.routes.draw do

  # Semi-static page routes
  get 'home' => 'home#home', as: :home
  get 'about' => 'home#about', as: :about
  get 'contact' => 'home#contact', as: :contact
  get 'privacy' => 'home#privacy', as: :privacy

  # Routes for main resources
  resources :items
  resources :purchases
  resources :item_prices
  resources :schools
  resources :orders
  resources :employees
  
  get 'stores/index' 
  get 'stores/cart'  
  get 'stores/checkout'
  post 'stores/create'
  get 'stores/details/:id', to: 'stores#details', :as => 'details'
  get 'stores/add_to_cart/:id', to: 'stores#add_to_cart', :as => 'add_to_cart'
  get 'stores/remove_from_cart/:id', to: 'stores#remove_from_cart', :as => 'remove_from_cart'
                     
  get 'orders/mark_item_as_shipped/:order_item_id', to: 'orders#mark_item_as_shipped', :as => 'mark_item_as_shipped'

  get 'user/edit' => 'users#edit', :as => :edit_current_user
  get 'users/new'   
  get 'users/create'
  get 'users/edit'
  get 'users/update'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  
  resources :users
  resources :sessions
  get 'signup' => 'users#new', :as => :signup
  get 'login' => 'sessions#new', :as => :login
  get 'logout' => 'sessions#destroy', :as => :logout

  # Set the root url
  root :to => 'home#home'  

end
