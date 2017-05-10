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
    if logged_in?
      if current_user.role? :admin or current_user.role? :manager
        @users = User.active.customers.alphabetical.paginate(:page => params[:page])
      else
        redirect_to root_url
      end
    else
      redirect_to root_url 
    end  
  end

  def show
    @user = User.find(params[:id])
    @orders = Order.where(user_id: @user)
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :first_name, :last_name, :phone)
  end

  def resolve_layout
    if action_name == "index"
      "admin"
    elsif action_name == "show" and current_user.role? :customer
      "application"
    elsif action_name == "edit" and not current_user.role? :customer
      "admin"
    elsif action_name == "show"
      "admin"
    else 
      "application"
    end
  end
  
end
