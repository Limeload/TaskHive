class TagsController < ApplicationController
    #CREATE
        def create
            new_tag = Tag.create!(tag_params)
            render json: new_tag, status: :created
        end

    #READ
        def index
            tags = Tag.all
            render json: tags, status: :ok
        end

        def show
            tag = find_tag
            render json: tag, status: :ok
        end

    #UPDATE
        def update
            tag = find_tag
            tag.update!(tag_params)
            render json: tag, status: :ok
        end

    #DELETE
        def destroy
            tag = find_tag
            tag.destroy
            head :no_content
        end

    #PRIVATE AREA BELOW
    private

    #FIND TAG(read, update, destroy)
        def find_tag
            Tag.find(params[:id])
        end

    #TAG PARAMS(create, update)
        def tag_params
            params.permit(:name)
        end
end
