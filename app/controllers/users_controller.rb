class UsersController < ApplicationController
  load_and_authorize_resource
  layout :resolve_layout

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.role = :customer
    if @user.save
      session[:user_id] = @user.id
      redirect_to home_path, notice: "Thank you for signing up! You are now logged in."
    else
      render action: 'new'
    end
  end

  def edit
    if current_user.nil?
      redirect_to users_new_path
    end
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      redirect_to home_path, notice: "Your profile has been updated."
    else
      render action: 'edit'
    end
  end

  def index
    @users = User.active.customers.alphabetical
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def resolve_layout
    case action_name
    when "index"
      "admin"
    else
      "application"
    end
  end
  
end
