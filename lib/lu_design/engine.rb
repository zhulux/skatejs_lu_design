module LuDesign
  class Engine < ::Rails::Engine
    isolate_namespace LuDesign
    config.assets.paths << File.expand_path("#{config.root}/dist/assets", __FILE__)
    initializer 'lu_design.assets.precompile' do |app|
      app.config.assets.paths << root.join('dist/assets').to_s
      app.config.assets.paths << root.join('lib/lu_design').to_s
      app.config.assets.precompile += %w(lud.css)
      app.config.assets.precompile += %w(lud.js)
    end
  end
end
