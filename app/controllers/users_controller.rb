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
        if user
        render json: user, status: :ok
        else
        render json: { error: "User not found" }, status: :404
        end
    end

    #SESSIONS
    def show_session
        render json: { error: "Not logged in" }, status: 401 unless session.include? :user_id

        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "User not found" }, status: 404
        end
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
        params.permit(:name, :email, :password, :password_confirmation)
    end

    #Find User(read, Update)
    def find_user
        User.find(params[:id])
    end
end
