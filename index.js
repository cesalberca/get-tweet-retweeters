const Twitter = require('twitter')
const credentials = require('./config')
const colors = require('colors')

const client = new Twitter(credentials)

async function init () {
  const tweetId = process.argv[2]

  console.log(`Getting all retweeters from tweet with id: ${tweetId}...`.blue)
  const retweeters = await client.get('statuses/retweeters/ids', {id: tweetId})
  console.log('Got all the retweers!'.green)
  console.log('')

  const retweetersHandles = retweeters.ids.map(getUserById)

  Promise.all(retweetersHandles)
  .then(users => users.map(user => {
    console.log(user)
  }))
  .then(_ => {
    console.log('')
    console.log(`${retweeters.ids.length} retweets`.blue)
  })
}

async function getUserById (id) {
  const user = await client.get('users/show', {user_id: id})
  return user.screen_name
}

init()
