require 'test_helper'

class SpecimenTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Specimen.new.valid?
  end
end
