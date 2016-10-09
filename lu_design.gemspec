$LOAD_PATH.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'lu_design/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'lu_design'.freeze
  s.version     = LuDesign::VERSION
  s.authors     = ['BorisDing']
  s.email       = ['borisding@zhulux.com']
  s.homepage    = 'https://zhulux.com'
  s.summary     = 'An enterprise-class Rails UI Library.'
  s.license     = 'MIT'

  s.files = Dir['{config,lib,src,dist}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.rdoc']
  s.required_ruby_version = '>= 2.3'
  s.add_dependency 'rails', '> 4', '< 5.1'

  s.add_development_dependency 'hologram', '>= 1.4.0'
end
