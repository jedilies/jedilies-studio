import {sanityConfig} from '@lib/sanityConfig'

export default async function createCategory(req, res) {
  const { _id, name, email, comment} = JSON.parse(req.body)
  try {
    await sanityConfig.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      title
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit`, err})
  }
  return res.status(200).json({ message: 'New Category submitted' })
}