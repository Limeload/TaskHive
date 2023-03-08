class User < ApplicationRecord
    #relationships
    has_many :tasks
    has_many :comments
    has_many :projects
    has_secure_password

    #validations
    validates :name, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum:6, maximum:15}
    validates :password, confirmation: true
end
