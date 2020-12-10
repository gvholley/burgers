class CreateBurgers < ActiveRecord::Migration[6.0]
  def change
    create_table :burgers do |t|
      t.string :name
      t.string :image
      t.string :slug

      t.timestamps
    end
  end
end
