class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    #CREATE
    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    # READ
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: @current_user
    end

    #UPDATE
    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    #DELETE
    def destroy
        user.destroy
    end

    #PRIVATE AREA BELOW

    private
    #User Params (create, update)
    def user_params
        params.permit(:name, :email, :password)
    end

    #Find User(read, Update)
    def find_user
        User.find(params[:id])
    end
end
