class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.datetime :deadline
      t.integer :priority
      t.integer :user_id
      t.integer :project_id
      t.boolean :completed

      t.timestamps
    end
  end
end
