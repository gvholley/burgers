class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :burger_id
end
