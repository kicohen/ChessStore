class SchoolsController < ApplicationController
  layout "admin"

  include ChessStoreHelpers
  
  load_and_authorize_resource
  before_action :set_school, only: [:show, :edit, :update, :destroy]  

  def index
    @schools = School.active.alphabetical
  end

  def new
    @school = School.new
  end

  def create
    @school = School.create(school_params)
      if @school.save
        if current_user.role? :customer
          @cart = get_list_of_items_in_cart
          @shipping = calculate_cart_shipping
          @subtotal = calculate_cart_items_cost
          @total = @shipping + @subtotal
          @order = Order.new
        else
          @schools = School.active.alphabetical
        end
      else
        render action: 'new'
      end
  end

  def edit
  end

  def update
    if @school.update(school_params)
      redirect_to school_path(@school), notice: "Successfully updated #{@school.name}."
    else
      render action: 'edit'
    end
  end

  def show
  end

  private
  def set_school
    @school = School.find(params[:id])
  end

  def school_params
    params.require(:school).permit(:name, :street_1, :street_2, :city, :state, :zip, :min_grade, :max_grade)
  end
end
