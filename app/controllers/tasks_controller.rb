class TasksController < ApplicationController

    #CREATE
     def create
        new_task = Task.create!(task_params)
        render json: new_task, status: :created
     end

    #READ
    def index
        tasks = Task.all
        render json: tasks, status: :ok
    end

    def show
        task = find_task
        render json: task, status: :ok
    end

    def update
        task = find_task
        task.update!(task_params)
        render json: task, status: :accepted
    end

    #DELETE
    def destroy
        task = find_task
        task.destroy
        head :no_content 
    end

    #PRIVATE AREA BELOW
    private

    #TASK PARAMS(create)
     def task_params
        params.permit(
            :title,
            :description,
            :deadline,
            :priority,
            :user_id,
            :project_id,
            :completed
            )
     end

     #FIND TASK(read, delete)
     def find_task
        Task.find(params[:id])
     end
end
