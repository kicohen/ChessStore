class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.authenticate(params[:login], params[:password])
    if user
      session[:user_id] = user.id
      if user.role? :customer
        redirect_to home_path, notice: "Logged in successfully."
      else
        redirect_to items_path, notice: "Logged in as an employee."
      end
    else
      flash.now[:alert] = "Invalid login or password."
      redirect_to home_path, alert: "Invalid login or password."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path, notice: "You have been logged out."
  end
end