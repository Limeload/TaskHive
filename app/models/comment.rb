class Comment < ApplicationRecord
  #relationships
  belongs_to :user
  belongs_to :task
  belongs_to :project

  validates :content, length: {maximum: 100}

end
