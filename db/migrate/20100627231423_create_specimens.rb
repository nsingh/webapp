class CreateSpecimens < ActiveRecord::Migration
  def self.up
    create_table :specimens do |t|
      t.string :source
      t.string :assay_choice
      t.string :amplification
      t.string :control
      t.date :disposition
      t.boolean :failed
      t.timestamps
    end
  end
  
  def self.down
    drop_table :specimens
  end
end
