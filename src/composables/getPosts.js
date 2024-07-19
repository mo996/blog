import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = () => {
    try {
      const q = query(collection(projectFirestore, 'posts'), orderBy('createdAt', 'desc'));

      onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
