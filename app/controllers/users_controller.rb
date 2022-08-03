class UsersController < ApplicationController
  before_action :set_user, only: [:show,  :destroy]

  def index
   @users = User.all
   render json: @users
    
  end

  # GET /users/1
  def show
    render json: @user
    if user
      render json: @user
    else
      render json: {message: "User Not Found"}
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)
    # session[:user_id] = user.id
    if @user.save
     render json:@user
    else
    render json: @user, status: :created
  end
end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  def destroy
    if @user
    @user.destroy
    render json: {message: 'User Succesfully deleted.'}, status: 200
    else
      render error: {error: "Unable to delete User"}, status: 400
    end
  
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password_digest)
    end
end
