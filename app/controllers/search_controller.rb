class SearchController < ApplicationController
  def input
  end

  def output
  	search_text = params[:search]
  	@items = Item.search(search_text)
  	@schools = School.search(search_text)
  	# @customers = User.customers.search(search_text)
  	# @employees = User.employees.search(search_text)
  	p "Searching"
  	p @items
  	p @schools
  	# p @customers
  	# p @employees
  end
end
