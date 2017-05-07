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
  end
end
