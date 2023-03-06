class Task < ApplicationRecord
  #relationships
  belongs_to :project
  belongs_to :user
  has_many :comments
  has_many :task_tags
  has_many :tags, through: :task_tags

  #validations
  validates :priority, inclusion: 1...10

end
