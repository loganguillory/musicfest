class User < ApplicationRecord
    has_many :reviews
    has_many :concerts, through: :reviews
end
