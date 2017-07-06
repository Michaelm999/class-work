class Set
  def initialize
    @storage = []
  end
  def add_member(m)
    if not self.is_member? m
    @storage.push m
    end
  end
  def is_member?(m)
    @storage.include? m
  end
end

my_set = Set.new
p my_set
my_set.add_member 3
my_set.add_member 3
my_set.add_member 3
p my_set
p my_set.is_member? 3
p my_set.is_member? 5
