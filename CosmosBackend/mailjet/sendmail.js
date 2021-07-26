const dotenv = require('dotenv');

dotenv.config();

const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

const sendmail = ( mailid , username ) => {

	var activate = false;

	function act() {
		activate=true;
	}

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
						"HTMLPart": `<div>
						<p>Dear ${username}, thanks for jumping into Singularity.</p> 
						<p>Post anything related to cosmos here and have fun.</p>
						<button onclick=\"${act()}\">Activate Account</button>
						</div>`
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