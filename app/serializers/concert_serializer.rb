class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :time, :integer, :artist_id, :integer
end
