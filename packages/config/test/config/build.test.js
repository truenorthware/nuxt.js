import buildConfig from '../../src/config/build'

describe('config: build', () => {
  test('should return dev filenames', () => {
    const { filenames } = buildConfig()
    const env = { isDev: true }
    expect(filenames.app(env)).toEqual('[name].js')
    expect(filenames.chunk(env)).toEqual('[name].js')
    expect(filenames.css(env)).toEqual('[name].css')
    expect(filenames.img(env)).toEqual('[path][name].[ext]')
    expect(filenames.font(env)).toEqual('[path][name].[ext]')
    expect(filenames.video(env)).toEqual('[path][name].[ext]')
  })

  test('should return prod filenames', () => {
    const { filenames } = buildConfig()
    const env = { isDev: false }
    expect(filenames.app(env)).toEqual('[name].[contenthash].js')
    expect(filenames.chunk(env)).toEqual('[name].[contenthash].js')
    expect(filenames.css(env)).toEqual('[name].[contenthash].css')
    expect(filenames.img(env)).toEqual('img/[name].[contenthash:7].[ext]')
    expect(filenames.font(env)).toEqual('fonts/[name].[contenthash:7].[ext]')
    expect(filenames.video(env)).toEqual('videos/[name].[contenthash:7].[ext]')
  })

  test('should return modern filenames', () => {
    const { filenames } = buildConfig()
    const env = { isDev: true, isModern: true }
    expect(filenames.app(env)).toEqual('modern-[name].js')
    expect(filenames.chunk(env)).toEqual('modern-[name].js')
  })
})
