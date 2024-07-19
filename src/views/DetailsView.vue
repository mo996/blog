<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost';
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';
import { doc, deleteDoc } from 'firebase/firestore'


export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {

    const route = useRoute()
    const router = useRouter()

    const { post, error, load } = getPost(route.params.id)

    load()

    const handleDelete = async () => {
      try {
        const postRef = doc(projectFirestore, 'posts', props.id)
        await deleteDoc(postRef)
        router.push('/')
      } catch (err) {
        console.error('Error deleting post: ', err)
      }
    }

    return { post, error, handleDelete }
  }
}

</script>

<style scoped>
.tags a {
  margin-right: 10px;
}

.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>