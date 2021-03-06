import express = require('express')

import search from './search'
import versions from './versions'
import entries from './entries'

const router = express.Router()

router.use('/search', search)
router.use('/versions', versions)
router.use('/entries', entries)

router.get('/health', function (req, res) {
  res.status(200).end()
})

export default router
