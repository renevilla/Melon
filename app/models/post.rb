class Post < ActiveRecord::Base
  attr_accessible :content, :tag_list
  acts_as_taggable
end
