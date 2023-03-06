class TaskTagsController < ApplicationController

    #CREATE
        def create
           new_task_tag = TaskTag.create!(task_tag_params)
           render json: new_task_tag, statusL: :created
        end

    #READ
    def show
        task_tag = find_task_tag
        render json: task_tag, status: :ok
    end

    #DELETE
        def destroy
            task_tag = find_task_tag
            task_tag.destroy
            head :no_content
        end

    #PRIVATE AREA BELOW
    def task_tag_params
        params.permit(:task_id, :tag_id)
    end

    #FIND TASK TAG(read, delete)
    def find_task_tag
        TaskTag.find(params[:id])
    end
end
