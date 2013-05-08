class Post < ActiveRecord::Base
  attr_accessible :content, :tag_list, :new_post
  acts_as_taggable
end
