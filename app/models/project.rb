class Project < ApplicationRecord
    #relationships
  belongs_to :user
  has_many :tasks, dependent: :destroy
  has_many :comments, dependent: :destroy

  #validations
  validates :name, presence: true
  validates :name, length: {maximum: 50}

end
