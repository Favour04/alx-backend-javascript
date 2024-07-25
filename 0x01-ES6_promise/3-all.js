import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = uploadPhoto();
    const user = createUser();
    await Promise.all([photo, user])
      .then((values) => {
        console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
      });
  } catch (error) {
    console.log('Signup system offline');
  }
}
