import bcrypt from 'bcryptjs'
import { UserAccounts, UserProfiles, SubscripitionDetails, SubscriptionTypes } from '../models'

async function CreateAccount(req, res) {
	const {
		email,
		password,
		confirmPassword,
		firstName,
		middleName,
		lastName,
		age,
		weight,
		subscription,
		goal
	} = req.body

	try {
		
		if (password !== confirmPassword) return res.status(400).json({message: 'Forbidden: Mismatch Password and Confirm Password'})

		const hashedPassword = await bcrypt.hash(password, 10)

		const accountCreation = await UserAccounts.create({
			email: email,
			encryptedPassword: hashedPassword
		})

		if (!accountCreation.ok) return res.status(400).json({message: "Account Creation Error"})
			
		const profileCreation = await UserProfiles.create({
			firstName: firstName,
			middleName: middleName,
			lastName: lastName,
			age: age,
			weight: weight,
			subscription: subscription
		})

		if (!profileCreation.ok) return res.status(400).json({message: "Profile Creation Error"})

		const subscriptionDetails = await SubscripitionDetails.create({
			subscriptionType: subscription,
			userGoals: goal
		})
		
		if (!subscriptionDetails.ok) return res.status(400).json({message: "Subscription Details Creation Error"})

		return res.status(200).json({message: 'Account Creation Successful'})

	} catch (error) {
		
	}

}

async function LoginAccount (req, res) {
	
	const {
		email, 
		password
	} = req.body

	try {
		
		const account = await UserAccounts.findOne({
			where: {
				email: email
			}
		})

		if (account.length === 0) throw new Error('Email Does Not Exist!')

		const isMatch = await bcrypt.compare(password, account.encryptedPassword)
		if (!isMatch) throw new Error('Password Does Not Match User Email')
		
		return res.status(200).json({message: 'Successful Login'})

	} catch (error) {
		return res.status(400).json({message: 'User Login Error', error: error.message})
	}
}

export { CreateAccount, LoginAccount }