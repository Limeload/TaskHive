class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :tasks 
end
