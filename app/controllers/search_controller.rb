class SearchController < ApplicationController
  def input
  end

  def output
  	search_text = params[:search]
  	@items = Item.search(search_text)
    if logged_in?
    	@schools = School.search(search_text)
      if current_user.role? :manager or current_user.role? :admin
    	  @customers = User.customers.search(search_text)
  	    @employees = User.employees.search(search_text)
      end
    end
  end
end
