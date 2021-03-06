import UserModel from '../../../models/user';
import {
  successResponse, hashPassword, regenerateUniqueId, ApiError, constants,
} from '../../../utils';
import queries from '../../../db/queries/auth';

const { CREATE_USER_SUCCESSFULLY, CREATE_USER_FAILED } = constants;
const { getUserById } = queries;

/**
 * create a user.
 *
 * @param { Request } req - The request from the endpoint.
 * @param { Response } res - The response returned by the method.
 * @param { Function } next - Calls the next handler.
 * @returns { JSON } A JSON response with the registered admin's details and a JWT.
 * @memberof authController
 */
const userSignUp = async(req, res, next) => {
  try {
    const { password } = req.body;
    req.body.id = await regenerateUniqueId('USR', getUserById);
    const { hash, salt } = await hashPassword(password);
    req.body.salt = salt;
    req.body.hash = hash;
    const staff = new UserModel(req.body);
    const data = await staff.save();
    logger.info(`saving user-${req.body.id} details in controllers > auth > index.js`);
    return successResponse(res, {
      status: 201,
      message: CREATE_USER_SUCCESSFULLY,
      data,
    });
  } catch (e) {
    logger.error(e);
    next(new ApiError({ message: CREATE_USER_FAILED, errors: e.message }));
  }
};

export { userSignUp };
