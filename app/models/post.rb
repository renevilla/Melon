class Post < ActiveRecord::Base
  attr_accessible :content, :tag_list, :new_post
  acts_as_taggable
 
#validates :new_post, :length => { :minimum => 1 }

end
