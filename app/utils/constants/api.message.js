export default {
  WELCOME: 'Welcome to e-wallet app',
  SUCCESS_RESPONSE: 'Request was successfully processed',
  ACCESS_REVOKED: 'Your access has been revoked',
  EMAIL_CONFLICT: 'A user with your email already exists',
  PHONE_NUMBER_CONFLICT: (phone_number) => `This phone number: ${phone_number} is already in use.`,
  DB_ERROR: 'A database error occurred, either in redis or postgres',
  CREATE_USER_SUCCESSFULLY: 'user created successfully',
  CREATE_USER_FAILED: 'Error registering user',
  LOGIN_USER_SUCCESSFULLY: 'Successfully logged in user',
  NOT_FOUND_API: 'Oops, You have reached a dead end',
  INVALID_PERMISSION: 'Permission denied. Current user does not have the required permission to access this resource.',
  INTERNAL_SERVER_ERROR: 'Oops, something broke on the server!!!',
  INVALID_CREDENTIALS: 'Invalid email/password',
  AUTH_REQUIRED: 'Access denied,a valid access token is required',
  EMAIL_EXIST_VERIFICATION_FAIL_MSG: 'Error verifying existence of email, try again.',
  EMAIL_EXIST_VERIFICATION_FAIL: 'EMAIL_EXIST_VERIFICATION_FAIL',
  ROLE_NOT_SUFFICIENT: 'User is not authorized to perform the role',
  SUCCESSFULLY_FETCHED_BANK_DATA: 'Successfully fetched banks',
  ERROR_FETCHING_BANK_DETAILS: 'Error fetching banks',
  SUCCESSFULLY_VERIFIED_BANK_DETAILS: 'Approved or completed successfully',
  ERROR_VERIFYING_BANK_ACCOUNT: `This bank account (possibly a virtual bank account) is not allowed on 
    Ewallet at this time, please change it and try again.`,
  INVALID_PASSWORD_MATCH: 'Sorry, password is incorrect, please try again',
  ACCOUNT_NUMBER_CONFLICT: 'The bank account you entered is already in use on Ewallet. Please add a unique bank account to proceed',
  INVALID_ACCOUNT_NUMBER: 'The provided account number does not belong to this user',
  SUCCESSFULLY_SAVED_ACCOUNT_NUMBER: 'Successfully saved bank account details',
  SUCCESSFULLY_CONNECTED_CARD: 'Successfully connected card',
  ERROR_SAVING_ACCOUNT_NUMBER: 'Successfully saved bank account details',
};
