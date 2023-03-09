Rails.application.routes.draw do
  resources :task_tags, only: [:create, :show]
  resources :tags, only: [:index, :show, :create, :update, :destroy ]
  resources :projects, only: [:index, :show, :create, :update, :destroy ]
  resources :comments, only: [:create, :show, :update, :destroy]
  resources :tasks, only: [:index, :show, :update, :create, :destroy ]
  resources :users, only: [:index, :show, :create, :update]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
    # Defines the root path route ("/")
  # root "articles#index"
end
