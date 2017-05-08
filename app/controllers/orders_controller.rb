class OrdersController < ApplicationController
  load_and_authorize_resource
  before_action :set_order, only: [:show, :edit, :update]

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
    @order.user_id = current_user.id
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

  def mark_item_as_shipped
    @order_item = OrderItem.find(params[:order_item_id])
    @order_item.shipped
    respond_to do |format|
      if @order_item.nil?
        format.html { redirect_to home_path, notice: "Failed." }
        format.js
      else
        format.html { redirect_to home_path, notice: "Successfully shipped order item" }
        format.js 
      end
    end
  end

  private
  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:date, :school_id, :user_id, :grand_total, :payment_receipt, :credit_card_number, :expiration_year, :expiration_month)
  end

end
