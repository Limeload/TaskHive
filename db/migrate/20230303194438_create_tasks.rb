class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.datetime :deadline
      t.integer :priority
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :completed

      t.timestamps
    end
  end
end
