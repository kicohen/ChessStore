class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :edit, :update]

  def index
    @employees = User.active.employees.alphabetical
  end

  def show
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.role = "admin"
    if @user.save
      session[:user_id] = @user.id
      redirect_to home_path, notice: "Thank you for signing up! You are now logged in."
    else
      render action: 'new'
    end
  end

  def edit
  end

  def update
  end

  private
  def set_employee
    @employee = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
  

end
