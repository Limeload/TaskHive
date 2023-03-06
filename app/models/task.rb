class Task < ApplicationRecord
  #relationships
  belongs_to :project
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :task_tags, dependent: :destroy
  has_many :tags, through: :task_tags

  #validations
  validates :priority, inclusion: 1...10
  validates :title, presence: true
  validates :title, length: { maximum: 50}


end
