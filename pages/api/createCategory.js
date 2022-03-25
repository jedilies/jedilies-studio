// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function createCategory(req, res) {
  const { _id, title, description} = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      _id: title,
      title: '',
      description: '',
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit new content`, err})
  }
  return res.status(200).json({ message: 'Content submitted' })
}