import axios from 'axios'

async function getAllStudents(): Promise<any> {
  return await axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.data
  })
}

export default { getAllStudents }
