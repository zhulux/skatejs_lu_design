Hologram::CodeExampleRenderer::Factory.define('erb') do
  example_template 'erb_example_template'

  lexer { Rouge::Lexer.find(:erb) }

  rendered_example do |code|
    code
  end
end