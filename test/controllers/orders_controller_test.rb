require 'test_helper'

class OrdersControllerTest < ActionController::TestCase
  test "should get mark_item_as_shipped" do
    get :mark_item_as_shipped
    assert_response :success
  end

end
