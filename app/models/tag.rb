class Tag < ApplicationRecord
        #relationships
    has_many :task_tags
    has_many :tasks, through: :task_tags

    #validations
    validates :name, presence: true
end
