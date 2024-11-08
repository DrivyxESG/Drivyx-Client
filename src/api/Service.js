import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/items';

// Fetch items by type
export const fetchItemsByType = async (type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Create a new item
export const createItem = async (itemData) => {
  try {
    const response = await axios.post(API_BASE_URL, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};
