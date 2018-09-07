class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id]);
    render :show
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: ['Username already exists'], status: 404
    end
  end

  private
  def user_params
    params.permit(:user).require(:username,:password)
  end

end
