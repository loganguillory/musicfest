class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :artist_name, :genre
end
