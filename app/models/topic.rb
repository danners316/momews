class Topic < ActiveRecord::Base
  attr_accessible :body, :name, :title, :tag, :attachment


  belongs_to :user
  has_many :posts, :dependent => :destroy
  has_attached_file :attachment,
         styles: {
          thumb: '100x100>',
          square: '250x250#',
          medium: '300x300>'
      }

  def self.search(search_query)
    if search_query
      find(:all, :conditions => ['title LIKE ?', "%#{ search_query}%"])
    else
      find(:all)
    end
  end

end
