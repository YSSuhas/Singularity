const dotenv = require('dotenv');

dotenv.config();

const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

const sendmail = ( mailid , username ) => {

    const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
				{
						"From": {
								"Email": "yssuhas@gmail.com",
								"Name": "YSS"
						},
						"To": [
								{
										"Email": mailid,
										"Name": username
								}
						],
						"Subject": "Singularity",
						"TextPart": `Hi there ${username}`,
						"HTMLPart": `Dear ${username}, thanks for jumping into Singularity. Post anything related to cosmos here and have fun`
				}
		]
	})
request
	.then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(err.statusCode)
	})

}

module.exports = sendmail