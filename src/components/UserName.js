import connect from "./connect";

function UserName({ user_name }) {
    console.log('re-render UserName');
    return <div>User name: {user_name}</div>
}

const mapStateToProps = (state) => ({
    user_name: state.user.name
})

export default connect(UserName)(mapStateToProps);