class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :index]

    #CREATE
    def create
        user  = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end

    # READ
    def index
        users = User.all
        render json: users, status: :ok
    end

    def me
        render json: @current_user, include: ['projects', 'projects.tasks', 'tasks'], status: :ok
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
