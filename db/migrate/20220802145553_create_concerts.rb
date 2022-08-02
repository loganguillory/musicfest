class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :artist_name
      t.string :genre
      t.integer :date
      t.integer :time
    
      t.timestamps
    end
  end
end
