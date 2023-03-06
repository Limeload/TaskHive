class ApplicationController < ActionController::API
  #SESSIONS & COOKIES
  include ActionController::Cookies

  def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

#ERROR HANDLING
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

#ERROR HANDLING HELPER METHODS
  #RECORD NOT FOUND(read, update, delete)
  def render_not_found(error)
     render json: {error: error.message }, status: :not_found
  end

  #RECORD INVALID(create, update)
  def render_record_invalid
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

end
