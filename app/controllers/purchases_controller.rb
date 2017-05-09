class PurchasesController < ApplicationController
  layout "admin"
  load_and_authorize_resource
  def index
    @purchases = Purchase.chronological.to_a
  end

  def new
    @purchase = Purchase.new
    respond_to do |format|
      format.html
      @item = Item.find(params[:item_id])
      format.js
    end
  end

  def create
    @purchase = Purchase.new(purchase_params)
    @purchase.date = Date.current
    respond_to do |format|
      if @purchase.save
        format.html {redirect_to purchases_path, notice: "Successfully added a purchase for #{@purchase.quantity} #{@purchase.item.name}."}
        @item = @purchase.item
        format.js
      else
        render action: 'new'
      end
    end
  end

  private
  def purchase_params
    params.require(:purchase).permit(:item_id, :quantity)
  end
  
end