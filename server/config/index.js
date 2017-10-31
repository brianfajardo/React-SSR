import developmentKeys from './development'
import productionKeys from './production'

if (process.env.NODE_ENV === 'production') {
  return productionKeys
} else {
  return developmentKeys
}
