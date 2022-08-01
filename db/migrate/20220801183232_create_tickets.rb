class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :tickets_available
      t.integer :user_id
      t.integer :concert_id

      t.timestamps
    end
  end
end
