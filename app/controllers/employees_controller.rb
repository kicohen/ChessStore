class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :edit, :update]

  def index
    @employees = User.active.employees.alphabetical
  end

  def show
  end

  def new
    @employee = User.new
  end

  def create
    @employee = User.new(user_params)
    @employee.role = "admin"
    if @employee.save
      session[:user_id] = @employee.id
      redirect_to home_path, notice: "Successfully created new user."
    else
      render action: 'new'
    end
  end

  def edit
  end

  def update
    if @employee.update(user_params)
      redirect_to employee_path(@employee), notice: "Successfully updated #{@employee.name}."
    else
      render action: 'edit'
    end
  end

  private
  def set_employee
    @employee = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation, :role, :phone)
  end
  

end
