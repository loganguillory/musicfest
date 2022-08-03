class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :concert_id
end
