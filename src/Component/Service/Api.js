import axios from "axios";

const url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log("error.message", error.message);
  }
};

export const setCoversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("error while conversation", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("error while getconversation", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
    // return response.data;
  } catch (error) {
    console.log("error while getconversation", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    // console.log(id);
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while getconversation", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    // console.log(id);
    let response = await axios.post(`${url}/file/upload/`, data);
    return response.data;
  } catch (error) {
    console.log("error while getconversation", error.message);
  }
};
