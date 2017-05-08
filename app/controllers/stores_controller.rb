class StoresController < ApplicationController
  include ChessStoreHelpers

  def index
  	@items = Item.active.alphabetical  
  end

  def details
  	@item = Item.find(params[:id])
  end

  def cart
  	@cart = session[:cart]
    @cart = get_list_of_items_in_cart
  end

  def checkout
    @cart = get_list_of_items_in_cart
  	@order = Order.new
  end

  def add_to_cart
    id = params[:id]
    create_cart
    add_item_to_cart(id.to_s)
    @item = Item.find(params[:id])
    redirect_to stores_cart_path, notice: "Added #{@item.name} to your cart."
  end

  def remove_from_cart
    id = params[:id]
    create_cart
    remove_item_from_cart(id.to_s)
    @item = Item.find(params[:id])
    redirect_to stores_cart_path, notice: "Removed #{@item.name} from your cart."
  end

  def create
    @order = Order.new(order_params)
    @order.user = current_user
    @order.date = Date.today
    @order.grand_total = calculate_cart_items_cost
    if @order.save
      save_each_item_in_cart(@order)
      clear_cart
      redirect_to home_path, notice: "Checkout complete."
    else
      @cart = get_list_of_items_in_cart
      render action: 'checkout'
    end
  end

  def order_params
    params.require(:order).permit(:school_id, :grand_total, :credit_card_number, :expiration_year, :expiration_month)
  end
end
