class ProjectsController < ApplicationController
    #CREATE
    def create
        new_project = Project.create!(project_params)
        render json: new_project, status: :created
    end

    # READ
    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def show
        project = find_project
        render json: project, status: :ok
    end

    #UPDATE
    def update
        project = find_project
        project.update!(project_params)
        render json: project, status: :ok
    end

    #DELETE
    def destroy
        project = find_project
        project.destroy
        head :no_content
    end

    #PRIVATE AREA BELOW

    private
    #USER PARAMS(create, update)
    def project_params
        params.permit(:name, :user_id)
    end

    #Find User(read, Update, delete)
    def find_project
        Project.find(params[:id])
    end
end


