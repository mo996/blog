import { ref } from 'vue'
import { projectFirestore } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {

      const docRef = doc(projectFirestore, 'posts', id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw Error('No data available!');
      }

      post.value = { ...docSnap.data(), id: docSnap.id };

    } catch (err) {
      error.value = err.message
      console.log(error.value);
    }
  }

  return { post, error, load }
}

export default getPost
