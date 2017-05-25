# get-tweet-retweeters

Gets all the handles of the user who have retweeted a given tweet via command line arguments.

## Pre-requisites

* Have installed NodeJS
* Sign up to Twitter developers and create an application
* You will need the consumer_key, consumer_secret, access_token_key and access_token_secret found on you Twitter application

## Installation

1. Clone or download this repository
2. `cd` into directory
3. `npm install`
4. Create a `config.json` file in the root of the project and paste there the following json with your credentials:
    ```json
    {
        "consumer_key": "your consumer key",
        "consumer_secret": "your consumer secret",
        "access_token_key": "your access token key",
        "access_token_secret": "your access token secret"
    }
    ```

## Usage

`npm start <tweet-id>`
