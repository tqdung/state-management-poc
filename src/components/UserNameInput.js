import connect from "./connect";

function UserNameInput({ user_name, setName }) {
  return (
    <div>
      <label>Typing to update user name: </label>
      <input
        value={user_name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user_name: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch({ type: "UPDATE_NAME", payload: name }),
});

export default connect(UserNameInput)(mapStateToProps, mapDispatchToProps);
