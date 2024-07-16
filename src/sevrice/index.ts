import axios from "axios";

export const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:9999/authors', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        return (response.data);
      } else {
        throw new Error('Không tìm thấy sinh viên');
      }
    } catch (error) {
      console.error('Lỗi tìm sinh viên:', error);
    }
  };