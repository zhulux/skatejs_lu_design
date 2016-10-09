helpers_folder = File.expand_path '../lu_design/components/**/*_helper.rb', __FILE__
Dir[helpers_folder].each{|file| require file}
require 'lu_design/engine'

module LuDesign
end