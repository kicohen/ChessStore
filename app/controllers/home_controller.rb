class HomeController < ApplicationController
  def home
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