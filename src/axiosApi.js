import axios from "axios";

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
});

/// get ///
export const getUser = async (id) => {
	console.log(id)
	let res = await instance(`users/${id}`);
	return res;
};

/// ADD ///
export const addUser = async (value) => {
	let res;
	try {
		res = await instance.post(`users/add`, value);
		console.log(res)
		return res
	} catch (error) {
		console.log(error);
	}
};

/// DELETE ///
export const deleteUser = async (id) => {
	try {
		let res = await instance.delete(`users/${id}`);
		console.log("res: ", res)
	} catch (error) {
		console.log(error);
	}
};

//// update ///
export const updateUser = async (id, value) => {
	console.log(id, value)
	try {
		let res = await instance.patch(`users/${id}`, value);
		return res;
	} catch (error) {
		console.log(error);
	}
};

