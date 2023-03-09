class ApplicationController < ActionController::API
  # SESSIONS & COOKIES
  include ActionController::Cookies
  before_action :authorize

  # ERROR HANDLING
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

  # ERROR HANDLING HELPER METHODS
  # RECORD NOT FOUND(read, update, delete)
  def render_not_found(error)
     render json: {error: error.message }, status: :not_found
  end

  # RECORD INVALID(create, update)
  def render_record_invalid invalid
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

  # PRIVATE
  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized, please login"] }, status: :unauthorized unless @current_user
  end

end
