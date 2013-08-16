class Topic < ActiveRecord::Base
  attr_accessible :body, :name, :title, :tag, :attachment


  belongs_to :user
  has_many :posts, :dependent => :destroy
  has_attached_file :attachment
end
