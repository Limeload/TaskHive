class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :task
  has_one :project
end
