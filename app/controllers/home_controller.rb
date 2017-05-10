class HomeController < ApplicationController
  def home
    if logged_in?
      if current_user.role? :admin
        redirect_to items_path
      elsif current_user.role? :shipper
        redirect_to orders_path
      elsif current_user.role? :manager
        redirect_to items_path
      end
    end
  end

  def about
    redirect_to home_path(anchor: 'about')
  end

  def store
    redirect_to home_path(anchor: 'store')
  end

  def contact
    redirect_to home_path(anchor: 'contact')
  end

  def privacy
    redirect_to home_path(anchor: 'privacy')
  end
end