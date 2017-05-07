class OrdersController < ApplicationController
  load_and_authorize_resource
  before_action :set_item, only: [:show, :edit, :update]

  def index
    if current_user.role? :customer
      @orders = Order.chronological.for_user(current_user.id)
    else
      @orders = Order.chronological
    end
  end

  def new
    @order = Order.new
  end

  def edit
  end

  def create
    @order = Order.new(order_params)
    
    if @order.save
      redirect_to order_path(@order), notice: "Successfully created new Order."
    else
      render action: 'new'
    end
  end

  def update
    if @order.update(order_params)
      redirect_to order_path(@order), notice: "Successfully updated Order."
    else
      render action: 'edit'
    end
  end

  def show
    @school = @order.school
    @order_items = @order.order_items
  end

  private
  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:date, :school_id, :user_id, :grand_total, :payment_receipt, :credit_card_number, :expiration_year, :expiration_month)
  end

end
