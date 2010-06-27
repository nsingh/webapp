require 'test_helper'

class SpecimensControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end
  
  def test_show
    get :show, :id => Specimen.first
    assert_template 'show'
  end
  
  def test_new
    get :new
    assert_template 'new'
  end
  
  def test_create_invalid
    Specimen.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end
  
  def test_create_valid
    Specimen.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to specimen_url(assigns(:specimen))
  end
  
  def test_edit
    get :edit, :id => Specimen.first
    assert_template 'edit'
  end
  
  def test_update_invalid
    Specimen.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Specimen.first
    assert_template 'edit'
  end
  
  def test_update_valid
    Specimen.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Specimen.first
    assert_redirected_to specimen_url(assigns(:specimen))
  end
  
  def test_destroy
    specimen = Specimen.first
    delete :destroy, :id => specimen
    assert_redirected_to specimens_url
    assert !Specimen.exists?(specimen.id)
  end
end
