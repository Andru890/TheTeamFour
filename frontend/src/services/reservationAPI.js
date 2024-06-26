import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getReservations = async () => {
  try {
    const res = await axios.get(`${API_URL}/reservation`)
    return res.data
  } catch (error) {
    console.error('Error fetching reservations:', error)
    throw error
  }
}

export const getReservationById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/reservation/detail/${id}`)
    return res.data
  } catch (error) {
    console.error('Error fetching reservation by ID:', error)
    throw error
  }
}

export const getReservationsByUser = async (email) => {
  try {
    const res = await axios.get(`${API_URL}/reservation/user`, {
      params: { email },
    })
    return res.data
  } catch (error) {
    console.error('Error fetching reservations by user:', error)
    throw error
  }
}

export const addReservation = async (productId, userId, reservation) => {
  try {
    const res = await axios.post(
      `${API_URL}/reservation/product/${productId}/user/${userId}`,
      reservation
    )
    return res.data
  } catch (error) {
    console.error('Error adding reservation:', error)
    throw error
  }
}
