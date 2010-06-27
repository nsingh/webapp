class CreatePhylochipResults < ActiveRecord::Migration
  def self.up
    create_table :phylochip_results do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :phylochip_results
  end
end
