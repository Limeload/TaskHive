class TaskTag < ApplicationRecord
      #relationships
  belongs_to :task
  belongs_to :tag
end
