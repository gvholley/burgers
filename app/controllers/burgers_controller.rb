module Api
  module V1
    class BurgersController < ApplicationController

      def index
        burgers = Burger.all
        render json: BurgerSerializer.new(burgers, options).serialized_json
      end


      def show
        burger = Burger.find_by(slug: params[:slug])
        render json: BurgerSerializer.new(burger).serialized_json
      end

      def create
        burger = Burger.new(burger_params)

        if burger.save
          render json: BurgerSerializer.new(burger, options).serialized_json
        else
          render json: { error: burger.errors.messages }, status: 422
        end
      end

      def update
        burger = Burger.find_by(slug: params[:slug])

        if burger.update(burger_params)
          render json: BurgerSerializer.new(burger).serialized_json
        else
          render json: { error: burger.errors.messages }, status: 422
        end
      end

      def destroy
        burger = Burger.find_by(slug: params[:slug])

        if burger.destroy
          head :no_content
        else
          render json: { error: burger.errors.messages }, status: 422
        end
      end

      private
      def burger_params
        params.require(:burger).permit(:name, :image)
      end

      def options
        @options ||= { include: %i[reviews]}
    end
  end
end
