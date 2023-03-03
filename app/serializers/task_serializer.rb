class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :priority, :completed
  has_one :project
  has_one :user
end
