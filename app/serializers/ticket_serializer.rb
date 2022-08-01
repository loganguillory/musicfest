class TicketSerializer < ActiveModel::Serializer
  attributes :id, :tickets_available, :integer, :user_id, :concert_id
end
