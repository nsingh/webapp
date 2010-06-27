class SpecimensController < ApplicationController
  def index
    @specimens = Specimen.all
  end
  
  def show
    @specimen = Specimen.find(params[:id])
  end
  
  def new
    @specimen = Specimen.new
  end
  
  def create
    @specimen = Specimen.new(params[:specimen])
    if @specimen.save
      flash[:notice] = "Successfully created specimen."
      redirect_to @specimen
    else
      render :action => 'new'
    end
  end
  
  def edit
    @specimen = Specimen.find(params[:id])
  end
  
  def update
    @specimen = Specimen.find(params[:id])
    if @specimen.update_attributes(params[:specimen])
      flash[:notice] = "Successfully updated specimen."
      redirect_to @specimen
    else
      render :action => 'edit'
    end
  end
  
  def destroy
    @specimen = Specimen.find(params[:id])
    @specimen.destroy
    flash[:notice] = "Successfully destroyed specimen."
    redirect_to specimens_url
  end
end
