class ItemPricesController < ApplicationController
  layout "admin"
  
  load_and_authorize_resource
  
  def index
    @active_items = Item.active.alphabetical.to_a
  end

  def new
    @item_price = ItemPrice.new
  end

  def create
    @item_price = ItemPrice.new(item_price_params)
    @item_price.start_date = Date.current
    respond_to do |format|
      if @item_price.save
        @item = @item_price.item
        format.html {redirect_to item_path(@item), notice: "Changed the price of #{@item.name}."}
        p "WOrked"
        @price_history = @item_price.item.item_prices.chronological.wholesale.to_a
        @manufacturer_price_history = @item_price.item.item_prices.chronological.manufacturer.to_a
        format.js
      else
        p "Didnt work"
        format.html {render action: 'new'}
        format.js
      end
    end
  end

  private
  def item_price_params
    params.require(:item_price).permit(:item_id, :price, :category)
  end
  
end