import axios from "axios";

export default async (userToken, setAllusers) => {
  try {
    const { data: response } = await axios.get(
      "http://localhost:3333/users",
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    setAllusers(response);
  } catch (error) {
    console.error(error.message);
  }
};
