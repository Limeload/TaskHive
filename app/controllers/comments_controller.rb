class CommentsController < ApplicationController
    #CREATE
        def create
            new_comment = Comment.create!(comment_params)
            render json: new_comment, status: :created
        end

    #READ
        def show
            comment = find_comment
            render json: comment, status: :ok
        end

    #UPDATE
        def update
            comment = find_comment
            comment.update!(comment_params)
            render json: comment, status: :ok
        end

    #DELETE
        def destroy
            comment = find_comment
            comment.destroy
            head :no_content
        end

    #PRIVATE AREA BELOW
    private 

    #FIND COMMENT(read, update, delete)
        def comment_params
            params.permit(
                :content,
                 :user_id,
                 :task_id,
                 :project_id
                 )
        end

    #COMMENT PARAMS(create, update)
        def find_comment
            Comment.find(params[:id])
        end
end
