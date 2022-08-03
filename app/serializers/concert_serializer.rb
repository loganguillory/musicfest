class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :artist_name, :genre, :date, :time
  has_many :reviews
end
