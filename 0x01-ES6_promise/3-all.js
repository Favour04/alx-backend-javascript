import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
	const photo = uploadPhoto()
	const user = createUser()

	user
	.then((data) => {
		const fname = data.firstName;
		const lname = data.lastName;

		photo
		.then((data) => {
			const photo = data.body;
			console.log(`${photo} ${fname} ${lname}`)
		})
	})
	.catch(() => console.log('Signup system offline'))
}
