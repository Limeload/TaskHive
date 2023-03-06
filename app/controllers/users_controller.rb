class UsersController < ApplicationController

    #CREATE
    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    # READ
    def index
        users = User.all
        render json: users, status: :ok 
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    #UPDATE
    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    #PRIVATE AREA BELOW

    private
    #User Params (create, update)
    def user_params
        params.permit(:name,:email, :password )
    end

    #Find User(read, Update)
    def find_user
        User.find(params[:id])
    end
end
