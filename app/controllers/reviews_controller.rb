class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = @current_user.Review.new(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render error: { error: 'Unable to create review.'}, status: 400
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { error: 'Unable to update Review.'}, status: 400
    end
  end

  # DELETE /reviews/1
  def destroy
    if @review
        @review.destroy
        render json: {message: 'Review sucessfully deleted.'}, status: 200
    else 
      render json: {error: 'Unable to delete Review.'}, status: 400
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.permit(:comment, :user_id, :concert_id)
    end
end
