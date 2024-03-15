import connect from "./connect";

function UserAge({ user_age }) {
    console.log('re-render UserAge');
    return <div>User age: {user_age}</div>
}

const mapStateToProps = (state) => ({
    user_age: state.user.age
})

export default connect(UserAge)(mapStateToProps);