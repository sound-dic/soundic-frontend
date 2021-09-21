import React from "react";

const AuthForm = (props) => {
  return (
    <form style={{ marginTop: "20px" }}>
      <label for="nickname">Nick Name:</label>
      <input type="text" name="nickname" required />
    </form>
  );
};

export default AuthForm;
