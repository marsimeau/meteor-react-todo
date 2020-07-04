import { WebApp } from 'meteor/webapp'
import { getPathLocale } from '../../utils/locale'

WebApp.addHtmlAttributeHook(req => {
  return { lang: getPathLocale(req.url.path) }
})
