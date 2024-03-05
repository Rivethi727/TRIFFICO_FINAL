// userModel.js
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'

const userSchema = new mongoose.Schema({
	firstName: { type: String,  },
	email: { type: String,  },
	password: { type: String,  },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, 'MvdxpDbbS3D9vNHk6Oo6JA', {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

export default User ;  