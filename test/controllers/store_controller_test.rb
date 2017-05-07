require 'test_helper'

class StoreControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get details" do
    get :details
    assert_response :success
  end

  test "should get cart" do
    get :cart
    assert_response :success
  end

  test "should get checkout" do
    get :checkout
    assert_response :success
  end

end
