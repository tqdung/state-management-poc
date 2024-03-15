import connect from "./connect";

function UserAgeInput({ user_age, setAge }) {
  return (
    <div>
      <label>Typing to update user age: </label>
      <input
        value={user_age}
        onChange={(event) => setAge(event.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user_age: state.user.age,
});

const mapDispatchToProps = (dispatch) => ({
  setAge: (age) => dispatch({ type: "UPDATE_AGE", payload: age }),
});

export default connect(UserAgeInput)(mapStateToProps, mapDispatchToProps);
