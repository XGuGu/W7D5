class Api::BenchesController < ApplicationController
  before_action :require_logged_in

  def index
    @benches = Bench.all
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:lat,:lng,:description,:seating,:picture_url)
  end
end
