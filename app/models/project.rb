class Project < ApplicationRecord
    #relationships
  belongs_to :user
  has_many :tasks
  has_many :comments

  #validations
  validates :name, presence: true
end
