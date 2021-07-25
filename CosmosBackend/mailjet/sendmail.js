const dotenv = require('dotenv');

dotenv.config();

const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

module.exports.sendmail = ( mailid , username ) => {

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
						"TextPart": `Welcome to Singularity`,
						"HTMLPart": <div>
							<p>Dear {username}, thanks for jumping into Singularity. Post anything related to cosmos here and have fun.</p> 
							<p>Click on the link below to activate account</p>
							<button>Activate account</button>
						</div> 
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

module.exports.forgotpassword = ( mailid , username ) => {

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
						"TextPart": `Welcome to Singularity`,
						"HTMLPart": `Dear ${username}, Click on this link to reset your password`
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