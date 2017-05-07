require 'test_helper'

class StoresControllerTest < ActionController::TestCase
  test "should get remove_from_cart" do
    get :remove_from_cart
    assert_response :success
  end

end
