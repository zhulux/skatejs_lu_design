module LuDesign
  class Engine < ::Rails::Engine
    isolate_namespace LuDesign
    config.assets.paths << File.expand_path("#{config.root}/dist/assets", __FILE__)
    initializer 'lu_design.add_helpers' do
      ActionView::Base.send :include, LuDesign::Helper
    end
    initializer 'lu_design.assets.precompile' do |app|
      app.config.assets.paths << root.join('dist/assets').to_s
      app.config.assets.precompile += %w(lud.css)
      app.config.assets.precompile += %w(lud.js)
    end
  end
end
